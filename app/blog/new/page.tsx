'use client';

import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import React, { useState } from 'react';
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { zodResolver } from '@hookform/resolvers/zod';
import { createBlogSchema } from "@/app/validationSchemas";
import { z } from 'zod';
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type BlogForm = z.infer<typeof createBlogSchema>

export default function NewBlog() {
    const { register, control, handleSubmit, formState: { errors } } = useForm<BlogForm>({
        resolver: zodResolver(createBlogSchema)
    });
    const router = useRouter();
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmmiting] = useState(false);
    const onSubbmit = async (data: BlogForm) => {
        console.log('check data:', data);
        try {
            setIsSubmmiting(true);
            await axios.post('/api/blog', data);
            setIsSubmmiting(false);
            router.push('/blog');
        } catch (error) {
            setIsSubmmiting(false);
            setError('An unexpected error occured');
        }
    }

    return (
        <div>
            {error && <Callout.Root color="red" className="mb-5">
                <Callout.Text>{error}</Callout.Text>
            </Callout.Root>}
            <form className="space-y-5" onSubmit={handleSubmit(onSubbmit)}>
                <TextField.Root>
                    <TextField.Input placeholder="Title" {...register('title')} />
                </TextField.Root>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                <Controller
                    name="content"
                    control={control}
                    render={({ field }) => <SimpleMDE placeholder="Content" {...field} />}
                />
                <ErrorMessage>{errors.content?.message}</ErrorMessage>
                <Button disabled={isSubmitting}>Submit New Blog {isSubmitting && <Spinner />}</Button>
            </form>
        </div>
    )
}