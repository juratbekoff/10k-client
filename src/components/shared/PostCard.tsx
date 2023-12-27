import { Post } from "@/interfaces";
import { dateFormatter } from "@/utils";
import { Link } from "react-router-dom";

const PostCard = ({ ...data }: Post) => {
  return (
    <div className="flex max-lg:flex-col max-md:gap-2 gap-5  bg-white shadow-md rounded-md p-3">
      <img
        src={data.cover_image}
        alt="not loaded"
        className="w-[30%] max-lg:w-full"
      />

      <div className="flex flex-col justify-between gap-3 py-1 ">
        <Link to={`/posts/${data.id}`} className="font-semibold max-md:text-sm">
          Xiaomi 14 Ultra "super flagman" ning asosiy xususiyatlari haqida
          ma'lumotlar
        </Link>
        <div className="flex justify-between ">
          <span className="text-blue-900 font-semibold text-base max-md:text-sm">
            {data.category.name}
          </span>
          <span className="text-sm">{dateFormatter(data.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
