import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

PickName.propTypes = {
  player: PropTypes.array,
};

export default function PickName({ player }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);

  function pickRandomName() {
    setLoading(true);
    let i = 0;
    const randomName = Math.floor(Math.random() * player.length);

    //Re run if same name get picked twice
    if (player[randomName] == name) {
      return pickRandomName();
    }
    let t = setInterval(() => {
      i++;
      setName(player[i]);
      if (i == player.length) i = 0;
    }, 200);
    setTimeout(() => {
      setLoading(false);
      clearInterval(t);
      setName(player[randomName]);
    }, 3000);
  }

  return (
    <motion.div className="rounded-lg py-4 px-2 sm:px-6 bg-slate-200 text-left flex justify-between">
      <div className="outline-none rounded-lg mr-2 text-xs sm:text-sm bg-white p-2 min-h-[38px] basis-5/6 scrollbar overflow-y-auto">
        {name}
      </div>
      <motion.button
        onClick={pickRandomName}
        disabled={loading ? true : false}
        className="disabled:cursor-wait text-xs sm:text-sm bg-teal-400 text-white rounded-lg px-2 basis-2/6"
      >
        Pick name
      </motion.button>
    </motion.div>
  );
}
