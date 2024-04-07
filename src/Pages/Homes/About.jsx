import React from "react";
import about from "../../assets/about.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 container mx-auto px-8">
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <div className=" w-full  lg:w-1/2">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl"
          >
            About Us
          </motion.h2>

          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-neutral-400"
          >
            At XYZ Motors, we’ve been serving our community with pride for 10
            remarkable years. Our passion for automobiles runs deep, and our
            commitment to quality is unwavering. When you step onto our lot,
            you’re not just buying a car; you’re investing in a piece of
            automotive excellence.
          </motion.p>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full  lg:w-1/2"
        >
          <img src={about} alt="" className=" lg:pt-16 lg:mt-6" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
