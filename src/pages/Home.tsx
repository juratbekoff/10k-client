import { PostCard, StateShower } from "@/components";
import { Button } from "@/components/ui/button";
import { Post } from "@/interfaces";
import { usGetPostsList } from "@/lib/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isFetching, data } = usGetPostsList(page);

  const posts: Post[] = data?.data?.posts;

  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="flex bg-white py-4 px-8 shadow-md">
        <Link to={"/"} className="text-2xl font-bold  text-[#9D1F4F]">
          LoadMore
        </Link>
      </div>

      {isLoading ? (
        <StateShower name="Loading..." />
      ) : (
        <div className="container mx-auto flex gap-10">
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {posts?.map((items) => {
              return <PostCard key={items.id} {...items} />;
            })}
          </div>
        </div>
      )}

      {posts?.length > 20 && (
        <div className="flex justify-center">
          <Button
            className="w-[17%] bg-[#9D1F4F] hover:bg-[#9D1F4F] max-md:w-1/2"
            onClick={() => setPage(page + 1)}
          >
            {isFetching ? (
              <div className="flex gap-[5px]">
                <img src="/loader.svg" alt="..." className="h-[20px]" />
                <span className="flex mt-[9px]">Load more</span>
              </div>
            ) : (
              <span>Load more</span>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
