import { useState } from "react";
import "./style.css";
import {
  TbBrandTelegram,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaGithub } from "react-icons/fa";
const Footer = () => {
  const [words, setWords] = useState("");
  const number = words.split("").length;
  // console.log(number);

  return (
    <>
      <div className="flex relative justify-evenly md:justify-between background-image text-white">
        <div className="flex flex-col gap-y-6 items-start m-3 md:ms-56 md:my-10">
          <h2 className="font-bold">دسترسی آسان</h2>
          <button className="text-sm hover:text-Green-Primary ">
            پرسش های متداول
          </button>
          <button className="text-sm hover:text-Green-Primary ">
            قوانین ترخینه
          </button>
          <button className="text-sm hover:text-Green-Primary ">
            حریم خصوصی
          </button>
          <div className="flex gap-x-2">
            <button>
              <TbBrandTwitter className="text-2xl hover:text-Green-Primary" />
            </button>
            <button>
              <TbBrandInstagram className="text-2xl hover:text-Green-Primary" />
            </button>
            <button>
              <TbBrandTelegram className="text-2xl hover:text-Green-Primary" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 items-start m-3  md:my-10">
          <h2 className="font-bold">شعبه های ترخینه</h2>
          <button className="text-sm hover:text-Green-Primary ">
            شعبه اکباتان
          </button>
          <button className="text-sm hover:text-Green-Primary ">
            شعبه چالوس
          </button>
          <button className="text-sm hover:text-Green-Primary ">
            شعبه اقدسیه
          </button>
          <button className="text-sm hover:text-Green-Primary ">
            شعبه ونک
          </button>
        </div>

        <div className="hidden md:flex gap-x-2 m-3 md:me-56 md:my-10">
          <div className="flex flex-col gap-y-4">
            <h2 className="font-bold">پیام به ترخینه</h2>
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="w-[270px] h-[40px] px-2 py-1 border  border-gray rounded-md bg-transparent focus:border-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="شماره تماس"
              className="w-[270px] h-[40px] px-2 py-1 border  border-gray rounded-md bg-transparent focus:border-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="ایمیل (اختیاری)"
              className="w-[270px] h-[40px] px-2 py-1 border  border-gray rounded-md bg-transparent focus:border-white focus:outline-none"
            />
          </div>
          <div className="flex-col ">
            <textarea
              placeholder="پیام شما"
              value={words}
              onChange={(e) => setWords(e.target.value)}
              className="w-[300px] h-[152px] mt-10 px-2 py-1 border  border-gray rounded-md bg-transparent focus:border-white focus:outline-none"
            />
            <p className="text-xs flex justify-end">{number}/200</p>
            <div className="flex mt-5 justify-end">
              <button
                onClick={() => setWords("")}
                className="w-[183px] h-[40px] bg-transparent border border-gray hover:border-Green-Primary hover:text-Green-Primary rounded-md"
              >
                ارسال پیام
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 absolute bottom-1 items-end text-left text-sm  justify-end w-full font-normal px-2">
          <Link
            className="flex gap-x-2 justify-end hover:text-Green-Primary "
            to="https://github.com/ftmhJamali/"
          >
            <p>ftmhJamali</p>
            <FaGithub />
          </Link>
          <div className="flex gap-x-2 justify-end">
            <p>June 2023</p>
            <FaCalendarAlt />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
