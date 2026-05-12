import { useNavigate, Link } from "react-router";
import { useEffect } from "react";
import type { Route } from "./+types/post";
import { getPost } from "../data/posts";

export function meta({ data: post }: Route.MetaArgs) {
  return [{ title: post ? `${post.title} - Native` : "Not Found" }];
}

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const post = getPost(params.id);
  if (!post) {
    throw new Response("글을 찾을 수 없습니다.", { status: 404 });
  }
  return post;
}

export default function Post({ loaderData: post }: Route.ComponentProps) {
  const navigate = useNavigate();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" || e.key === "q") {
        navigate("/posts");
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div className="min-h-screen px-4 sm:px-6 py-6 sm:py-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <Link to="/" className="text-sm text-[#808080] hover:text-[#d4d4d4] transition-colors">Native</Link>
        <button
          onClick={() => navigate("/posts")}
          className="text-xs text-[#555] hover:text-[#808080] transition-colors"
        >
          cd ..
        </button>
      </div>

      <div className="text-xs text-[#555] mb-6">$ cat {post.id}.md</div>

      {post.author && (
        <div className="text-xs text-[#555] mb-4">{post.author}</div>
      )}

      <h1 className="text-base text-[#d4d4d4] mb-8">{post.title}</h1>

      <div
        className="prose-terminal"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="mt-10 text-xs text-[#555]">
        <span className="text-[#666]">q</span> back
      </div>
    </div>
  );
}
