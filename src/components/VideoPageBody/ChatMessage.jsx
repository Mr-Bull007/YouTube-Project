const ChatMessage = ({name, mssg}) => {
  return (
    <div className=" flex">
      <img
        alt="profile-pic"
        src="https://th.bing.com/th/id/OIP.J0Vuw5Aao6NZWhrt2Di36QHaFV?pid=ImgDet&w=474&h=341&rs=1"
        className="size-8 rounded-full object-cover mx-1 items-center mt-2"
      />
      <div className="items-center flex">
        <p className="ml-3 font-light mr-2">{name}</p>
        <p className="text-sm ">{mssg}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
