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

type BlogForm = z.infer<typeof createBlogSchema>

export default function NewBlog() {
    const { register, control, handleSubmit, formState: { errors } } = useForm<BlogForm>({
        resolver: zodResolver(createBlogSchema)
    });
    const router = useRouter();
    const [error, setError] = useState('');

    return (
        <div>
            {error && <Callout.Root color="red" className="mb-5">
                <Callout.Text>{error}</Callout.Text>
            </Callout.Root>}
            <form className="space-y-5" onSubmit={handleSubmit(async (data) => {
                console.log('check data:', data);
                try {
                    await axios.post('/api/blog', data);
                    router.push('/blog');
                } catch (error) {
                    console.log('error:', error);
                    setError('An unexpected error occured');
                }
            })}>
                <TextField.Root>
                    <TextField.Input placeholder="Title" {...register('title')} />
                </TextField.Root>
                {errors.title && <Text color="red" as="p">{errors.title.message}</Text>}
                <Controller
                    name="content"
                    control={control}
                    render={({ field }) => <SimpleMDE placeholder="Content" {...field} />}
                />
                {errors.content && <Text color="red" as="p">{errors.content.message}</Text>}
                <Button>Submit New Blog</Button>
            </form>
        </div>
    )
}