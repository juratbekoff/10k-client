import { postProps } from "@/constants";
import {
  captchaProps,
  usGetPostById,
  useCreateView,
  useGetCaptcha,
  useVerifyCaptcha,
} from "@/lib/react-query";
import { captchaSolver, dateFormatter } from "@/utils";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link, useParams } from "react-router-dom";

import "@/styles/post.css";
import { StateShower } from "@/components";
import { useEffect, useState } from "react";
import { calculateScrollPercentage } from "@/utils/scroll";

const PostView = () => {
  const { postId, streamId } = useParams();
  const [apiRequestSent, setApiRequestSent] = useState(false);

  // react-queries api
  const getPost = usGetPostById({
    postId: +postId!,
    streamId: +streamId!,
  });
  const getCaptcha = useGetCaptcha();
  const verifyCaptcha = useVerifyCaptcha();
  const createView = useCreateView();

  if (getPost.isError) {
    return <StateShower name="Something went wrong! Plz, try again later!" />;
  }

  const post: postProps = getPost.data?.data?.post;

  const handleScroll = () => {
    const scrollPercentage = calculateScrollPercentage();

    if (scrollPercentage >= 50 && !apiRequestSent) {
      // get captcha
      let captcha: captchaProps = getCaptcha.data?.data;

      // get answer
      const answer = captchaSolver(captcha?.math_problem);

      // verify captcha
      verifyCaptcha.mutate(answer, {
        onSuccess() {
          createView.mutate(
            { postId: +postId!, streamId: +streamId! },
            {
              onSuccess(data) {
                console.log(data.data);
              },
              onError(error) {
                console.log(error);
              },
            }
          );
        },
        onError(error) {
          console.log(error);
        },
      });

      setApiRequestSent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [apiRequestSent, getCaptcha.data?.data]);

  return getPost.isFetching ? (
    <StateShower name="Loading..." />
  ) : (
    <div className="flex flex-col mx-[27%] mt-[2%] max-lg:mx-[15%] max-md:mx-[10%] max-md:mt-[7%] min-h-[100vh] ">
      <h1 className="text-3xl font-semibold text-gray-800 max-md:text-2xl">
        {post?.title}
      </h1>

      <div className="flex  gap-2 mb-8 mt-4">
        <h1 className="text-gray-500 text-[14px] self-center max-md:text-xs">
          {dateFormatter(post?.createdAt)}
        </h1>
      </div>

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
        <Link to={"#"} className="font-semibold">
          Kun.uz
        </Link>
      </div>
    </div>
  );
};

export default PostView;