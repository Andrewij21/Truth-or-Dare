import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

PickMessage.propTypes = {
  truthOrDare: PropTypes.array,
};

export default function PickMessage({ truthOrDare }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [category, setCategory] = useState("truth");

  // Pick ether truth or dare
  const toggleCategory = (e) => {
    setCategory(e.target.value);
  };

  function pickRandomMessage() {
    const chosenCategory = truthOrDare[category];
    setLoading(true);
    let i = 0;
    const randomMessage = Math.floor(Math.random() * chosenCategory.length);

    //Re run if same message get picked twice
    if (chosenCategory[randomMessage] == message) {
      return pickRandomMessage();
    }

    //Give random animation effect
    let t = setInterval(() => {
      i++;
      setMessage(chosenCategory[i]);
      if (i == chosenCategory.length) i = 0;
    }, 200);

    // Animation duration
    setTimeout(() => {
      setLoading(false);
      clearInterval(t);
      setMessage(chosenCategory[randomMessage]);
    }, 3000);
  }
  return (
    <div className="flex min-h-[15rem] mt-4 justify-between gap-2 flex-col sm:flex-row ">
      <div className="flex-1 bg-white rounded-lg grid place-content-center p-4 scrollbar overflow-y-auto text-xs sm:text-sm">
        {message}
      </div>
      <div className="basis-1/3 bg-white rounded-lg p-4 order-first sm:order-last">
        <motion.button
          onClick={pickRandomMessage}
          disabled={loading ? true : false}
          className="text-xs sm:text-sm disabled:cursor-wait bg-teal-400 text-white rounded-lg py-4 w-full"
        >
          Pick message
        </motion.button>
        <div className="mt-4 text-xs ms:text-sm">
          <div className="flex gap-x-1">
            <input
              type="radio"
              name="category"
              value="truth"
              id="truth"
              onChange={toggleCategory}
              defaultChecked
            />
            <label htmlFor="truth">Truth</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="radio"
              name="category"
              value="dare"
              id="dare"
              onChange={toggleCategory}
            />
            <label htmlFor="dare">Dare</label>
          </div>
        </div>
      </div>
    </div>
  );
}
