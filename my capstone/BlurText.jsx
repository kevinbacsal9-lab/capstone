import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const BlurText = ({ text }) => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <p ref={ref}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: -20 }}
          animate={show ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
          transition={{ delay: i * 0.2 }}
          style={{ marginRight: "8px", display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;