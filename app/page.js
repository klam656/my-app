import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Home</h1>
        <p>
          <Link href="/about">About</Link>
        </p>
        <p>
          <Link href="/blogs">Blogs</Link>
        </p>
      </div>
    </div>
  );
}
