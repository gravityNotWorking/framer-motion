import React from "react";
import { motion } from "framer-motion";
export default function Box1() {
  return (
    <div className="box-container">
      <motion.div
        initial={{ x: 0, opacity: 0.5 }}
        whileTap={{ x: 1400, opacity: 1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 30 }}
        whileHover={{ borderRadius: "100%", rotate: 90, scale: 0.5 }}
        className="box"
      ></motion.div>
    </div>
  );
}
