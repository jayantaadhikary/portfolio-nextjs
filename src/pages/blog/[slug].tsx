import { getPostContent, getPostMetaData } from "../../helpers/blog";
import Markdown from "markdown-to-jsx";

const PostPage = (props: any) => {
  const { post } = props;

  return (
    <div className="py-12">
      <h2>{post.data.date}</h2>
      <div>
        <h1 className="text-3xl font-bold pb-5">{post.data.title}</h1>
        <div className="text-justify">
          <article className="prose lg:prose-xl prose-invert">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const postMetaData = getPostMetaData();

  const paths = postMetaData.map((post: any) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { slug } = context.params;

  const matterResult = getPostContent(slug as string);

  return {
    props: {
      post: {
        content: matterResult.content,
        data: matterResult.data,
      },
    },
  };
}
