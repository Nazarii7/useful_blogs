import Link from "next/link";

type Props = {
  posts: any[];
};

const Posts = ({ posts }: Props) => {
  return (
    <>
      <div>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { Posts };
