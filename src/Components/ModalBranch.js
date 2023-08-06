import { useState } from "react";
import { useSelector } from "react-redux";
import arrowDown from "../assets/icon/arrow-down.png";
import { Popover } from "@mui/material";

import Box from "@mui/material/Box";
import "./style.css";
import { Link } from "react-router-dom";
const ModalBranch = () => {
  const { branches } = useSelector((state) => state.food);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <button className="flex items-center gap-x-7" onClick={handleClick}>
        <p>شعبه ها </p>
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
            {branches.map((b) => {
              return (
                <div key={b.id} className="dir p-3 hover:bg-Green-Primary hover:text-white">
                  <Link to={`/branch/${b.id}`} state={{b}}>{b.name}</Link>
                </div>
              );
            })}
          </div>
        </Box>
      </Popover>
    </div>
  );
};

export default ModalBranch;
