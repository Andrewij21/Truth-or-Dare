import { motion } from "framer-motion";
export default function PickMessage() {
  return (
    <div className="flex min-h-[15rem] mt-4 justify-between gap-2 flex-col sm:flex-row ">
      <div className="flex-1 bg-white rounded-lg grid place-content-center p-4 scrollbar overflow-y-auto text-xs sm:text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nam
        aspernatur voluptatum corporis blanditiis nesciunt ratione numquam,
        provident similique deserunt perferendis, fugit assumenda ea beatae odio
        nobis culpa quibusdam consectetur suscipit id consequatur modi voluptate
      </div>
      <div className="basis-1/3 bg-white rounded-lg p-4 order-first sm:order-last">
        <motion.button className="text-xs sm:text-sm bg-teal-400 text-white rounded-lg py-4 w-full">
          Pick message
        </motion.button>
        <div className="mt-4 text-xs ms:text-sm">
          <div className="flex gap-x-1">
            <input type="radio" name="category" value="truth" id="truth" />
            <label htmlFor="truth">Truth</label>
          </div>
          <div className="flex gap-x-1">
            <input type="radio" name="category" value="dare" id="dare" />
            <label htmlFor="dare">Dare</label>
          </div>
        </div>
      </div>
    </div>
  );
}
