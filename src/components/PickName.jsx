import { motion } from "framer-motion";
export default function PickName() {
  return (
    <motion.div className="rounded-lg py-4 px-2 sm:px-6 bg-slate-200 text-left flex justify-between">
      <div className="outline-none rounded-lg mr-2 text-xs sm:text-sm bg-white p-4 basis-5/6 max-h-[4rem] scrollbar overflow-y-auto">
        andre
      </div>
      <motion.button className="text-xs sm:text-sm bg-teal-400 text-white rounded-lg px-2 basis-2/6">
        Pick name
      </motion.button>
    </motion.div>
  );
}
