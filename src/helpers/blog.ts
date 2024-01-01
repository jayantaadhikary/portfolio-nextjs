import fs from "fs";
import matter from "gray-matter";

export interface PostMetaData {
  title: string;
  date: string;
  subtitle: string;
  published: boolean;
  slug: string;
}

export function getPostMetaData(): PostMetaData[] {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // const slugs = markdownPosts.map((post) => post.replace(".md", ""));
  // return slugs;
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle || " ",
      published: matterResult.data.published,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
}

export function getPostContent(slug: string) {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}
