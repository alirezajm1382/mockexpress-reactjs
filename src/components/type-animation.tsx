import { FC } from "react";
import { motion } from "framer-motion";
const TypeAnimation: FC<{ text: string }> = ({ text }) => {
  return text.split("").map((el, i) => (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.15,
        delay: i / 20,
      }}
      key={i}
    >
      {el}
    </motion.span>
  ));
};

export default TypeAnimation;
