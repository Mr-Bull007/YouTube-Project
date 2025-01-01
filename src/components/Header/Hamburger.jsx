import { useDispatch } from "react-redux";
import { toggleNav } from "../../store/headerSlice";

const Hamburger = () => {
  const dispatch = useDispatch();

  const toggleNavHandler = () => {
    dispatch(toggleNav());
  }

  return (
    <div>
      <div className="p-3 mt-2 hover:bg-gray-200 transition duration-150 ease-in-out rounded-full my-1 hover:cursor-pointer active:bg-gray-300" onClick={toggleNavHandler}>
        <div className="w-5 h-[2px] bg-gray-500 mb-1"></div>
        <div className="w-5 h-[3px] bg-gray-500 mb-1"></div>
        <div className="w-5 h-[2px] bg-gray-500"></div>
      </div>
    </div>
  );
};

export default Hamburger;
