import { Link, useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import blackSearch from "../assets/icon/search-black.png";
import note from "../assets/icon/note.png";
import frame from "../assets/icon/frame.png";
import branchPic from "../assets/image/branch.png";
import tel from "../assets/icon/call-calling.png";
import location from "../assets/icon/location.png";
import clock from "../assets/icon/clock.png";
import Aos from "aos";
import Footer from "./Footer";
import Carousel from "./Carousel/Carousel";
import Checkbox from "@mui/material/Checkbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "./style2Swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart, getAsyncFoods } from "../features/food/foodSlice";
import { Skeleton } from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Branches = () => {
  const { foods, loading, error } = useSelector((state) => state.food);
  const branch = useLocation().state.b;
  const comments = branch.comments;
  const dispatch = useDispatch();
  console.log(comments);
  useEffect(() => {
    dispatch(getAsyncFoods());
    Aos.init();
  }, []);

  const [searchState, setSearchState] = useState("");
  const numRepeat = 5;
  const items = new Array(numRepeat).fill(null);
  return (
    <>
      <Layout />
      <Carousel />
      {/* search bar */}
      <div className="flex justify-center mt-3 items-center md:hidden">
        <input
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
          placeholder="جستجو"
          className="p-1 border relative border-gray outline-none w-full mx-3 rounded-md dir"
        />
        <Link to="/search" state={searchState} className="absolute left-5">
          <img alt="" src={blackSearch} />
        </Link>
      </div>
      {/* special offer */}
      <div className="flex flex-col mx-3 md:mx-28 mb-14 mt-9">
        <div className="text-natural mx-2 mb-8 font-bold">پیشنهاد ویژه</div>
        {loading ? (
          <>
            <div className=" hidden md:flex gap-x-4">
              {items.map((item) => (
                <div className="flex flex-col gap-y-2">
                  <Skeleton variant="rounded" width={245} height={190} />
                  <div className="flex w-full justify-center">
                    <Skeleton variant="text" width={70} />
                  </div>
                  <Skeleton variant="text" width={245} />
                  <div className="flex justify-between w-full">
                    <Skeleton variant="text" width={120} />
                    <Skeleton variant="text" width={64} />
                  </div>
                  <div className="flex justify-center w-full">
                    <Skeleton variant="text" width={221} height={36} />
                  </div>
                </div>
              ))}
            </div>
            <div className=" md:hidden flex gap-x-4">
              <div className="flex flex-col gap-y-2">
                <Skeleton variant="rounded" width={245} height={190} />
                <div className="flex w-full justify-center">
                  <Skeleton variant="text" width={70} />
                </div>
                <Skeleton variant="text" width={245} />
                <div className="flex justify-between w-full">
                  <Skeleton variant="text" width={120} />
                  <Skeleton variant="text" width={64} />
                </div>
                <div className="flex justify-center w-full">
                  <Skeleton variant="text" width={221} height={36} />
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <Skeleton variant="rounded" width={207} height={190} />
                <div className="flex w-full justify-center">
                  <Skeleton variant="text" width={50} />
                </div>
                <Skeleton variant="text" width={207} />
                <div className="flex justify-between w-full">
                  <Skeleton variant="text" width={100} />
                  <Skeleton variant="text" width={64} />
                </div>
                <div className="flex justify-center w-full">
                  <Skeleton variant="text" width={221} height={36} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={"auto"}
            spaceBetween={0}
            navigation
            className="mySwiper"
          >
            {foods
              .filter((food) => food.discount > 15)
              .slice(7)
              .map((food) => {
                return (
                  <SwiperSlide className="mx-2 md:mx-[5px] ">
                    <div
                      key={food.id}
                      className="flex  flex-col border border-gray rounded-md"
                    >
                      <img
                        className="w-[1900px] md:w-[245px] h-[190px]"
                        alt=""
                        src={food.image}
                      />
                      <p className="flex justify-center mt-3 text-natural">
                        {food.name}
                      </p>
                      <div className="flex justify-between ">
                        <div className="flex flex-col gap-y-3">
                          <div className="flex items-center ">
                            <Checkbox
                              {...label}
                              icon={<FaRegHeart className="text-gray" />}
                              checkedIcon={
                                <FaHeart className="text-Green-Primary" />
                              }
                            />
                            <p className="hidden text-gray md:block text-[10px]">
                              افزودن به علاقه مندی ها
                            </p>
                          </div>
                          <div className="flex ms-2 gap-x-1 items-center">
                            <FaStar className="text-gold" />
                            <p className="text-[14px] mt-1">{food.favarite}</p>
                            <p className="text-gray text-[14px] mt-1 hidden md:block">
                              (1{food.discount}) امتیاز
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-4 items-center mt-2">
                          <div className="flex me-3 gap-x-1 items-center">
                            <p className="text-gray text-decoration-line: line-through text-[12px]">
                              {food.price}
                            </p>
                            <p className="text-[12px] bg-red-200 rounded-3xl py-1 px-2 text-red">
                              %{food.discount}
                            </p>
                          </div>
                          <p className="text-[12px]">
                            {food.price - (food.price * food.discount) / 100}{" "}
                            تومان
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => dispatch(addToCart(food))}
                        className="bg-Green-Primary m-3 rounded-md py-2 text-sm text-white"
                      >
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        )}
      </div>

      <div className="flex flex-col bg-Green-Primary px-3 md:px-28 pb-14 pt-9">
        <div className="text-white mx-2 mb-8 font-bold ">غذاهای محبوب</div>
        {loading ? (
          <>
            <div className=" hidden md:flex gap-x-4">
              {items.map((item) => (
                <div className="flex flex-col gap-y-2">
                  <Skeleton variant="rounded" width={245} height={190} />
                  <div className="flex w-full justify-center">
                    <Skeleton variant="text" width={70} />
                  </div>
                  <Skeleton variant="text" width={245} />
                  <div className="flex justify-between w-full">
                    <Skeleton variant="text" width={120} />
                    <Skeleton variant="text" width={64} />
                  </div>
                  <div className="flex justify-center w-full">
                    <Skeleton variant="text" width={221} height={36} />
                  </div>
                </div>
              ))}
            </div>
            <div className=" md:hidden flex gap-x-4">
              <div className="flex flex-col gap-y-2">
                <Skeleton variant="rounded" width={245} height={190} />
                <div className="flex w-full justify-center">
                  <Skeleton variant="text" width={70} />
                </div>
                <Skeleton variant="text" width={245} />
                <div className="flex justify-between w-full">
                  <Skeleton variant="text" width={120} />
                  <Skeleton variant="text" width={64} />
                </div>
                <div className="flex justify-center w-full">
                  <Skeleton variant="text" width={221} height={36} />
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <Skeleton variant="rounded" width={207} height={190} />
                <div className="flex w-full justify-center">
                  <Skeleton variant="text" width={50} />
                </div>
                <Skeleton variant="text" width={207} />
                <div className="flex justify-between w-full">
                  <Skeleton variant="text" width={100} />
                  <Skeleton variant="text" width={64} />
                </div>
                <div className="flex justify-center w-full">
                  <Skeleton variant="text" width={221} height={36} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={"auto"}
            spaceBetween={0}
            navigation
            className="mySwiper"
          >
            {foods
              .filter((food) => food.favarite >= 5)
              .slice(7)
              .map((food) => {
                return (
                  <SwiperSlide className="">
                    <div className="flex w-[220px] md:w-auto flex-col md:mx-3  bg-white rounded-md border border-Green-Primary">
                      <img
                        className="w-[220px] md:w-[245px] h-[190px] "
                        alt=""
                        src={food.image}
                      />
                      <p className="flex justify-center mt-3 text-natural">
                        {food.name}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <div className="flex items-center ">
                            <Checkbox
                              {...label}
                              icon={<FaRegHeart className="text-gray" />}
                              checkedIcon={
                                <FaHeart className="text-Green-Primary" />
                              }
                            />
                            <p className="hidden text-gray md:block text-[10px]">
                              افزودن به علاقه مندی ها
                            </p>
                          </div>
                          <div className="flex ms-2 gap-x-1 items-center">
                            <FaStar className="text-gold" />
                            <p className="text-[14px] mt-1">{food.favarite}</p>
                            <p className="text-gray text-[14px] mt-1 hidden md:block">
                              (1{food.discount}) امتیاز
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[12px] me-2">
                            {food.price} تومان{" "}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => dispatch(addToCart(food))}
                        className="bg-Green-Primary m-3 rounded-md py-2 text-sm text-white"
                      >
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        )}
      </div>

      <div className="flex flex-col mx-3 md:mx-28 mb-14 mt-9">
        <div className="text-natural mx-2 mb-8 font-bold">
          غذاهای غیر ایرانی
        </div>
        {loading ? (
          <>
            <div className=" hidden md:flex gap-x-4">
              {items.map((item) => (
                <div className="flex flex-col gap-y-2">
                  <Skeleton variant="rounded" width={245} height={190} />
                  <div className="flex w-full justify-center">
                    <Skeleton variant="text" width={70} />
                  </div>
                  <Skeleton variant="text" width={245} />
                  <div className="flex justify-between w-full">
                    <Skeleton variant="text" width={120} />
                    <Skeleton variant="text" width={64} />
                  </div>
                  <div className="flex justify-center w-full">
                    <Skeleton variant="text" width={221} height={36} />
                  </div>
                </div>
              ))}
            </div>
            <div className=" md:hidden flex gap-x-4">
              <div className="flex flex-col gap-y-2">
                <Skeleton variant="rounded" width={245} height={190} />
                <div className="flex w-full justify-center">
                  <Skeleton variant="text" width={70} />
                </div>
                <Skeleton variant="text" width={245} />
                <div className="flex justify-between w-full">
                  <Skeleton variant="text" width={120} />
                  <Skeleton variant="text" width={64} />
                </div>
                <div className="flex justify-center w-full">
                  <Skeleton variant="text" width={221} height={36} />
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <Skeleton variant="rounded" width={207} height={190} />
                <div className="flex w-full justify-center">
                  <Skeleton variant="text" width={50} />
                </div>
                <Skeleton variant="text" width={207} />
                <div className="flex justify-between w-full">
                  <Skeleton variant="text" width={100} />
                  <Skeleton variant="text" width={64} />
                </div>
                <div className="flex justify-center w-full">
                  <Skeleton variant="text" width={221} height={36} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={"auto"}
            spaceBetween={0}
            navigation
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {foods
              .filter((food) => food.tag === "nonIranian")
              .slice(1, 8)
              .map((food) => {
                return (
                  <SwiperSlide className="mx-2 md:mx-[2px] ">
                    <div
                      key={food.id}
                      className="flex  flex-col border border-gray rounded-md"
                    >
                      <img
                        className="w-[1900px] md:w-[240px] h-[190px]"
                        alt=""
                        src={food.image}
                      />
                      <p className="flex justify-center mt-3 text-natural">
                        {food.name}
                      </p>
                      <div className="flex justify-between ">
                        <div className="flex flex-col gap-y-3">
                          <div className="flex items-center ">
                            <Checkbox
                              {...label}
                              icon={<FaRegHeart className="text-gray" />}
                              checkedIcon={
                                <FaHeart className="text-Green-Primary" />
                              }
                            />
                            <p className="hidden text-gray md:block text-[10px]">
                              افزودن به علاقه مندی ها
                            </p>
                          </div>
                          <div className="flex ms-2 gap-x-1 items-center">
                            <FaStar className="text-gold" />
                            <p className="text-[14px] mt-1">{food.favarite}</p>
                            <p className="text-gray text-[14px] mt-1 hidden md:block">
                              (1{food.discount}) امتیاز
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-4 items-center mt-2">
                          <div className="flex me-3 gap-x-1 items-center">
                            <p className="text-gray text-decoration-line: line-through text-[12px]">
                              {food.price}
                            </p>
                            <p className="text-[12px] bg-red-200 rounded-3xl py-1 px-2 text-red">
                              %{food.discount}
                            </p>
                          </div>
                          <p className="text-[12px]">
                            {food.price - (food.price * food.discount) / 100}{" "}
                            تومان
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => dispatch(addToCart(food))}
                        className="bg-Green-Primary m-3 rounded-md py-2 text-sm text-white"
                      >
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        )}
      </div>
      {/* menu button */}
      <div className="w-full flex justify-center">
        <button
          data-aos="zoom-out-up"
          className="flex gap-x-2 border border-Green-Primary rounded-md text-sm text-Green-Primary px-3 py-2"
        >
          <img className="w-5" alt="" src={note} />
          <p>مشاهده منوی کامل</p>
        </button>
      </div>
      {/* branch info */}
      <div className="flex justify-center my-12">
        <p data-aos="zoom-out-up">شعبه {branch.name}</p>
      </div>
      <div className="w-full flex justify-center relative ">
        <img className="w-full h-[220px] md:h-auto" alt="" src={branchPic} />
        <div className=" absolute md:top-80 top-48 w-[330px] md:w-auto border-[3px] border-Green-Primary rounded-md bg-white">
          <div className="hidden md:flex justify-between gap-x-6 p-3">
            <div className="flex flex-col gap-y-2 text-natural items-center">
              <img className="w-6" alt="" src={tel} />
              <p>۰۲۱-۳۳۵۳۵۳۵۴</p>
              <p>۰۲۱-۳۳۵۳۵۳۵۶</p>
            </div>
            <div className="flex flex-col w-64 gap-y-2 text-natural items-center">
              <img className="w-6" alt="" src={location} />
              <p>{branch.address}</p>
            </div>
            <div className="flex flex-col gap-y-2 text-natural items-center">
              <img className="w-6" alt="" src={clock} />
              <p>همه‌روزه از ساعت ۱۲ الی ۲۳ </p>
            </div>
          </div>
          <div className="flex flex-col md:hidden text-xs">
            <div className="flex  px-2 py-2  gap-x-2 text-natural items-center">
              <img className="w-6" alt="" src={location} />
              <p>{branch.address}</p>
            </div>
            <div className="flex justify-between text-xs">
              <div className="flex  px-3 text-xs py-2 w-96 gap-x-2 text-natural items-center">
                <img className="w-6" alt="" src={tel} />
                <div className="flex flex-col gap-y-2">
                  <p>۰۲۱-۳۳۵۳۵۳۵۴</p>
                  <p>۰۲۱-۳۳۵۳۵۳۵۶</p>
                </div>
                <div className="flex  px-3 text-xs py-2 w-96 gap-x-2 text-natural items-center ">
                  <img className="w-6" alt="" src={clock} />
                  <p>همه‌روزه از ساعت ۱۲ الی ۲۳ </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* comments */}
      <div className="flex w-full justify-center mt-40">نظرات کاربران</div>
      <div className="mx-3 md:mx-28 mb-10  mt-9">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={"auto"}
          spaceBetween={0}
          navigation
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {comments.map((comment) => {
            return (
              <SwiperSlide className="mb-14 sw-sl me-96 md:me-0 mt-9">
                <div className="bg-white p-4  md:m-auto  border border-gray rounded-md flex justify-center items-center gap-x-4">
                  <div className="flex flex-col w-32 items-center gap-y-2">
                    <div className="border border-gray w-10 rounded-full p-2">
                      <img alt="" src={frame} />
                    </div>
                    <p className="text-xs text-gray">{comment.name}</p>
                    <p className="text-xs text-gray">{comment.time}</p>
                  </div>
                  <div className="text-sm w-64 flex justify-center">
                    <p className=" text-natural">{comment.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Footer />
    </>
  );
};

export default Branches;
