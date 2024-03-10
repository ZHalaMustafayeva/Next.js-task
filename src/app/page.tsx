"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1>hello</h1>
      <button onClick={() => router.push('/posts')}>Go to the post page</button>
    </main>
  );
}
