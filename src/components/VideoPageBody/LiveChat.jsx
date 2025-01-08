import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/chatSlice";
import { generateRandomMssg, generateRandomName } from "../../utils/helper";

const LiveChat = () => {
  const [liveMssg, setLiveMssg] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling...");
      dispatch(
        addMessage({
          name: generateRandomName(),
          mssg: generateRandomMssg(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 border border-black p-2 w-full mr-4 h-[500px] bg-gray-100 rounded-lg overflow-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} mssg={c.mssg} />
        ))}
      </div>
      <form
        className="w-full ml-2 p-1 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Rushabh",
              mssg: liveMssg,
            })
          );
          setLiveMssg("");
        }}
      >
        <input
          type="text"
          placeholder="Type your message"
          className="p-1 m-1 mr-4 w-96 border border-gray-300 rounded-md"
          value={liveMssg}
          onChange={(e) => setLiveMssg(e.target.value)}
        />
        <button className="bg-gray-100 rounded-lg p-1 px-2 ml-2 my-1 hover:bg-gray-300">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
