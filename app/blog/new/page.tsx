'use client';

import { Button, TextField } from "@radix-ui/themes";
import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface BlogForm {
    title: string;
    content: string;
}

export default function NewBlog() {
    const { register, control, handleSubmit } = useForm<BlogForm>();
    const router = useRouter();

    return (
        <form className="space-y-5" onSubmit={handleSubmit(async (data) => {
            try {
                await axios.post('/api/blog', data);
                router.push('/blog');
            } catch (error) {
                console.log('error:', error);
            }
        })}>
            <TextField.Root>
                <TextField.Input placeholder="Title" {...register('title')} />
            </TextField.Root>
            <Controller
                name="content"
                control={control}
                render={({ field }) => <SimpleMDE placeholder="Content" {...field} />}
            />
            <Button>Submit New Blog</Button>
        </form>
    )
}