"use client";
import { Posts } from "@/components/posts/posts";
import { PostSearch } from "@/components/posts_search/posts_search";
import { getAllPosts } from "@/services/getPosts";
import { Metadata } from "next";
import { useEffect, useState } from "react";

const metadata: Metadata = {
  title: "Blogs | U_B",
};

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h3>Blog</h3>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
