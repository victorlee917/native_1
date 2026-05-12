import { useNavigate, Link } from "react-router";
import { useEffect } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Native" },
    { name: "description", content: "Native - 동호회 아카이브" },
  ];
}

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Enter") {
        navigate("/posts");
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md">
        <pre className="text-[#d4d4d4] text-[10px] sm:text-sm leading-relaxed mb-8 overflow-hidden">{`
  _   _       _   _
 | \\ | | __ _| |_(_)_   _____
 |  \\| |/ _\` | __| \\ \\ / / _ \\
 | |\\  | (_| | |_| |\\ V /  __/
 |_| \\_|\\__,_|\\__|_| \\_/ \\___|
`}</pre>

        <div className="text-[#808080] text-sm space-y-1 mb-8">
          <p>창간호 주제 1</p>
          <p>2026.05</p>
        </div>

        <Link to="/posts" className="text-sm text-[#555] inline-block">
          <span className="text-[#808080]">$ press </span>
          <span className="text-[#d4d4d4]">Enter</span>
          <span className="text-[#808080]"> to continue</span>
          <span className="cursor" />
        </Link>
      </div>
    </div>
  );
}
