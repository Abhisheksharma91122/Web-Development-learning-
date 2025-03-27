import Image from "next/image";

export default function Home() {
  return (
    <div className="container size-80 bg-red-300 relative my-5">
      <Image className="mx-auto object-cover" fill={true} quality={52} src="https://img.freepik.com/premium-photo/railway-spring-forest-tunnel-love_93200-4978.jpg?w=1380" alt="image" />
    </div>
  );
}
