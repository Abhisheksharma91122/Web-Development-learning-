"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams()
  return (
    <div>
      Home the blog is {searchParams.get('blog')} and utm is {searchParams.get('utm_source')}
    </div>
  );
}
