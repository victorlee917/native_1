import { marked } from "marked";

import forewordMd from "../content/foreword.md?raw";
import findingPlaceMd from "../content/finding-place.md?raw";
import findTalentMd from "../content/find-talent.md?raw";
import badOrgMd from "../content/bad-org.md?raw";
import becomingDevMd from "../content/becoming-dev.md?raw";
import nowDevMd from "../content/now-dev.md?raw";
import aiStockMd from "../content/ai-stock.md?raw";
import aiFomoMd from "../content/ai-fomo.md?raw";
import templestayMd from "../content/templestay.md?raw";
import enkiduMd from "../content/enkidu.md?raw";
import afterwordMd from "../content/afterword.md?raw";

export interface Post {
  id: string;
  title: string;
  author: string;
  part: string;
  contentHtml: string;
}

export interface PartGroup {
  name: string;
  posts: Post[];
}

interface PostMeta {
  id: string;
  title: string;
  author: string;
  part: string;
  md: string;
}

const postsMeta: PostMeta[] = [
  { id: "foreword", title: "편집장 서문", author: "", part: "서문", md: forewordMd },
  { id: "finding-place", title: "제자리를 찾는 나의 친구들에게", author: "민형", part: "파트1: 일", md: findingPlaceMd },
  { id: "find-talent", title: "특명 재능을 찾아라", author: "도재인", part: "파트1: 일", md: findTalentMd },
  { id: "bad-org", title: "나쁜 조직이 끌리는 이유", author: "박정현", part: "파트1: 일", md: badOrgMd },
  { id: "becoming-dev", title: "개발자가 되기까지", author: "익명", part: "파트1: 일", md: becomingDevMd },
  { id: "now-dev", title: "그리고 지금은 개발합니다", author: "이상", part: "파트1: 일", md: nowDevMd },
  { id: "ai-stock", title: "AI 모델러가 바라본 AI 섹터별 주식 투자", author: "김효진", part: "파트2: AI", md: aiStockMd },
  { id: "ai-fomo", title: "국문과 나와서 IT회사에서 일하는데 AI랑 안 친하면 안 되는 걸까", author: "Y", part: "파트2: AI", md: aiFomoMd },
  { id: "templestay", title: "템플스테이", author: "석예다", part: "파트2: AI", md: templestayMd },
  { id: "enkidu", title: "엔키두 이야기", author: "이준우", part: "파트3: 소설", md: enkiduMd },
  { id: "afterword", title: "편집 후기", author: "", part: "후기", md: afterwordMd },
];

function toPost(meta: PostMeta): Post {
  return {
    id: meta.id,
    title: meta.title,
    author: meta.author,
    part: meta.part,
    contentHtml: marked.parse(meta.md, { async: false }) as string,
  };
}

export function getPosts(): Post[] {
  return postsMeta.map(toPost);
}

export function getPost(id: string): Post | undefined {
  const meta = postsMeta.find((p) => p.id === id);
  if (!meta) return undefined;
  return toPost(meta);
}

export function getGroupedPosts(): PartGroup[] {
  const groups: PartGroup[] = [];
  const seen = new Set<string>();
  for (const meta of postsMeta) {
    if (!seen.has(meta.part)) {
      seen.add(meta.part);
      groups.push({
        name: meta.part,
        posts: postsMeta
          .filter((p) => p.part === meta.part)
          .map((m) => ({ id: m.id, title: m.title, author: m.author, part: m.part, contentHtml: "" })),
      });
    }
  }
  return groups;
}
