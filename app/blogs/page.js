import Link from "next/link";

async function getData() {
  const url = "http://localhost:3000/blogs.json";
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blogs() {
  try {
    const data = await getData();
    return (
      <main>
        <h1>Blog Titles</h1>
        <ul>
          {data.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>
                Blog {blog.id}: {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    );
  } catch (error) {
    return <main>Error: {error.message}</main>; // Display error message if fetching fails
  }
}
