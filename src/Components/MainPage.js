import Layout from "../Layout/Layout";
import Carousel from "./Carousel/Carousel";
import Aos from "aos";
import about from "../assets/about/about2.png";
import { Parallax } from "react-parallax";
import "aos/dist/aos.css";
import "./style.css";
import user from "../assets/icon/user-2.png";
import about1 from "../assets/about/about.png";
import homeWifi from "../assets/icon/home-wifi.png";
import difMenu from "../assets/icon/menu-board.png";
import chart from "../assets/icon/diagram.png";
import { useEffect } from "react";
import arrowLeft from "../assets/icon/arrow-left.png";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MainPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { menuItem } = useSelector((state) => state.food);
  const { branches } = useSelector((state) => state.food);

  return (
    <>
      <Layout />
      <Carousel />
      {/* menu */}
      <div className="flex gap-y-28  flex-col items-center my-28 text-[26px] md:text-2xl font-bold text-natural justify-center">
        <h3 className="mb-5 md:mb-20">منوی رستوران </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-40 md:flex-row  justify-between ">
          {menuItem.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/menu/${item.id}`}
                state={{ item }}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-44 md:w-60 relative h-28 bg-Green-Primary rounded-md"
              >
                <img className="absolute bottom-4" alt="" src={item.image} />
                <p className="py-2 px-4  border border-pale-gray absolute bg-white rounded-sm text-sm top-24 right-[45px] md:right-20 shadow-lg">
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      {/* parallax */}
      <Parallax
        className="my-12 hidden md:block"
        bgImage={about}
        strength={500}
      >
        <div>
          <div className="flex flex-col text-white md:flex-row justify-between  gap-x-14 gap-y-3 m-3 md:mx-48 md:my-20">
            <div className="flex flex-col">
              <h3 className="text-base md:text-xl">
                رستوران های زنجیره ای ترخینه
              </h3>
              <p className="my-2 text-sm leading-7">
                <br></br>مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و
                باعث افتخار
                <br></br>ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران
                هستیم. ما در<br></br> رستوران‌های زنجیره‌ای ترخینه همواره تلاش
                کردیم که در محیطی اصیل بر<br></br> پایه معماری و طراحی مدرن در
                کنار طبیعتی دلنواز، غذایی سالم و درخور<br></br>شان شما عزیزان
                ارائه دهیم
              </p>

              <div className="flex  w-full justify-end">
                <button className="bg-opacity-0 me-3 p-1 border border-white rounded-md w-32">
                  اطلاعات بیشتر
                </button>
              </div>
            </div>
            <div className="flex gap-y-28 flex-col">
              <div className="flex gap-x-20 justify-between">
                <div className="flex items-center flex-col gap-y-1">
                  <img className="w-8" alt="" src={user} />
                  <p className="text-xs">پرسنلی مجرب و حرفه ای</p>
                </div>
                <div className="flex items-center flex-col gap-y-1">
                  <img className="w-8" alt="" src={chart} />
                  <p className="text-xs">کیفیت بالای غذاها</p>
                </div>
              </div>
              <div className="flex gap-x-20 justify-between">
                <div className="flex items-center flex-col gap-y-1">
                  <img className="w-8" alt="" src={homeWifi} />
                  <p className="text-xs">محیطی دلنشین و آرام</p>
                </div>
                <div className="flex items-center flex-col gap-y-1">
                  <img className="w-8" alt="" src={difMenu} />
                  <p className="text-xs">منوی متنوع</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <Parallax
        className="my-12 block md:hidden"
        bgImage={about1}
        strength={500}
      >
        <div>
          <div className="flex flex-col text-white md:flex-row justify-between  gap-x-14 gap-y-3 m-3 md:mx-48 md:my-10">
            <div className="flex flex-col">
              <h3 className="text-base md:text-xl">
                رستوران های زنجیره ای ترخینه
              </h3>
              <p className="my-3 text-sm leading-7">
                مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
                ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
                رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل
                بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و
                درخور شان شما عزیزان ارائه دهیم.
              </p>

              <div className="flex  w-full justify-end">
                <button className="bg-opacity-0 me-3 p-1 border border-white rounded-md w-32">
                  اطلاعات بیشتر
                </button>
              </div>
            </div>
            <div className="flex gap-y-28 flex-col my-5">
              <div className="flex gap-x-7 justify-evenly">
                <div className="flex items-center flex-col gap-y-1">
                  <img className="w-8" alt="" src={user} />
                  <p className="text-xs">پرسنلی مجرب و حرفه ای</p>
                </div>
                <div className="flex items-center flex-col gap-y-1">
                  <img className="w-8" alt="" src={chart} />
                  <p className="text-xs">کیفیت بالای غذاها</p>
                </div>
              </div>
              <div className="flex gap-x-7 justify-evenly">
                <div className="flex items-center flex-col gap-y-1">
                  <img className="w-8" alt="" src={homeWifi} />
                  <p className="text-xs">محیطی دلنشین و آرام</p>
                </div>
                <div className="flex items-center flex-col gap-y-1">
                  <img className="w-8" alt="" src={difMenu} />
                  <p className="text-xs">منوی متنوع</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      {/* tarkhinehGardi */}
      <div className="w-full  my-5 md:my-20 flex justify-center text-[26px] md:text-2xl font-bold text-natural">
        ترخینه گردی
      </div>
      <div className=" mb-10 grid grid-cols-1 md:grid-cols-4 ms-6 md:mx-28 md:p-12 gap-y-6  items-center justify-center   mt-4">
        {branches.map((b) => {
          return (
            <Link
              key={b.id}
              to={`/branch/${b.id}`}
              state={{ b }}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="hover:translate-y-1 parent border items-center border-gray w-[378px] h-[110px] md:w-[228px] md:h-[410px] hover:border-natural hover:shadow-md rounded-md gap-x-3 flex flex-row md:flex-col gap-y-3 shadow-sm"
            >
              <img
                className="h-full w-[240px] md:h-[229px]  md:w-full"
                alt=""
                src={b.image}
              />
              <div className="flex items-center gap-y-3 justify-center flex-col">
                <h3 className="text-natural md:text-xl ">شعبه {b.name}</h3>
                <p className="text-sm me-2 md:px-2 md:leading-6  text-natural">
                  {b.address}
                </p>
                <Link
                  to={`/branch/${b.id}`}
                  state={{ b }}
                  className="hidden md:flex mt-4 border border-natural rounded-md p-1 items-center"
                >
                  <p>صفحه شعبه</p>
                  <img className="h-4" alt="" src={arrowLeft} />
                </Link>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
