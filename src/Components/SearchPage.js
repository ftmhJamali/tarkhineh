import { useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
import blackSearch from "../assets/icon/search-black.png";
import "./style.css";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

import notFound from "../assets/icon/GroupSearch.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, searchFoods } from "../features/food/foodSlice";
import Footer from "./Footer";
import { Checkbox } from "@mui/material";
const SearchPage = () => {
  const location = useLocation().state;
  console.log(location);
  const [search, setSearch] = useState(location);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const changeHandler = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const { searchBar } = useSelector((state) => state.food);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchFoods(search));
  }, [search]);
  return (
    <>
      <Layout />
      {searchBar.length ? (
        <div className="flex gap-y-8 my-12 items-center flex-col mx-7 md:mx-40">
          <div className="flex text-lg ">
            <p className="text-natural">نتایج جستجو برای :</p>
            <p className="text-Green-Primary">{search}</p>
          </div>
          <div className="flex relative w-[400px]">
            <input
              value={search}
              onChange={(e) => changeHandler(e)}
              className="px-2 py-1 border w-[392px]  border-gray  outline-none rounded-md dir"
            />
            <img className="absolute left-4 top-2" alt="" src={blackSearch} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6  justify-center place-content-center place-items-center  items-center ">
            {searchBar.map((food) => (
              <div
                key={food.id}
                className="flex  flex-col border border-gray rounded-md"
              >
                <img
                  className="w-[240px] md:w-[245px] h-[190px]"
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
                        checkedIcon={<FaHeart className="text-Green-Primary" />}
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
                      {food.price - (food.price * food.discount) / 100} تومان
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
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-y-8 my-12 items-center flex-col mx-20 md:mx-40">
          <p className="text-natural">موردی با این مشخصات پیدا نکردیم!</p>
          <div className="flex relative w-[400px]">
            <input
              value={search}
              onChange={(e) => changeHandler(e)}
              className="px-2 py-1 border w-[392px]  border-gray  outline-none rounded-md dir"
            />
            <img className="absolute left-4 top-2" alt="" src={blackSearch} />
          </div>
          <img className="my-5 w-[230px] md:w-[350px] " alt="" src={notFound} />
        </div>
      )}
      <Footer />
    </>
  );
};

export default SearchPage;
