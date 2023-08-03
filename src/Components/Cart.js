import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import "./style.css";
import user2 from "../assets/icon/user-2.png";
import position from "../assets/icon/Position.png";
import position2 from "../assets/icon/Position-cart.png";
import trash from "../assets/icon/trash.png";
import close from "../assets/icon/Close icon.png";
import warning from "../assets/icon/warning-2.png";
import arrow_right from "../assets/icon/Slider Arrow.png";
import greentrash from "../assets/icon/trash-green.png";
import logo from "../assets/icon/Logo-user.png";
import disable_trash from "../assets/icon/trash-disable.png";
import { Link, useNavigate } from "react-router-dom";
import spider from "../assets/icon/bg-icon.png";
import Footer from "./Footer";
import "./style.css";
import { Box, Divider, Modal, Rating } from "@mui/material";
import {
  addToCart,
  decFood,
  deleteFood,
  getTotals,
  resetCart,
} from "../features/food/foodSlice";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const Cart = () => {
  const { cart } = useSelector((state) => state.food);
  const { total } = useSelector((state) => state.food);
  const { totalDiscounts } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const handleOpenSearchModal = () => setOpenSearchModal(true);
  const handleCloseSearchModal = () => setOpenSearchModal(false);

  const [openUserModal, setOpenUserModal] = useState(false);
  const handleOpenUserModal = () => setOpenUserModal(true);
  const handleCloseUserModal = () => setOpenUserModal(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",

    boxShadow: 24,
  };
  const initialValues = {
    phoneNumber: "",
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .required("وارد کردن شماره همراه الزامیست!")
      .min(8, "شماره همراه حداقل باید 8 حرف باشد.")
      .matches(phoneRegExp, "فرمت شماره ی وارد شده صحیح نیست."),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <>
      <Layout />
      {cart.length ? (
        <>
          <div className="hidden md:flex w-full mt-12 justify-center items-center">
            <img alt="" src={position2} />
          </div>
          <div className="flex mx-4 mt-12 justify-between md:hidden">
            <button onClick={() => navigate("/")} className="w-8 h-6">
              <img alt="" src={arrow_right} />
            </button>
            <p>سبد خرید</p>
            <button onClick={handleOpenSearchModal} className="w-8 h-6">
              <img alt="" src={disable_trash} />
            </button>
            <Modal
              open={openSearchModal}
              onClose={handleCloseSearchModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="flex gap-y-4 flex-col dir" sx={style}>
                <div className="flex bg-gray-100 px-4 justify-between">
                  <div className="bg-gray-100 text-natural justify-center w-full flex p-3">
                    <h2>حذف محصولات</h2>
                  </div>
                  <button className="">
                    <img className="w-5 h-5" alt="" src={close} />
                  </button>
                </div>

                <p className="flex justify-center px-5 text-sm">
                  همه محصولات سبد خرید شما حذف شود؟
                </p>
                <div className="flex justify-evenly mb-6">
                  <button
                    onClick={handleCloseSearchModal}
                    className="border border-Green-Primary rounded-md text-Green-Primary w-20 "
                  >
                    بازگشت
                  </button>
                  <button
                    onClick={() => dispatch(resetCart())}
                    className="bg-red-200 w-20 rounded-md text-red"
                  >
                    حذف
                  </button>
                </div>
              </Box>
            </Modal>
          </div>
          <div className="flex flex-col gap-y-3 gap-x-10 md:flex-row mx-4 md:mx-40 mt-7 ">
            <div
              className={`border scroll-custom border-gray rounded-md max-h-[260px] md:w-[625px] md:max-h-[555px] overflow-x-hidden overflow-y-auto ${
                cart.length === 1 ? "md:h-[200px]" : ""
              }`}
            >
              <div className="flex gap-y-3 my-5 flex-col">
                {cart.map((food) => (
                  <div className="md:border  mx-5 bg-gray-100 md:border-gray  md:hover:shadow-md md:bg-white  flex rounded-md">
                    <img
                      className="hidden md:block w-[169px] h-[150px]"
                      alt=""
                      src={food.image}
                    />
                    <div className="flex flex-col w-[370px] md:w-[350px] gap-y-3 mx-4 my-4">
                      <div className="flex justify-between w-full ">
                        <p>{food.name}</p>
                        <button
                          onClick={() => dispatch(deleteFood(food))}
                          className="hidden h-6 md:block"
                        >
                          <img alt="" src={trash} />
                        </button>
                        <div className="flex gap-x-3 md:hidden bg-pale-green rounded px-2">
                          <button
                            onClick={() => dispatch(addToCart(food))}
                            className="text-Green-Primary"
                          >
                            +
                          </button>
                          <p className="text-Green-Primary pt-1">
                            {food.quantity}
                          </p>

                          {food.quantity === 1 ? (
                            <button
                              onClick={() => dispatch(decFood(food))}
                              className="items-center "
                            >
                              <img alt="" src={greentrash} />
                            </button>
                          ) : (
                            <div>
                              <button
                                onClick={() => dispatch(decFood(food))}
                                className="text-Green-Primary"
                              >
                                -
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="hidden md:flex justify-between">
                        <p className="text-sm text-natural">{food.madeWith}</p>
                        <div
                          className={`${
                            food.discount === 0 ? "hidden" : "flex gap-x-3"
                          }`}
                        >
                          <p className="text-decoration-line: line-through text-gray">
                            {food.price}
                          </p>

                          <p className="text-red bg-red-200 rounded-3xl px-3">
                            %{food.discount}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex justify-between">
                        <div className="flex items-center gap-x-6">
                          <Rating
                            size="small"
                            name="read-only"
                            value={food.favarite}
                            readOnly
                          />
                          <div className="flex gap-x-3 bg-pale-green rounded px-2">
                            <button
                              onClick={() => dispatch(addToCart(food))}
                              className="text-Green-Primary"
                            >
                              +
                            </button>
                            <p className="text-Green-Primary pt-1">
                              {food.quantity}
                            </p>
                            <div className="text-Green-Primary items-center pt-2">
                              {food.quantity === 1 ? (
                                <button
                                  onClick={() => dispatch(decFood(food))}
                                  className="items-center "
                                >
                                  <img alt="" src={greentrash} />
                                </button>
                              ) : (
                                <div>
                                  <button
                                    onClick={() => dispatch(decFood(food))}
                                    className="text-Green-Primary"
                                  >
                                    -
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-natural me-2">
                          {food.quantity *
                            (food.price - (food.price * food.discount) / 100)}
                          تومان
                        </p>
                      </div>
                      <div className="block md:hidden text-natural text-sm">
                        {food.quantity *
                          (food.price - (food.price * food.discount) / 100)}
                        تومان
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border mb-7 border-gray flex flex-col rounded-md md:w-[496px] md:h-[323px] py-5 px-3">
              <div className="hidden md:flex justify-between w-full mb-4">
                <p>سبدخرید({cart.length})</p>
                <button onClick={handleOpenSearchModal}>
                  <img alt="" src={trash} />
                </button>
                <Modal
                  open={openSearchModal}
                  onClose={handleCloseSearchModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="flex gap-y-4 flex-col dir" sx={style}>
                    <div className="flex bg-gray-100 px-4 justify-between">
                      <div className="bg-gray-100 text-natural justify-center w-full flex p-3">
                        <h2>حذف محصولات</h2>
                      </div>
                      <button onClick={handleCloseSearchModal} className="">
                        <img className="w-5 h-5" alt="" src={close} />
                      </button>
                    </div>

                    <p className="flex justify-center px-5 text-sm">
                      همه محصولات سبد خرید شما حذف شود؟
                    </p>
                    <div className="flex justify-evenly mb-6">
                      <button
                        onClick={handleCloseSearchModal}
                        className="border border-Green-Primary rounded-md text-Green-Primary w-20 "
                      >
                        بازگشت
                      </button>
                      <button
                        onClick={() => dispatch(resetCart())}
                        className="bg-red-200 w-20 rounded-md text-red"
                      >
                        حذف
                      </button>
                    </div>
                  </Box>
                </Modal>
              </div>
              <Divider className="hidden md:block" />
              <div className="flex justify-between w-full my-4">
                <p>تخفیف محصولات</p>
                <div>{totalDiscounts}</div>
              </div>
              <Divider />
              <div className="flex flex-col mb-3">
                <div className="flex justify-between w-full my-4">
                  <p> هزینه ارسال</p>
                  <div>0 تومان</div>
                </div>
                <div className="flex gap-x-3 w-full items-center">
                  <img className="w-6 h-6" alt="" src={warning} />
                  <p className="text-warning text-xs">
                    هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی
                    شما محاسبه و به این مبلغ اضافه خواهد شد.
                  </p>
                </div>
              </div>
              <Divider />
              <div className="flex flex-col">
                <div className="flex justify-between w-full my-4">
                  <p>مبلغ قابل پرداخت</p>
                  <div>{total}</div>
                </div>
                <button
                  onClick={handleOpenUserModal}
                  className="bg-Green-Primary items-center text-white rounded-md px-3 py-1 flex justify-center"
                >
                  <img className="w-7 " alt="" src={user2} />
                  <p>ورود/ ثبت‌ نام</p>
                </button>
                <Modal
                  open={openUserModal}
                  onClose={handleCloseUserModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="flex gap-y-2 flex-col dir" sx={style}>
                    <div className="flex px-4 justify-between">
                      <div className=" text-natural justify-center w-full flex p-3">
                        <img alt="" src={logo} />
                      </div>
                      <button onClick={handleCloseUserModal} className="">
                        <img className="w-5 h-5" alt="" src={close} />
                      </button>
                    </div>
                    <div className="w-full flex px-5 flex-col gap-y-4 items-center justify-center">
                      <p>ورود / ثبت ‌نام</p>
                      <p className="text-sm text-gray-400 mb-6">
                        با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد
                        شد.
                      </p>
                    </div>
                    <form
                      onSubmit={formik.handleSubmit}
                      className="w-full px-7 gap-y-4 flex flex-col"
                    >
                      <input
                        className="w-[310px] md:w-full border focus:outline-none  py-1  border-gray rounded-md px-2"
                        placeholder="شماره همراه"
                        value={formik.values.phoneNumber}
                        {...formik.getFieldProps("phoneNumber")}
                      />
                      {formik.errors.phoneNumber &&
                        formik.touched.phoneNumber && (
                          <div className="text-red text-xs ">
                            {formik.errors.phoneNumber}
                          </div>
                        )}
                      <button
                        disabled={!formik.isValid}
                        className=" disabled:bg-gray disabled:text-natural  py-1 bg-Green-Primary flex justify-center rounded-md text-white"
                      >
                        <Link to="/completeInformation"> تایید و ادامه</Link>
                      </button>
                    </form>

                    <p className="flex text-xs font-thin my-4 justify-center">
                      ورود و عضویت در ترخینه به منزله قبول
                      <p className="text-Green-Primary">
                        قوانین و مقررات{" "}
                      </p>{" "}
                      است.
                    </p>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:flex w-full mt-12 justify-center items-center">
            <img alt="" src={position} />
          </div>
          <div className="flex mx-4 mt-12 justify-between md:hidden">
            <button onClick={() => navigate("/")} className="w-8 h-6">
              <img alt="" src={arrow_right} />
            </button>
            <p>سبد خرید</p>
            <div className="w-8 h-6">
              <img alt="" src={disable_trash} />
            </div>
          </div>
          <div className="border relative mx-4 md:mx-28 mt-12 border-gray h-[450px] items-center rounded-md">
            <div className="w-full flex justify-center items-center">
              <img className="mt-16" alt="" src={spider} />
            </div>
            <div className="flex flex-col absolute top-60 right-14 md:top-52 md:right-[520px]">
              <p className="text-natural md:text-lg">
                شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
              </p>
              <div className="w-full mt-5 flex justify-center">
                <button className="border py-1 px-3 border-Green-Primary rounded-md w-32 text-Green-Primary">
                  منوی رستوران
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="w-full hidden md:block mt-16">
        <Footer />
      </div>
    </>
  );
};

export default Cart;
