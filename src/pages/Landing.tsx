import { Button } from "@/components/ui/button";
import { loginUrl, registerUrl } from "@/constants";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="flex justify-between mx-20 max-md:mx-5 max-md:mt-2">
        <Link to={"/"} className="p-2 mt-3 flex gap-2 max-md:mt-0">
          <img
            src="/assets/logo-responsive.svg"
            width={40}
            height={30}
            alt="Picture of the author"
            className="max-md:w-8"
          />
          <span className="self-center text-[24px]  text-[#9D1F4F] font-semibold max-md:text-[19px]">
            10k.uz
          </span>
        </Link>

        <div className="flex gap-2 self-center">
          <Link to={loginUrl} target="_blank">
            <Button
              variant={"outline"}
              className="border border-gray-300 max-md:text-[14px]"
            >
              Kirish
            </Button>
          </Link>
          <Link to={registerUrl}>
            <Button variant={"primary"} className="max-md:hidden">
              Ro'yxatdan o'tish
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 gap-2">
        <img
          src="/assets/profit.png"
          alt="not loaded"
          className="w-[350px] max-md:w-[250px]"
        />
        <h1 className="text-2xl font-semibold max-md:text-[19px] max-md:text-center max-md:w-[300px] max-md:leading-7">
          Keling, kiring, oqim yaratib, daromad oling...
        </h1>
        <Link to={registerUrl} target="_blank">
          <Button
            variant={"primary"}
            size={"sm"}
            className="lg:hidden max-md:mr-1 max-md:text-[14px]"
          >
            Ro'yxatdan o'tish
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
