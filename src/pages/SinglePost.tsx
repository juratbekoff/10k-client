import { postProps } from "@/constants";
import { usGetPostById } from "@/lib/react-query";
import { dateFormatter } from "@/utils";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link, useParams } from "react-router-dom";

import "@/styles/post.css";
import { AdsComponent, StateShower } from "@/components";
import { useEffect } from "react";

const SinglePost = () => {
  const { postId } = useParams();

  // react-queries api
  const getPost = usGetPostById(+postId!);

  const post: postProps = getPost.data?.data?.post;

  useEffect(() => {
    (function (d) {
      let s = d.createElement("script");
      s.async = true;
      s.src =
        "https://puabvo.com/code/native.js?h=waWQiOjExNzEwMTYsInNpZCI6MTMwNTY2OCwid2lkIjo1MTc0NjEsInNyYyI6Mn0=eyJ";
      d.head.appendChild(s);
    })(document);
  }, []);

  if (getPost.isError) {
    const postError = getPost.error as unknown as {
      response: {
        status: number;
      };
    };

    if (getPost.error?.message === "Network Error") {
      return <StateShower name="Something went wrong! Plz, try again later!" />;
    }

    if (
      postError.response.status === 404 ||
      postError.response.status === 400
    ) {
      return <StateShower name="No info is found" />;
    }
  }

  return getPost.isFetching ? (
    <StateShower name="Loading..." />
  ) : (
    <>
      <AdsComponent dataAdSlot="6789922017" />
      <div className="flex flex-col mx-[27%] mt-[2%] max-lg:mx-[15%] max-md:mx-[10%] max-md:mt-[7%] min-h-[100vh] ">
        <h1 className="text-3xl font-semibold text-gray-800 max-md:text-2xl">
          {post?.title}
        </h1>

        <div className="flex  gap-2 mb-8 mt-4">
          <h1 className="text-gray-500 text-[14px] self-center max-md:text-xs">
            {dateFormatter(post?.createdAt)}
          </h1>
        </div>

        <div data-la-block="0133bf56-e898-4f9c-81c9-ce5df729859a"></div>

        <div
          className="text-[17px] leading-8 break-normal max-md:text-[16px] max-md:leading-7"
          dangerouslySetInnerHTML={{
            __html: post?.descr,
          }}
        ></div>

        <div className="flex gap-1 mt-5 justify-center pb-10">
          <div className="flex text-red-800">
            <CopyrightIcon />
            Manba:
          </div>
          <Link
            to={post.source_link ? post.source_link : "#"}
            className="font-semibold"
            target="_blank"
          >
            {post.source_name ? post.source_name : "Ko'rsatilmagan"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
