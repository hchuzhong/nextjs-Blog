'use client';

import { Button, TextArea, TextField } from "@radix-ui/themes";
import Link from "next/link";
import React from 'react'

export default function NewBlog() {
    return (
        <div className="space-y-5">
            <TextField.Root>
                <TextField.Input placeholder="Title" />
            </TextField.Root>
            <TextArea placeholder="Content" />
            <Button>Submit New Blog</Button>
        </div>
    )
}