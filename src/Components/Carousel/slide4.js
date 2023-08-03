import slide from "../../assets/slider/Property 1=Slider 4.png";
const Slide4 = () => {
  return (
    <div className="w-full m-0 p-0 relative">
      <img className="h-[356px] w-screen relative" alt="" src={slide} />
      <p className="text-white absolute flex flex-col items-center w-full justify-center bottom-40 md:text-3xl font-bold">
        تجربه ی غذای سالم و گیاهی به سبک ترخینه
        <button className="text-white text-base p-2 bg-Green-Primary rounded-md absolute mt-32">
          سفارش آنلاین غذا
        </button>
        <button className="text-white text-xs w-28 h-14 cursor-default bg-white absolute rounded-full top-[149px] md:top-[159px]">
          gggg
        </button>
      </p>
    </div>
  );
};

export default Slide4;
