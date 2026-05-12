import { useNavigate, Link } from "react-router";
import { useState, useEffect, useCallback, useRef } from "react";
import type { Route } from "./+types/posts";
import { getGroupedPosts } from "../data/posts";
import type { Post } from "../data/posts";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Native - Archive" }];
}

export function clientLoader() {
  return { groups: getGroupedPosts() };
}

export default function Posts({ loaderData }: Route.ComponentProps) {
  const { groups } = loaderData;
  const navigate = useNavigate();
  const flatPosts: Post[] = groups.flatMap((g) => g.posts);
  const [selected, setSelected] = useState(0);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    itemRefs.current[selected]?.scrollIntoView({ block: "nearest" });
  }, [selected]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
        case "k":
          e.preventDefault();
          setSelected((prev) => (prev > 0 ? prev - 1 : flatPosts.length - 1));
          break;
        case "ArrowDown":
        case "j":
          e.preventDefault();
          setSelected((prev) => (prev < flatPosts.length - 1 ? prev + 1 : 0));
          break;
        case "Enter":
          navigate(`/posts/${flatPosts[selected].id}`);
          break;
        case "Escape":
        case "q":
          navigate("/");
          break;
      }
    },
    [navigate, flatPosts, selected]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  let globalIndex = 0;

  return (
    <div className="min-h-screen px-4 sm:px-6 py-6 sm:py-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <Link to="/" className="text-sm text-[#808080] hover:text-[#d4d4d4] transition-colors">Native</Link>
        <span className="text-xs text-[#555]">/archive</span>
      </div>

      {groups.map((group) => {
        const startIndex = globalIndex;
        const items = group.posts.map((post, i) => {
          const idx = startIndex + i;
          return (
            <button
              key={post.id}
              ref={(el) => { itemRefs.current[idx] = el; }}
              onClick={() => navigate(`/posts/${post.id}`)}
              onMouseEnter={() => setSelected(idx)}
              className={`flex gap-3 py-1.5 text-sm w-full text-left transition-colors ${
                idx === selected
                  ? "text-[#d4d4d4] bg-[#2a2a2a]"
                  : "text-[#808080]"
              }`}
            >
              <span className="shrink-0 w-4 hidden sm:inline">
                {idx === selected ? ">" : " "}
              </span>
              <span className="truncate flex-1">{post.title}</span>
              {post.author && (
                <span className="text-[#555] shrink-0 hidden sm:inline">{post.author}</span>
              )}
            </button>
          );
        });
        globalIndex += group.posts.length;
        return (
          <div key={group.name} className="mb-6">
            <div className="text-xs text-[#555] mb-2">{group.name}</div>
            <div className="space-y-0">{items}</div>
          </div>
        );
      })}

      <div className="mt-6 text-xs text-[#555] hidden sm:block">
        <span className="text-[#666]">j/k</span> navigate  <span className="text-[#666]">Enter</span> open  <span className="text-[#666]">q</span> back
      </div>
    </div>
  );
}
