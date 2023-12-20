import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BsArrowDown, BsFillTrashFill } from "react-icons/bs";

const dropIn = {
  visible: {
    y: "-50vh",
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      damping: 100,
      stiffness: 600,
    },
  },
  exit: {
    y: "-50vh",
    // opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const arrow = {
  open: {
    rotate: 180,
  },
  close: {
    rotate: 360,
  },
  initial: {
    rotate: 0,
  },
};

function AddPlayer() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };
  return (
    <motion.div className="absolute top-0 left-0 min-w-[16rem]">
      <AnimatePresence mode="popLayout">
        {visible && (
          <motion.div
            variants={dropIn}
            initial="visible"
            animate="animate"
            exit="exit"
            className=" rounded-b-xl bg-white py-4 text-left"
          >
            <div className="px-6 h-[122px] scrollbar overflow-y-scroll">
              <ol className="list-decimal">
                {[1, 2, 3, 4, 5, 1, 1].map((user, i) => {
                  return (
                    <li key={i}>
                      <div className="flex justify-between items-center">
                        <span>user</span>
                        <BsFillTrashFill className="text-rose-600" />
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="mt-4 px-3">
              <input
                type="text"
                className="outline-none border border-teal-400 rounded-lg mr-2 px-2 py-1 text-sm"
              />
              <motion.button className="text-xs bg-teal-400 text-white rounded-full p-2">
                Add
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        layout
        className="flex items-center sm:justify-center gap-x-2 px-2"
      >
        <p className="hidden sm:block text-lg text-white mt-2">Add player</p>
        <motion.button
          variants={arrow}
          initial="open"
          animate={visible ? "open" : "close"}
          onClick={toggleMenu}
          className="bg-teal-400 rounded-full h-8 w-8 px-1.5 mt-2"
        >
          <BsArrowDown className="text-xl font-extrabold text-white" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default AddPlayer;
