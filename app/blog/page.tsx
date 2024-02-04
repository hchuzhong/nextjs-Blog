import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function Blog() {
    return (
        <div>
            <Button><Link href='/blog/new'>New Blog</Link></Button>
        </div>
    )
}