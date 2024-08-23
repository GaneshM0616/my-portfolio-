import { motion } from "framer-motion";

const AnimatedTextInHomePage = ({ text }) => {
  const words = text.split(" ");

  return (
    <div>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{
                delay: wordIndex + charIndex * 0.1,
                duration: 0.05,
              }}
              className="inline-block overflow-hidden"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </div>
  );
};
export default AnimatedTextInHomePage;
