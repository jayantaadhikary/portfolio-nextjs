import { Fragment } from "react";
import "animate.css";
import { getPostMetaData } from "../../helpers/blog";
import PostPreview from "@/components/PostPreview";

const BlogPage = (props: any) => {
  const { postMetaData } = props;

  postMetaData.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <Fragment>
      <div>
        <h1 className="text-3xl pb-10 text-center">My Posts</h1>

        <div className="text-center">
          {postMetaData.map((post: any) => (
            <PostPreview key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const postMetaData = getPostMetaData();
  return {
    props: {
      postMetaData,
    },
  };
}
