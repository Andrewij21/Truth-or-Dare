import { useEffect, useRef, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { truth, dare } from "../data.json";

function App() {
  const [player, setPlayer] = useState([]);
  const [chosen, setChosen] = useState("");
  const [selectedTruth, setSelectedTruth] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(["truth"]);

  const newPlayer = useRef(null);

  const addUserHandler = (e) => {
    e.preventDefault();
    const data = newPlayer.current.value;
    setPlayer((prev) => [...prev, data]);
    newPlayer.current.value = "";
  };

  const removeUserHandler = (name) => {
    const updatedPlayer = player.filter((user) => user !== name);
    setPlayer(updatedPlayer);
    localStorage.setItem("player", JSON.stringify(updatedPlayer));
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      if (selectedCategories.length !== 1)
        setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  function pickRandom() {
    let i = 0;
    let r = 0;
    setIsLoading(true);
    const randomName = Math.floor(Math.random() * player.length);
    const randomTruth = Math.floor(Math.random() * truth.length);
    const randomDare = Math.floor(Math.random() * dare.length);
    const randomTruuthOrDare = Math.floor(
      Math.random() * (dare.length + truth.length)
    );
    let t = setInterval(() => {
      i++;
      if (i === player.length) {
        i = 0;
        r++;
      }
      setChosen(player[i]);
      if (r == 2) {
        setChosen(player[randomName]);
        if (selectedCategories.includes("truth")) {
          if (selectedCategories.includes("dare")) {
            setSelectedTruth([...truth, ...dare][randomTruuthOrDare]);
          }
          setSelectedTruth(truth[randomTruth]);
        }
        if (selectedCategories.includes("dare")) {
          if (selectedCategories.includes("truth")) {
            setSelectedTruth([...truth, ...dare][randomTruuthOrDare]);
          }
          setSelectedTruth(dare[randomDare]);
        }
        setIsLoading(false);
        clearInterval(t);
      }
    }, 200);
  }
  useEffect(() => {
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
    <main className="font-mukta h-screen mx-auto bg-slate-800 text-center ">
      <h1 className="text-6xl uppercase py-4  text-white">truth or dare</h1>
      <div className="py-12">
        <h2 className="text-4xl capitalize text-white py-4 mb-6 h-24">
          {chosen}
        </h2>
        <button
          className="rounded-lg px-6 py-2 text-xl bg-teal-400 text-white outline-none hover:ring-teal-400 hover:ring-2 hover:bg-teal-600"
          disabled={isLoading || player.length === 0 ? true : false}
          onClick={() => pickRandom()}
        >
          Start
        </button>
        <div className="flex justify-evenly mt-6 w-1/2 mx-auto text-white">
          <div className="flex items-center outline-none">
            <input
              id="truth"
              type="checkbox"
              value="truth"
              name="category"
              className="w-4 h-4 focus:text-blue-600 bg-gray-100"
              onChange={() => toggleCategory("truth")}
              checked={selectedCategories.includes("truth")}
            />
            <label htmlFor="truth" className="ml-2 font-medium">
              Truth
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="dare"
              type="checkbox"
              value="dare"
              name="category"
              className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500"
              onChange={() => toggleCategory("dare")}
              checked={selectedCategories.includes("dare")}
            />
            <label htmlFor="dare" className="ml-2 font-medium">
              Dare
            </label>
          </div>
        </div>
      </div>
      <div className="bg-white max-w-xl mx-auto rounded-xl h-44 grid place-items-center">
        <p className="p-12 text-xl">{selectedTruth}</p>
      </div>
      <div className="md:fixed md:top-0 md:left-0 bg-white py-4 px-6 w-full mt-4 md:mt-0 md:w-[22%] text-left rounded-b-xl">
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
        <div>
          <form
            onSubmit={(e) => addUserHandler(e)}
            className="pt-4 flex items-center"
          >
            <input
              type="text"
              placeholder="Name..."
              ref={newPlayer}
              className="py-2 px-2 outline-none rounded-lg hover:ring-teal-400 ring-2 focus:ring-teal-400 mr-4 w-[80%]"
            />
            <button
              className="bg-teal-400 rounded-full p-2 text-white text-sm"
              // onClick={() => addUserHandler()}
            >
              OK
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
