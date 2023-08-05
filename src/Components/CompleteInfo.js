import Layout from "../Layout/Layout";
import position from "../assets/icon/Position3.png";
import truck from "../assets/icon/truck.png";
import truckFast from "../assets/icon/truck-fast.png";
import shoppingBag from "../assets/icon/shopping-bag.png";
import { useEffect, useState } from "react";
import location from "../assets/icon/location-0.png";
import closeCircle from "../assets/icon/close-circle.png";
import greentrash from "../assets/icon/trash-green.png";
import close from "../assets/icon/Close icon.png";
import trash from "../assets/icon/trash.png";
import tick from "../assets/icon/tick-circle.png";
import edit from "../assets/icon/edit-2.png";
import { Divider } from "@mui/material";
import spider from "../assets/icon/bg-icon.png";
import "./style.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decFood, getTotals } from "../features/food/foodSlice";
import { Link } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  //   p: 4,
};
const CompleteInfo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [addressData, setAddressData] = useState([]);
  const [address, setAddress] = useState({
    title: "",
    phoneNumber: "",
    address: "",
    recipient: "",
  });
  const addNewAddress = (e) => {
    e.preventDefault();
    const newAddress = {
      ...address,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setAddressData((prevState) => [...prevState, newAddress]);
    setAddress({
      title: "",
      phoneNumber: "",
      address: "",
      recipient: "",
    });
    setOpen(false);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };
  const deleteAddHandler = (address) => {
    const filteredAdd = addressData.filter((add) => add.id !== address.id);
    setAddressData(filteredAdd);
  };
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.food);
  const { total } = useSelector((state) => state.food);
  const { totalDiscounts } = useSelector((state) => state.food);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  return (
    <>
      <Layout />
      <div className="md:flex w-full mt-12 justify-center hidden">
        <img alt="" src={position} />
      </div>
      <div className="flex mb-10 flex-col gap-x-12 gap-y-5 md:flex-row mx-4 md:mx-40 mt-7">
        {/* delivery */}
        <div className="flex flex-col gap-y-9">
          <div className="border border-gray p-4 flex flex-col gap-y-7 md:flex-row justify-between gap-x-8 rounded-md">
            <div className="flex items-center gap-x-2">
              <img alt="" src={truck} />
              <p className="text-sm text-natural">روش تحویل سفارش</p>
            </div>
            <div className="flex items-center gap-x-2">
              <input type="radio" name="delivery" />
              <div className="flex flex-col gap-y-2">
                <p className="text-sm text-natural">ارسال توسط پیک</p>
                <p className="hidden md:block text-xs text-gray">
                  توسط پیک رستوران ارسال شود.
                </p>
              </div>
              <img alt="" src={truckFast} />
            </div>
            <div className="flex items-center gap-x-2">
              <input type="radio" name="shopping" className="" />
              <div className="flex flex-col gap-y-2">
                <p className="text-sm text-natural">تحویل حضوری</p>
                <p className="hidden md:block text-xs text-gray">
                  توسط پیک رستوران ارسال شود.
                </p>
              </div>
              <img alt="" src={shoppingBag} />
            </div>
          </div>
          <div className="border flex flex-col border-gray p-4 rounded-md">
            <div className="flex justify-between w-full mb-4">
              <div className="flex gap-x-2 text-sm text-natural items-center">
                <img src={location} alt="" />
                <p>آدرس‌ها</p>
              </div>
              <button
                onClick={handleOpen}
                className="flex gap-x-2 items-center"
              >
                <img className="w- h-6" src={closeCircle} alt="" />
                <p className="text-sm text-Green-Primary">افزودن آدرس</p>
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="dir flex flex-col gap-y-2" sx={style}>
                  <div className="flex bg-gray-100 px-4 justify-between">
                    <div className="bg-gray-100 dir text-natural justify-center w-full flex p-3">
                      <h2> ثبت آدرس</h2>
                    </div>
                    <button onClick={handleClose} className="">
                      <img className="w-5 h-5" alt="" src={close} />
                    </button>
                  </div>
                  <input
                    name="title"
                    value={address.title}
                    type="text"
                    className="border md:w-[420px] focus:outline-none px-3 py-1 my-4 border-gray rounded-md mx-5"
                    placeholder="عنوان آدرس"
                    onChange={changeHandler}
                  />
                  <div className="flex gap-x-2">
                    <input className="ms-5 " type="checkbox" />
                    <p className="text-sm text-natural">
                      تحویل گیرنده خودم هستم
                    </p>
                  </div>
                  <input
                    name="phoneNumber"
                    value={address.phoneNumber}
                    type="text"
                    className="border focus:outline-none px-3 py-1 my-4 border-gray rounded-md mx-5"
                    placeholder="شماره همراه"
                    onChange={changeHandler}
                  />
                  <input
                    name="recipient"
                    value={address.recipient}
                    type="text"
                    className="border focus:outline-none px-3 py-1 mb-4 border-gray rounded-md mx-5"
                    placeholder="نام تحویل گیرنده"
                    onChange={changeHandler}
                  />
                  <textarea
                    name="address"
                    value={address.address}
                    type="text"
                    className="border focus:outline-none h-40 px-3 py-1 border-gray rounded-md mx-5"
                    placeholder="آدرس دقیق شما"
                    onChange={changeHandler}
                  />
                  <div className="flex my-7 px-4 md:px-0 w-full gap-x-3 justify-evenly">
                    <button className="bg-pale-green rounded-md hover:shadow-md text-Green-Primary w-40 text-sm px-3 py-1">
                      ویرایش آدرس انتخابی
                    </button>
                    <button
                      onClick={addNewAddress}
                      className="bg-Green-Primary hover:shadow-md rounded-md text-white w-40 text-sm px-3 py-1"
                    >
                      ثبت آدرس
                    </button>
                  </div>
                </Box>
              </Modal>
            </div>
            <Divider />
            {addressData.length ? (
              <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-2">
                {addressData.map((add) => (
                  <div className="border border-gray gap-y-7 bg-gray-100  hover:border-Green-Primary p-5 rounded-md flex flex-col">
                    <div className="flex justify-between items-center">
                      <p className="text-sm md:w-[250px] text-natural">
                        {add.address}
                      </p>
                      <div className="flex gap-x-4 ms-4 items-center">
                        <button>
                          <img alt="" src={edit} />
                        </button>
                        <button onClick={() => deleteAddHandler(add)}>
                          <img alt="" src={trash} />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between gap-x-3 text-gray text-sm">
                      <p>{add.title}</p>
                      <p>{add.recipient}</p>
                      <p>{add.phoneNumber}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full flex justify-center relative">
                <img className="w-[130px]" alt="" src={spider} />
                <p className="absolute top-14 md:top-9 text-xs text-gray">
                  شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
                </p>
              </div>
            )}
          </div>
          <textarea
            type="text"
            className="border focus:outline-none h-40 px-3 py-1 border-gray rounded-md "
            placeholder="توضیحات سفارش"
          />
        </div>

        {cart.length ? (
          <div className="flex flex-col gap-y-4 p-4 text-sm border border-gray rounded-md">
            <div className="hidden md:flex w-full  justify-between">
              <p>سبد خرید ({cart.length})</p>
              <img alt="" src={trash} />
            </div>
            <Divider className="hidden md:block" />
            <div className="hidden md:flex flex-col  [&>*:nth-child(odd)]:bg-gray-100 [&>*:nth-child(even)]:bg-pale-green  h-[180px] w-[440px]  overflow-x-hidden overflow-y-auto">
              {cart.map((food) => (
                <div className="flex justify-between  items-center p-2">
                  <div className="flex   flex-col gap-y-2">
                    <p className="text-natural">{food.name}</p>
                    <p className="text-gray">
                      {food.price - (food.price * food.discount) / 100}تومان
                    </p>
                  </div>
                  <div className="flex px-2 rounded items-center gap-x-3 h-7 text-Green-Primary bg-green-100">
                    <button
                      onClick={() => dispatch(addToCart(food))}
                      className="text-Green-Primary"
                    >
                      +
                    </button>
                    <p className="text-Green-Primary pb-1">{food.quantity}</p>

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
              ))}
            </div>
            <Divider className="hidden md:block" />
            <div className="flex justify-between my-1">
              <p className="text-natural">تخفیف محصولات</p>
              <p className="text-gray">{totalDiscounts}تومان</p>
            </div>
            <Divider />
            <div className="flex justify-between my-1">
              <p className="text-natural">هزینه ارسال</p>
              <p className="text-gray">29000تومان</p>
            </div>
            <Divider />
            <div className="flex justify-between my-1">
              <p className="text-natural"> مبلغ قابل پرداخت</p>
              <p className="text-gray">{total + 29000}تومان</p>
            </div>
            <button className="flex gap-x-2 text-white w-full items-center justify-center bg-Green-Primary rounded-md py-2">
              <img alt="" src={tick} />
              <p>ثبت سفارش</p>
            </button>
          </div>
        ) : (
          <div className="border border-gray relative p-4   h-[450px]  items-center rounded-md">
            <div className="w-full flex justify-center items-center">
              <img className="mt-16" alt="" src={spider} />
            </div>
            <div className="flex flex-col absolute right-14 top-48 md:top-52 md:right-3">
              <p className="text-natural md:text-lg">
                شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
              </p>
              <div className="w-full mt-5 flex justify-center">
                <Link
                  to="/"
                  className="border py-1 px-3 border-Green-Primary rounded-md w-32 text-Green-Primary"
                >
                  منوی رستوران
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CompleteInfo;
