import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  branches: [
    {
      id: 1,
      image: "../assets/branch/ekbatan.png",
      name: " اکــــباتـــان ",
      address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
      comments: [
        {
          id: 1,
          name: "سردار وظیفه",
          time: "در 23 فروردین 1402",
          content:
            "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
        {
          id: 2,
          name: "یلدا آقافضلی",
          time: "در 12 اردیبهشت 1402",
          content:
            "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
        {
          id: 3,
          name: " حمید امینی",
          time: "در 19 تیر 1402",
          content:
            "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
        {
          id: 4,
          name: "کاوه روحی",
          time: "در 23 خرداد 1402",
          content:
            "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
      ],
    },
    {
      id: 2,
      image: "../assets/branch/chaloos.png",
      name: "چــالــوس",
      address: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه",
      comments: [
        {
          id: 1,
          name: "سردار وظیفه",
          time: "در 23 فروردین 1402",
          content:
            "از با صفا بودن شعبه چالوس هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه چالوس رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
        {
          id: 2,
          name: "یلدا آقافضلی",
          time: "در 12 اردیبهشت 1402",
          content:
            "از با صفا بودن شعبه چالوس هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه چالوس رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
        {
          id: 3,
          name: " حمید امینی",
          time: "در 19 تیر 1402",
          content:
            "از با صفا بودن شعبه چالوس هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه چالوس رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
        {
          id: 4,
          name: "کاوه روحی",
          time: "در 23 خرداد 1402",
          content:
            "از با صفا بودن شعبه چالوس هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه چالوس رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
      ],
    },
    {
      id: 3,
      image: "../assets/branch/aghdasieh.png",
      name: "اقدســیه",
      address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
      comments: [
        {
          id: 1,
          name: "سردار وظیفه",
          time: "در 23 فروردین 1402",
          content:
            "از با صفا بودن شعبه اقدسیه هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اقدسیه رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
        {
          id: 2,
          name: "یلدا آقافضلی",
          time: "در 12 اردیبهشت 1402",
          content:
            "از با صفا بودن شعبه اقدسیه هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اقدسیه رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
        {
          id: 3,
          name: " حمید امینی",
          time: "در 19 تیر 1402",
          content:
            "از با صفا بودن شعبه اقدسیه هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اقدسیه رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
        {
          id: 4,
          name: "کاوه روحی",
          time: "در 23 خرداد 1402",
          content:
            "از با صفا بودن شعبه اقدسیه هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اقدسیه رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
      ],
    },
    {
      id: 4,
      image: "../assets/branch/vanak.png",
      name: "ونــــک",
      address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
      comments: [
        {
          id: 1,
          name: "سردار وظیفه",
          time: "در 23 فروردین 1402",
          content:
            "از با صفا بودن شعبه ونک هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه ونک رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
        {
          id: 2,
          name: "یلدا آقافضلی",
          time: "در 12 اردیبهشت 1402",
          content:
            "از با صفا بودن شعبه ونک هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه ونک رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
        {
          id: 3,
          name: " حمید امینی",
          time: "در 19 تیر 1402",
          content:
            "از با صفا بودن شعبه ونک هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه ونک رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
        {
          id: 4,
          name: "کاوه روحی",
          time: "در 23 خرداد 1402",
          content:
            "از با صفا بودن شعبه ونک هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه ونک رستوران‌های ترخینه واقعا تشکر میکنم. ",
        },
      ],
    },
  ],
  foods: [],
  loading: false,
  error: null,
  menuItem: [
    {
      id: "main",
      num: 0,
      name: "غذای اصلی",
      image: "../../assets/menu/image-4.png",
    },
    {
      id: "appetizer",
      num: 1,
      name: "پیش غذا",
      image: "../assets/menu/image-3.png",
    },
    {
      id: "dessert",
      num: 2,
      name: "دســـر",
      image: "../assets/menu/image-2.png",
    },
    { id: "drink", num: 3, name: "نوشیدنی", image: "../assets/menu/image.png" },
  ],
  cart: [],
  searchBar: [],
  total: 0,
  totalDiscounts: 0,
};
export const getAsyncFoods = createAsyncThunk(
  "foods/getAsyncFoods",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3001/foods");
      return response.data;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const indexItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexItem < 0) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        state.cart[indexItem].quantity++;
      }
    },
    decFood: (state, action) => {
      const indexItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[indexItem].quantity > 1) {
        state.cart[indexItem].quantity -= 1;
      } else if (state.cart[indexItem].quantity === 1) {
        const filteredItems = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = filteredItems;
      }
    },
    deleteFood: (state, action) => {
      const filteredItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = filteredItems;
    },
    resetCart: (state) => {
      state.cart = [];
    },
    getTotals: (state) => {
      let { total, discount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity, discount } = cartItem;
          const itemTotal = (price - (price * discount) / 100) * quantity;
          const itemDiscount =
            (price - (price - (price * discount) / 100)) * quantity;
          cartTotal.total += itemTotal;
          cartTotal.discount += itemDiscount;
          return cartTotal;
        },
        {
          total: 0,
          discount: 0,
        }
      );
      state.total = total;
      state.totalDiscounts = discount;
    },
    searchFoods: (state, action) => {
      const value = action.payload.trim().toLowerCase();
      const filteredFood = state.foods.filter((food) =>
        food.name.toLowerCase().includes(value)
      );
      state.searchBar = filteredFood;
      console.log(state.searchBar);
    },
  },
  extraReducers: {
    [getAsyncFoods.fulfilled]: (state, action) => {
      return { ...state, foods: action.payload, loading: false, error: null };
    },
    [getAsyncFoods.pending]: (state, action) => {
      return { ...state, foods: [], loading: true, error: null };
    },
    [getAsyncFoods.rejected]: (state, action) => {
      return { ...state, foods: [], loading: false, error: action.error };
    },
  },
});

export const {
  addToCart,
  decFood,
  resetCart,
  getTotals,
  deleteFood,
  searchFoods,
} = foodSlice.actions;

export default foodSlice.reducer;
