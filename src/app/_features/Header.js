import Vector from "../_icons/Vector";
import Chevron from "../_icons/ChevronBottom";
import Search from "../_icons/Search";
import Moon from "../_icons/Moon";
function Header() {
  return (
    <div className="w-[1440px] h-[59px] top-[80px] flex  opacity-100 border-b border-solid border-gray-200 items-center justify-center bg-white">
      <div className="w-[1280px] h-[36px] max-w-[1280px] flex justify-between items-center rotate-0 opacity-100">
        <div className="w-[92px] h-[20px] gap-2  flex  ">
          <Vector />
        </div>
        <div className="w-[488px] h-[36px] gap-3 rotate-0 opacity-100 flex">
          <button className="w-[97px] h-[36px] pt-2 pr-4 pb-2 pl-4 gap-2 items-center rotate-0 flex opacity-100 border border-[#E4E4E7] rounded-md">
            <Chevron />
            <p>Genre</p>
          </button>
          <div className="w-[379px] h-[36px] pr-3 pl-3 gap-[10px] rotate-0 flex items-center  opacity-100 border rounded-lg border-[#E4E4E7]">
            <Search />
            <input
              className="w-[54px] h-[36px] pt-2 pb-2 gap-[10px] rotate-0 opacity-100"
              placeholder="Search"
            ></input>
          </div>
        </div>
        <div className="w-[36px] h-[36px] gap-3 rotate-0 flex justify-center items-center  border rounded-md opacity-100 border-[#E4E4E7]">
          <Moon />
        </div>
      </div>
    </div>
  );
}

export default Header;
