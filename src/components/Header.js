import { BsFillPlusCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="px-4 py-3 flex items-end justify-between">
      <div className="leading-5">
        <span className="font-medium text-[13px] text-gray-500">
          Currenct Balance
        </span>
        <div className="flex items-center">
          <div className="font-bold text-[30px]">$3,250,100</div>
          <div className="h-[26px] px-2 ml-2 flex items-center justify-center font-semibold text-[13px] rounded-full bg-red-600 text-white">
            5,50%
          </div>
        </div>
      </div>
      <div>
        <button className="flex items-center bg-amber-600 text-white h-[40px] text-sm px-3 rounded-md hover:bg-white border border-white hover:border-amber-600 hover:text-amber-600">
          <BsFillPlusCircleFill className="mr-2" />
          <span>Add</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
