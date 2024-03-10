"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string
}

async function getPost(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}
const Post = ({ params }: {
    params: {
        postId: string
    }
}) => {
    const router = useRouter();
    const [post, setPost] = useState<Post | null>(null)
    let id = +params.postId

    useEffect(() => {
        const fetchData = async () => {
            const postData = await getPost(id)
            setPost(postData)
        }
        fetchData()
    }, [id])

    const handlePrev = () => {
        if (id > 1) {
            router.push(`/posts/${id - 1}`)
        }
    }
    if (!post) return <div>Loading</div>
    return (
        <>
            <div>Post {params.postId}</div>
            <p>title:{post?.title} </p>
            <p>body:{post?.body} </p>
            <button onClick={handlePrev}>prev</button>
            <button onClick={() => router.push(`/posts/${id + 1}`)}>next</button>
        </>
    )
}

export default Post