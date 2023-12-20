// import { useEffect, useRef, useState } from "react";
// import { truth, dare } from "../data.json";

import AddPlayer from "./components/AddPlayer";
import PickMessage from "./components/PickMessage";
import PickName from "./components/PickName";

function App() {
  return (
    <main className="font-mukta min-h-screen mx-auto bg-slate-800 text-center relative">
      <h1 className="text-4xl sm:text-5xl py-12 uppercase text-white">
        truth or dare
      </h1>
      <AddPlayer />
      <div className="bg-slate-400 mx-auto max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] min-h-[20rem] rounded-lg py-8 px-4">
        <PickName />
        <PickMessage />
      </div>
    </main>
  );
}

export default App;
