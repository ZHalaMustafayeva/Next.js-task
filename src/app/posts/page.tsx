
"use client"
import { useRouter } from "next/navigation";
const Post = () => {
    const router = useRouter();
    return (
        <>
            <div>this is the common post page</div>
            <button onClick={() => router.push(`/posts/1`)}>Go to the post page</button>
        </>
    )
}

export default Post