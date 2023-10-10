import { useEffect, useRef, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

function App() {
  const [player, setPlayer] = useState([]);
  const newPlayer = useRef(null);
  const addUserHandler = () => {
    const data = newPlayer.current.value;
    setPlayer((prev) => [...prev, data]);
    newPlayer.current.value = "";
  };

  const removeUserHandler = (name) => {
    const updatedPlayer = player.filter((user) => user !== name);
    setPlayer(updatedPlayer);
    localStorage.setItem("player", JSON.stringify(updatedPlayer));
  };
  useEffect(() => {
    const getPlayer = JSON.parse(localStorage.getItem("player")) || [];
    setPlayer(getPlayer);
    console.log("ni player", getPlayer);
  }, []);
  useEffect(() => {
    // Save player state to localStorage whenever it changes
    if (player.length !== 0) {
      localStorage.setItem("player", JSON.stringify(player));
    }
    console.log("player baru", player);
  }, [player]);

  return (
    <main className="font-mukta h-screen mx-auto bg-slate-800 text-center ">
      <h1 className="text-6xl uppercase py-4  text-white">truth or dare</h1>
      <div className="py-12">
        <h2 className="text-4xl capitalize text-white py-4 mb-6">Andre</h2>
        <button className="rounded-lg px-6 py-2 text-xl bg-teal-400 text-white outline-none hover:ring-teal-400 hover:ring-2 hover:bg-teal-600">
          Start
        </button>
      </div>
      <div className="bg-white max-w-xl mx-auto rounded-xl">
        <p className="p-12 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          facilis quia quibusdam doloremque odit! Quidem nesciunt consequatur,
          eum voluptas illo reprehenderit animi explicabo ipsa fugiat cumque rem
          quia odio doloribus!
        </p>
      </div>
      <div className="fixed top-0 left-0 bg-white py-4 px-6 w-[22%] text-left rounded-b-xl">
        <ol className="list-decimal text-md marker:text-xl capitalize px-1 ">
          {player.map((p, i) => {
            return (
              <li
                className="flex flex-row justify-between items-center "
                key={i}
              >
                {p}
                <span>
                  <BsFillTrashFill
                    className="cursor-pointer fill-rose-600"
                    onClick={() => removeUserHandler(p)}
                  />
                </span>
              </li>
            );
          })}
        </ol>
        <div className="pt-4 flex items-center">
          <input
            type="text"
            placeholder="Name..."
            ref={newPlayer}
            className="py-2 px-2 outline-none rounded-lg hover:ring-teal-400 ring-2 focus:ring-teal-400 mr-4 w-[80%]"
          />
          <button
            className="bg-teal-400 rounded-full p-2 text-white text-sm"
            onClick={() => addUserHandler()}
          >
            OK
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
