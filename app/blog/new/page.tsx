'use client';

import { Button, TextField } from "@radix-ui/themes";
import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function NewBlog() {
    return (
        <div className="space-y-5">
            <TextField.Root>
                <TextField.Input placeholder="Title" />
            </TextField.Root>
            <SimpleMDE />
            <Button>Submit New Blog</Button>
        </div>
    )
}