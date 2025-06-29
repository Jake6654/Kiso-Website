import { motion } from "framer-motion";

type BannerProps = {
  newsArray: string[];
};

export default function Banner({ newsArray }: BannerProps) {
  return (
    <div className="bg-white text text-black py-2 px-4 flex items-center overflow-hidden">
      <motion.div
        className="inline-block whitespace-nowrap"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      >
        {[...newsArray].reverse().map((news, i) => (
          <span key={i} className="mr-12 inline-block font-medium">
            {news}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
