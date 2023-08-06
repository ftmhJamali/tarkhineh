import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import menu from "../assets/icon/menu.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GoChevronRight } from "react-icons/go";
export default function TemporaryDrawer() {
  const [showBrache, setShowBranch] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const { menuItem } = useSelector((state) => state.food);
  const { branches } = useSelector((state) => state.food);
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/">
          <ListItem>صفحه اصلی </ListItem>
        </Link>
        <Divider />
        <button onClick={() => setShowBranch((state) => !state)}>
          <ListItem>شعبه</ListItem>
        </button>
        <div
          className={`${
            showBrache ? "flex flex-col text-Green-Primary" : "hidden"
          }`}
        >
          {branches.map((b) => {
            return (
              <Link key={b.id} to={`/branch/${b.id}`} state={{ b }}>
                <ListItem className="flex w-full gap-x-4 hover:bg-pale-gray">
                  <GoChevronRight />
                  <p>{b.name}</p>
                </ListItem>
              </Link>
            );
          })}
        </div>
        <Divider />

        <button onClick={() => setShowMenu((state) => !state)}>
          <ListItem>منو</ListItem>
        </button>
        <div
          className={`${
            showMenu ? "flex flex-col text-Green-Primary" : "hidden"
          }`}
        >
          {menuItem.map((item) => {
            return (
              <Link key={item.id} to={`/menu/${item.id}`} state={{ item }}>
                <ListItem className="flex w-full gap-x-4 hover:bg-pale-gray">
                  <GoChevronRight />
                  <p>{item.name}</p>
                </ListItem>
              </Link>
            );
          })}
        </div>
        <Divider />

        <Link to="/">
          <ListItem>اعطای نمایندگی</ListItem>
        </Link>
        <Divider />
        <Link to="/">
          <ListItem>درباره ما</ListItem>
        </Link>
        <Divider />
        <Link to="/">
          <ListItem>تماس با ما</ListItem>
        </Link>
        <Divider />
      </List>

    </Box>
  );

  return (
    <div className="block md:hidden">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="block md:hidden"
            onClick={toggleDrawer(anchor, true)}
          >
            <img alt="" src={menu} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
