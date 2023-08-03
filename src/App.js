import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage";
import { Provider } from "react-redux";
import { store } from "./features/store";
import Branches from "./Components/Branches";
import MenuPage from "./Components/menuPage";
import Cart from "./Components/Cart";
import CompleteInfo from "./Components/CompleteInfo";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App ">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/branch/:id" element={<Branches />} />
          <Route path="/menu/:id" element={<MenuPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/completeInformation" element={<CompleteInfo/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
