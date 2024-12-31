import { SEARCH_ICON_SVG_URL } from "../../utils/constants";

const SearchBar = () => {
  return (
    <div className="w-[40%] ml-[18%] mt-2">
      <form className=" flex h-12">
        <input
          type="text"
          placeholder="Search"
          className="pb-1 w-[88%] pl-4 border-2 border-gray-200 border-solid shadow-inner rounded-l-full text-md outline-none focus:border-blue-800 focus:border-[1px] focus:shadow-blue-100 focus:"
        />
        <div className="w-[12%] rounded-r-full bg-gray-100 hover:bg-gray-200">
          <button className="pl-4 pt-3">
            <svg
              xmlns={SEARCH_ICON_SVG_URL}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
