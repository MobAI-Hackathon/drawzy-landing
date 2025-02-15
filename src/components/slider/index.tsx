import Image from "next/image";
import SparkleIcon from "../../../public/images/components/sparkle.svg";

const InfiniteSlider = ({ background = false }) => {
  return (
    <div
      className={`relative w-full overflow-hidden py-3 ${
        background ? "bg-gradient-to-r from-[#6500B0] to-[#20005A]" : ""
      }`}
    >
      <div className="flex w-max animate-marquee space-x-8">
        {Array(10) // Repeat items for seamless scrolling
          .fill([
            "START DRAWING!",
            "THE FASTER AI GUESSES",
            "THE HIGHER YOUR SCORE!",
          ])
          .flat()
          .map((text, index) => (
            <div key={index} className="flex items-center space-x-6">
              <Image src={SparkleIcon} alt="Sparkle" width={20} height={20} />
              <span className="text-white font-bold text-base">{text}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
