import { PostMetaData } from "@/helpers/blog";
import Link from "next/link";

const PostPreview = (props: PostMetaData) => {
  return (
    <div className="p-2 m-2 bg-white ">
      <Link href={`/blog/${props.slug}`}>
        <p className=" text-blue-500 hover:text-gray-500">{props.title}</p>
      </Link>
      <p className="text-gray-500 ">{props.subtitle}</p>

      <p className="text-gray-500">{props.date}</p>
    </div>
  );
};

export default PostPreview;
