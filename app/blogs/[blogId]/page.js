async function getData(postId) {
  const url = "http://localhost:3000/blogs.json";
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const specificPost = data.find((blog) => blog.id == postId);
  return specificPost;
}

export default async function BlogDetailPage({ params }) {
  try {
    const data = await getData(Number(params.blogId));
    return (
      <main>
        <h1>
          Blog {data.id}: {data.tittle}
        </h1>
        <ul>{data.content}</ul>
      </main>
    );
  } catch (error) {
    return <main>Error: {error.message}</main>; // Display error message if fetching fails
  }
}
