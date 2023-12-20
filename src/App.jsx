// import { useEffect, useRef, useState } from "react";
// import { truth, dare } from "../data.json";

import { useEffect, useState } from "react";
import AddPlayer from "./components/AddPlayer";
import PickMessage from "./components/PickMessage";
import PickName from "./components/PickName";

function App() {
  const [player, setPlayer] = useState([]);

  const addUserHandler = (e, newPlayer) => {
    e.preventDefault();
    const data = newPlayer.current.value;
    setPlayer((prev) => [...prev, data]);
    newPlayer.current.value = "";
  };

  const deleteUserHandler = (name) => {
    const updatedPlayer = player.filter((user) => user !== name);
    setPlayer(updatedPlayer);
    localStorage.setItem("player", JSON.stringify(updatedPlayer));
  };

  useEffect(() => {
    // Check if player exist
    const getPlayer = JSON.parse(localStorage.getItem("player")) || [];
    setPlayer(getPlayer);
  }, []);
  useEffect(() => {
    // Save player state to localStorage whenever it changes
    if (player.length !== 0) {
      localStorage.setItem("player", JSON.stringify(player));
    }
  }, [player]);

  return (
    <main className="font-mukta min-h-screen mx-auto bg-slate-800 text-center relative">
      <h1 className="text-4xl sm:text-5xl py-12 uppercase text-white">
        truth or dare
      </h1>
      <AddPlayer
        player={player}
        addUserHandler={addUserHandler}
        deleteUserHandler={deleteUserHandler}
      />
      <div className="bg-slate-400 mx-auto max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] min-h-[20rem] rounded-lg py-8 px-4">
        <PickName player={player} />
        <PickMessage />
      </div>
    </main>
  );
}

export default App;
