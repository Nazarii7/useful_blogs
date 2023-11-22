import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

async function getDate(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: id,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getDate(id);
  return (
    <>
      <h3>Post {post.title}</h3>
      <p>{post.body}</p>
    </>
  );
}
