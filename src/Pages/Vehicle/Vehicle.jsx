import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const Vehicle = () => {
  return (
    <div className="mt-[100px] md:px-[50px] px-[25px]">
      <motion.div
        initial={{ opacity: 1, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-[100px] "
      ></motion.div>

      {/* products */}
      <div className="flex flex-col justify-center mb-[100px]">
        <div className="flex flex-wrap gap-[25px] gap-y-[50px] justify-center ">
          {/* <ProductCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
