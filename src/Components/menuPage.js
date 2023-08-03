import { Link, useLocation } from "react-router-dom";
import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Layout from "../Layout/Layout";
import "./style.css";
import Carousel from "./Carousel/Carousel";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import arrow_left from "../assets/icon/arrow-left.png";
import blackSearch from "../assets/icon/search-black.png";
import Footer from "./Footer";
import { addToCart, getAsyncFoods } from "../features/food/foodSlice";
import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
const MenuPage = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const dispatch = useDispatch();
  let location = useLocation().state.item;
  console.log(location);
  const { foods, loading, error } = useSelector((state) => state.food);
  const [searchState, setSearchState] = useState("");
  const { menuItem } = useSelector((state) => state.food);
  useEffect(() => {
    dispatch(getAsyncFoods());
  }, []);
  const numRepeat = 30;
  const items = new Array(numRepeat).fill(null);
  // const tabsHandler = (item) => {
  //   location = item;
  //   navigate(`/menu/${item.id}`);
  // };

  return (
    <>
      <Layout />
      <Carousel />
      <Tab.Group defaultIndex={location.num}>
        <Tab.List>
          <div className="w-full mt-0 bg-pale-gray dir flex ps-4 py-2 gap-x-6 md:gap-x-10 md:px-28">
            {menuItem.map((item) => (
              <Tab>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? " text-Green-Primary border-b-2 border-b-Green-Primary"
                        : "text-natural"
                    }
                  >
                    {item.name}
                  </button>
                )}
              </Tab>
            ))}
          </div>
        </Tab.List>
      </Tab.Group>

      <div className="flex text-gray-400 flex-col md:flex-row  md:gap-x-9 text-xs md:text-sm dir my-4  md:ms-28">
        <div className="flex justify-center gap-x-2 md:gap-x-5 md:justify-start">
          <button
            to="#irani"
            className="bg-pale-gray rounded-2xl items-center gap-x-1 flex py-1 px-2"
          >
            <p>غذاهای ایرانی</p>
            <img className="w-3 h-3" alt="" src={arrow_left} />
          </button>
          <button
            to="#nonIranian"
            className="bg-pale-gray rounded-2xl items-center gap-x-1 flex py-1 px-2"
          >
            <p>غذاهای غیر ایرانی</p>
            <img className="w-3 h-3" alt="" src={arrow_left} />
          </button>
          <button
            to="#pizza"
            className="bg-pale-gray rounded-2xl items-center gap-x-1 flex py-1 px-2"
          >
            <p>پیتزاها</p>
            <img className="w-3 h-3" alt="" src={arrow_left} />
          </button>
          <button
            to="#sandwich"
            className="bg-pale-gray rounded-2xl items-center gap-x-1 flex py-1 px-2"
          >
            <p>ساندویچ ها</p>
            <img className="w-3 h-3" alt="" src={arrow_left} />
          </button>
          <button
            data-to-scrollspy-id="best"
            className="bg-pale-gray rounded-2xl hidden md:flex items-center gap-x-1  py-1 px-2"
          >
            <p>پرفروش ترین ها</p>
            <img className="w-3 h-3" alt="" src={arrow_left} />
          </button>
          <button
            data-to-scrollspy-id="price"
            className="bg-pale-gray rounded-2xl hidden md:flex items-center gap-x-1  py-1 px-2"
          >
            <p> اقتصادی ترین ها</p>
            <img className="w-3 h-3" alt="" src={arrow_left} />
          </button>
        </div>
        <div className="flex justify-center mt-7 md:mt-0 items-center ">
          <input
            value={searchState}
            onChange={(e) => setSearchState(e.target.value)}
            placeholder="جستجو"
            className="p-1 border relative border-gray outline-none w-96 md:w-[470px] rounded-md dir"
          />
          <Link
            to="/search"
            state={searchState}
            className="absolute left-8 md:left-36"
          >
            <img alt="" src={blackSearch} />
          </Link>
        </div>
      </div>

      {/* foods */}
      {loading ? (
        <>
          <div className="hidden md:grid md:grid-cols-2 mx-4 gap-x-3 md:mx-28 my-16 gap-y-5">
            {items.map((item) => (
              <div className="flex gap-x-3 ">
                <Skeleton
                  variant="rectangular"
                  // className="w-20 h-20 md:w-[140px] md:h-[140px]"
                  width={140}
                  height={158}
                />
                <div className="flex  flex-col">
                  <div className="flex md:w-96 justify-between">
                    <Skeleton variant="text" width={60} />
                    <Skeleton variant="text" width={30} />
                  </div>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <div className=" flex w-full items-center justify-between mt-7">
                    <Skeleton variant="text" width={90} height={18} />
                    <Skeleton variant="text" width={190} height={32} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden grid grid-cols-1">
            {items.map((item) => (
              <div className="flex  mx-4 gap-x-3 md:mx-28 my-16">
                <Skeleton
                  variant="rectangular"
                  // className="w-20 h-20 md:w-[140px] md:h-[140px]"
                  width={80}
                  height={118}
                />
                <div className="flex  flex-col">
                  <div className="flex w-[265px] justify-between">
                    <Skeleton variant="text" width={60} />
                    <Skeleton variant="text" width={30} />
                  </div>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <div className=" flex w-full items-center justify-between mt-7">
                    <Skeleton variant="text" width={16} height={16} />
                    <Skeleton variant="text" width={90} height={18} />
                    <Skeleton variant="text" width={107} height={32} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="mx-4 md:mx-28 mt-5">
          <div id="irani" className="flex justify-between">
            <p className="font-bold md:text-lg">غذاهای ایرانی</p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2">
            {foods
              .filter((food) => food.tag === "irani")
              .map((food) => {
                return (
                  <div className="flex gap-x-0 dir my-5  border border-gray rounded-md shadow-lg w-96 md:w-[630px]">
                    <img
                      className="w-20 md:w-[160px]"
                      alt=""
                      src={food.image}
                    />
                    <div className="flex flex-col px-4 pt-2 pb-1">
                      <div className="flex justify-between gap-x-6 w-[265px] md:w-[440px]">
                        <p className="text-natural text-sm md:text-base font-bold">
                          {food.name}
                        </p>
                        <div className="hidden md:block">
                          <Checkbox
                            {...label}
                            icon={<FaRegHeart className="text-gray text-2xl" />}
                            checkedIcon={
                              <FaHeart className="text-Green-Primary text-2xl" />
                            }
                          />
                        </div>
                        <div className="flex gap-x-3 md:hidden pt-1">
                          <p
                            className={`text-sm pt-1 text-gray ${
                              food.discount !== 0
                                ? "text-decoration-line: line-through"
                                : "hidden"
                            }`}
                          >
                            {food.price}
                          </p>
                          <p
                            className={`bg-red-200 text-xs  text-red rounded-3xl p-2 ${
                              food.discount === 0 ? "hidden" : ""
                            }`}
                          >
                            %{food.discount}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-x-3 w-[265px] md:w-[440px] justify-between">
                        <p className="text-xs md:text-sm">
                          {food.madeWith} و ....
                        </p>
                        <div className="flex flex-col gap-y-1 mb-4">
                          <div className="hidden md:flex gap-x-2">
                            <p
                              className={`text-sm pt-1 text-gray ${
                                food.discount !== 0
                                  ? "text-decoration-line: line-through"
                                  : "hidden"
                              }`}
                            >
                              {food.price}
                            </p>
                            <p
                              className={`bg-red-200 text-xs text-red rounded-3xl p-2 ${
                                food.discount === 0 ? "hidden" : ""
                              }`}
                            >
                              %{food.discount}
                            </p>
                          </div>
                          <p
                            className={`text-sm text-natural ${
                              food.discount === 0 ? "" : "hidden"
                            }`}
                          >
                            {food.price}تومان
                          </p>

                          <p
                            className={`text-sm text-natural ${
                              food.discount === 0 ? "hidden" : ""
                            }`}
                          >
                            {food.price - (food.price * food.discount) / 100}
                            تومان
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-[265px] md:w-[440px] flex  justify-between items-center gap-x-1 ${
                          food.discount === 0 ? "mt-8" : ""
                        }`}
                      >
                        <div className="block md:hidden">
                          <Checkbox
                            {...label}
                            icon={<FaRegHeart className="text-gray " />}
                            checkedIcon={
                              <FaHeart className="text-Green-Primary" />
                            }
                          />
                        </div>
                        <Rating
                          size="small"
                          name="read-only"
                          value={food.favarite}
                          readOnly
                        />
                        <button
                          onClick={() => dispatch(addToCart(food))}
                          className="bg-Green-Primary md:w-52 text-xs md:text-base px-1 md:my-3 py-1 rounded-md text-white"
                        >
                          افزودن به سبد خرید
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* nonIranian */}
          <div id="nonIranian" className="flex justify-between">
            <p className="font-bold md:text-lg">غذاهای غیر ایرانی</p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2">
            {foods
              .filter((food) => food.tag === "nonIranian")
              .map((food) => {
                return (
                  <div className="flex gap-x-0 dir my-5  border border-gray rounded-md shadow-lg w-96 md:w-[630px]">
                    <img
                      className="w-20 md:w-[160px]"
                      alt=""
                      src={food.image}
                    />
                    <div className="flex flex-col px-4 pt-2 pb-1">
                      <div className="flex justify-between w-[265px] md:w-[440px]">
                        <p className="text-natural text-sm md:text-base font-bold">
                          {food.name}
                        </p>
                        <div className="hidden md:block">
                          <Checkbox
                            {...label}
                            icon={<FaRegHeart className="text-gray text-2xl" />}
                            checkedIcon={
                              <FaHeart className="text-Green-Primary text-2xl" />
                            }
                          />
                        </div>
                        <div className="flex gap-x-3 md:hidden pt-1">
                          <p
                            className={`text-sm pt-1 text-gray ${
                              food.discount !== 0
                                ? "text-decoration-line: line-through"
                                : "hidden"
                            }`}
                          >
                            {food.price}
                          </p>
                          <p
                            className={`bg-red-200 text-xs text-red rounded-3xl p-2 ${
                              food.discount === 0 ? "hidden" : ""
                            }`}
                          >
                            %{food.discount}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-x-3 w-[265px] md:w-[440px] justify-between">
                        <p className="text-xs md:text-sm">
                          {food.madeWith} و ....
                        </p>
                        <div className="flex flex-col gap-y-1 mb-4">
                          <div className="hidden md:flex gap-x-2">
                            <p
                              className={`text-sm pt-1 text-gray ${
                                food.discount !== 0
                                  ? "text-decoration-line: line-through"
                                  : "hidden"
                              }`}
                            >
                              {food.price}
                            </p>
                            <p
                              className={`bg-red-200 text-xs text-red rounded-3xl p-2 ${
                                food.discount === 0 ? "hidden" : ""
                              }`}
                            >
                              %{food.discount}
                            </p>
                          </div>
                          <p
                            className={`text-sm text-natural ${
                              food.discount === 0 ? "" : "hidden"
                            }`}
                          >
                            {food.price}تومان
                          </p>

                          <p
                            className={`text-sm text-natural ${
                              food.discount === 0 ? "hidden" : ""
                            }`}
                          >
                            {food.price - (food.price * food.discount) / 100}
                            تومان
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-[265px] md:w-[440px] flex  justify-between items-center gap-x-1 ${
                          food.discount === 0 ? "mt-8" : ""
                        }`}
                      >
                        <div className="block md:hidden">
                          <Checkbox
                            {...label}
                            icon={<FaRegHeart className="text-gray " />}
                            checkedIcon={
                              <FaHeart className="text-Green-Primary" />
                            }
                          />
                        </div>
                        <Rating
                          size="small"
                          name="read-only"
                          value={food.favarite}
                          readOnly
                        />
                        <button
                          onClick={() => dispatch(addToCart(food))}
                          className="bg-Green-Primary md:w-52 md:my-3 text-xs md:text-base px-1 py-1 rounded-md text-white"
                        >
                          افزودن به سبد خرید
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* pizza */}

          <div id="pizza" className="flex justify-between">
            <p className="font-bold md:text-lg">پیتزاها</p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2">
            {foods
              .filter((food) => food.tag === "pizza")
              .map((food) => {
                return (
                  <div className="flex gap-x-0 dir my-5  border border-gray rounded-md shadow-lg w-96 md:w-[630px]">
                    <img
                      className="w-20 md:w-[160px]"
                      alt=""
                      src={food.image}
                    />
                    <div className="flex flex-col px-4 pt-2 pb-1">
                      <div className="flex justify-between w-[265px] md:w-[440px]">
                        <p className="text-natural text-sm md:text-base font-bold">
                          {food.name}
                        </p>
                        <div className="hidden md:block">
                          <Checkbox
                            {...label}
                            icon={<FaRegHeart className="text-gray text-2xl" />}
                            checkedIcon={
                              <FaHeart className="text-Green-Primary text-2xl" />
                            }
                          />
                        </div>
                        <div className="flex gap-x-3 md:hidden pt-1">
                          <p
                            className={`text-sm pt-1 text-gray ${
                              food.discount !== 0
                                ? "text-decoration-line: line-through"
                                : "hidden"
                            }`}
                          >
                            {food.price}
                          </p>
                          <p
                            className={`bg-red-200 text-xs text-red rounded-3xl p-2 ${
                              food.discount === 0 ? "hidden" : ""
                            }`}
                          >
                            %{food.discount}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-x-3 w-[265px] md:w-[440px] justify-between">
                        <p className="text-xs md:text-sm">
                          {food.madeWith} و ....
                        </p>
                        <div className="flex flex-col gap-y-1 mb-4">
                          <div className="hidden md:flex gap-x-2">
                            <p
                              className={`text-sm pt-1 text-gray ${
                                food.discount !== 0
                                  ? "text-decoration-line: line-through"
                                  : "hidden"
                              }`}
                            >
                              {food.price}
                            </p>
                            <p
                              className={`bg-red-200 text-xs text-red rounded-3xl p-2 ${
                                food.discount === 0 ? "hidden" : ""
                              }`}
                            >
                              %{food.discount}
                            </p>
                          </div>
                          <p
                            className={`text-sm text-natural ${
                              food.discount === 0 ? "" : "hidden"
                            }`}
                          >
                            {food.price}تومان
                          </p>

                          <p
                            className={`text-sm text-natural ${
                              food.discount === 0 ? "hidden" : ""
                            }`}
                          >
                            {food.price - (food.price * food.discount) / 100}
                            تومان
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-[265px] md:w-[440px] flex  justify-between items-center gap-x-1 ${
                          food.discount === 0 ? "mt-8" : ""
                        }`}
                      >
                        <div className="block md:hidden">
                          <Checkbox
                            {...label}
                            icon={<FaRegHeart className="text-gray " />}
                            checkedIcon={
                              <FaHeart className="text-Green-Primary" />
                            }
                          />
                        </div>
                        <Rating
                          size="small"
                          name="read-only"
                          value={food.favarite}
                          readOnly
                        />
                        <button
                          onClick={() => dispatch(addToCart(food))}
                          className="bg-Green-Primary md:w-52 md:my-3 text-xs md:text-base px-1 py-1 rounded-md text-white"
                        >
                          افزودن به سبد خرید
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* sandwich */}

          <div id="sandwich" className="flex justify-between">
            <p className="font-bold md:text-lg">ساندویچ ها</p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2">
            {foods
              .filter((food) => food.tag === "sandwich")
              .map((food) => {
                return (
                  <div className="flex gap-x-0 dir my-5  border border-gray rounded-md shadow-lg w-96 md:w-[630px]">
                    <img
                      className="w-20 md:w-[160px]"
                      alt=""
                      src={food.image}
                    />
                    <div className="flex flex-col px-4 pt-2 pb-1">
                      <div className="flex justify-between w-[265px] md:w-[440px]">
                        <p className="text-natural text-sm md:text-base  font-bold">
                          {food.name}
                        </p>
                        <div className="hidden md:block">
                          <Checkbox
                            {...label}
                            icon={<FaRegHeart className="text-gray text-2xl" />}
                            checkedIcon={
                              <FaHeart className="text-Green-Primary text-2xl" />
                            }
                          />
                        </div>
                        <div className="flex gap-x-3 md:hidden pt-1">
                          <p
                            className={`text-sm pt-1 text-gray ${
                              food.discount !== 0
                                ? "text-decoration-line: line-through"
                                : "hidden"
                            }`}
                          >
                            {food.price}
                          </p>
                          <p
                            className={`bg-red-200 text-xs text-red rounded-3xl p-2 ${
                              food.discount === 0 ? "hidden" : ""
                            }`}
                          >
                            %{food.discount}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-x-3 w-[265px] md:w-[440px] justify-between">
                        <p className="text-xs md:text-sm">
                          {food.madeWith} و ....
                        </p>
                        <div className="flex flex-col gap-y-1 mb-4">
                          <div className="hidden md:flex gap-x-2">
                            <p
                              className={`text-sm pt-1 text-gray ${
                                food.discount !== 0
                                  ? "text-decoration-line: line-through"
                                  : "hidden"
                              }`}
                            >
                              {food.price}
                            </p>
                            <p
                              className={`bg-red-200 text-xs text-red rounded-3xl p-2 ${
                                food.discount === 0 ? "hidden" : ""
                              }`}
                            >
                              %{food.discount}
                            </p>
                          </div>
                          <p
                            className={`text-sm text-natural ${
                              food.discount === 0 ? "" : "hidden"
                            }`}
                          >
                            {food.price}تومان
                          </p>

                          <p
                            className={`text-sm text-natural ${
                              food.discount === 0 ? "hidden" : ""
                            }`}
                          >
                            {food.price - (food.price * food.discount) / 100}
                            تومان
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-[265px] md:w-[440px] flex  justify-between items-center gap-x-1 ${
                          food.discount === 0 ? "mt-8" : ""
                        }`}
                      >
                        <div className="block md:hidden">
                          <Checkbox
                            {...label}
                            icon={<FaRegHeart className="text-gray " />}
                            checkedIcon={
                              <FaHeart className="text-Green-Primary" />
                            }
                          />
                        </div>
                        <Rating
                          size="small"
                          name="read-only"
                          value={food.favarite}
                          readOnly
                        />
                        <button
                          onClick={() => dispatch(addToCart(food))}
                          className="bg-Green-Primary md:w-52 md:my-3 text-xs md:text-base px-1 py-1 rounded-md text-white"
                        >
                          افزودن به سبد خرید
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default MenuPage;
