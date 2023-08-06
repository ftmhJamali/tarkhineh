import logo from "../assets/logo/Color=Green, Size=Big.png";
import cartPic from "../assets/icon/shopping-cart.png";
import user from "../assets/icon/user.png";
import search from "../assets/icon/search-normal.png";
import * as React from "react";
import blackSearch from "../assets/icon/search-black.png";
import "./style.css";
import arrowDown from "../assets/icon/arrow-down.png";
import TemporaryDrawer from "./Drawer";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Box, Modal, Popover } from "@mui/material";
import ModalBranch from "./ModalBranch";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",

  boxShadow: 24,
};

const AppBar = () => {
  const { cart } = useSelector((state) => state.food);
  const { menuItem } = useSelector((state) => state.food);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchState, setSearchState] = React.useState("");
  //console.log(searchState);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [openSearchModal, setOpenSearchModal] = React.useState(false);
  const handleOpenSearchModal = () => setOpenSearchModal(true);
  const handleCloseSearchModal = () => setOpenSearchModal(false);
  return (
    <section className="bg-white  shadow-md h-14  md:h-20 items-center">
      <div className="flex justify-between mt-7  mx-3 md:mx-32 items-center  mb-1">
        <TemporaryDrawer />
        <img className="w-[140px] h-[35px] lg:h-[45px]" alt="logo" src={logo} />
        <div className="hidden md:flex md:gap-x-6 text-gray items-center">
          <NavLink
            to="/"
            className="hover:text-Green-Primary duration-75 ease-in-out border-b-2 border-y-white hover:border-b-Green-Primary"
          >
            صفحه اصلی
          </NavLink>

          <ModalBranch />

          <div>
            <button className="flex items-center gap-x-7" onClick={handleClick}>
              <p>منو </p>
              <img className="w-3 h-3" alt="" src={arrowDown} />
            </button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Box className="shadow-md  ">
                <div className="flex flex-col">
                  {menuItem.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="dir p-3 hover:bg-Green-Primary hover:text-white"
                      >
                        <Link to={`/menu/${item.id}`} state={{ item }}>
                          {item.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </Box>
            </Popover>
          </div>

          <button className=" hover:text-Green-Primary duration-75 ease-in-out border-b-2 border-y-white hover:border-b-Green-Primary">
            اعطای نمایندگی
          </button>
          <button className="hover:text-Green-Primary duration-75 ease-in-out border-b-2 border-y-white hover:border-b-Green-Primary">
            درباره ما
          </button>
          <button className="hover:text-Green-Primary duration-75 ease-in-out border-b-2 border-y-white hover:border-b-Green-Primary">
            تماس با ما
          </button>
        </div>
        <div className="flex gap-x-3">
          <div className="hidden md:block">
            <button
              onClick={handleOpenSearchModal}
              className="hidden md:block bg-pale-green p-1 rounded"
            >
              <img alt="search" src={search} />
            </button>
            <Modal
              open={openSearchModal}
              onClose={handleCloseSearchModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="flex gap-y-4 flex-col" sx={style}>
                <div className="flex w-full p-2 justify-center bg-pale-gray">
                  جستجو
                </div>
                <p className="p-4">
                  .لطفا متن خود را تایپ و سپس دکمه جستجو را بزنید
                </p>
                <div className="mx-7 mb-5">
                  <input
                    value={searchState}
                    onChange={(e) => setSearchState(e.target.value)}
                    placeholder="جستجو"
                    className="p-1 border relative border-gray w-full outline-none rounded-md dir"
                  />
                  <Link
                    to="/search"
                    state={searchState}
                    className="absolute bottom-7 left-8 ms-1"
                  >
                    <img alt="" src={blackSearch} />
                  </Link>
                </div>
              </Box>
            </Modal>
          </div>
          {/* <button className="hidden md:block bg-pale-green p-1 rounded">
            <img alt="search" src={search} />
          </button> */}
          <Link to="/cart" className={`relative bg-pale-green p-1 rounded`}>
            {cart.length ? (
              <div className="w-4 h-4 absolute bottom-6 left-6 items-center flex justify-center text-xs bg-Green-Primary text-white rounded-full">
                {cart.length}
              </div>
            ) : (
              <p className="hidden"></p>
            )}
            <img className="" alt="" src={cartPic} />
          </Link>
          <button className=" bg-pale-green p-1 rounded">
            <img alt="user" src={user} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppBar;
