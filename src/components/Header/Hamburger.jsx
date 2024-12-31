const Hamburger = () => {
  return (
    <div>
      <div className="p-3 mt-2 hover:bg-gray-200 rounded-full my-1 hover:cursor-pointer">
        <div className="w-5 h-[2px] bg-gray-500 mb-1"></div>
        <div className="w-5 h-[3px] bg-gray-500 mb-1"></div>
        <div className="w-5 h-[2px] bg-gray-500"></div>
      </div>
    </div>
  );
};

export default Hamburger;
