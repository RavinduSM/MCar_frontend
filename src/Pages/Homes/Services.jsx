import React from "react";
import services from "../../assets/services.png";
import { motion } from "framer-motion";

import { FaCar } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { ImKey2 } from "react-icons/im";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Services = () => {
  return (
    <div className="border-b  pb-24 container mx-auto px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Our Services
      </motion.h2>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <img src={services} alt="" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className=" w-full  lg:w-1/2"
        >
          <p className="text-neutral-400">
            At XYZ Motors, we’ve been serving our community with pride for 10
            remarkable years. Our passion for automobiles runs deep, and our
            commitment to quality is unwavering. When you step onto our lot,
            you’re not just buying a car; you’re investing in a piece of
            automotive excellence.
          </p>
        </motion.div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <FaCar className="text-8xl text-neutral-400" />
          <p className="text-center font-bold"> All Brands</p>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <RiCustomerService2Line className=" text-8xl text-neutral-400" />
          <p className="text-center font-bold"> Free Support</p>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <ImKey2 className="text-8xl text-neutral-400" />
          <p className="text-center  font-bold"> Dealership</p>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <LiaMoneyBillWaveSolid className="text-8xl text-neutral-400" />
          <p className="text-center font-bold"> Affordable</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
