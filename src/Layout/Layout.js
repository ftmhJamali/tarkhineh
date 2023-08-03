import AppBar from "../Components/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
};

export default Layout;
