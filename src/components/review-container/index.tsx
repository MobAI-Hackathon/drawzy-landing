import Image from "next/image";
import Star from "../../../public/images/components/star.svg";
import Verify from "../../../public/images/components/verify.png";
import QuoteIcon from "../../../public/images/components/container_style.png";

interface ReviewProps {
  userImage: string;
  userName: string;
  userRole: string;
  reviewText: string;
}

const ReviewContainer: React.FC<ReviewProps> = ({ userImage, userName, userRole, reviewText }) => {
  return (
    <div className="relative bg-gradient-to-br  from-[#3D0E60] to-[#1C0533] text-white rounded-2xl p-8 w-[600px] shadow-xl border border-white/20">
      {/* Quote Icon at Top-Right */}
      <Image
        src={QuoteIcon}
        alt="Quote Icon"
        width={60}
        height={60}
        className="absolute top-[-1rem] right-4"
      />

      {/* Star Ratings */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Image key={index} src={Star} alt="A star" width={20} height={20} />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-200 text-sm leading-relaxed font-lato">{reviewText}</p>

      <hr className="w-full border-white/20 my-4" />

      {/* User Profile Section */}
      <div className="flex items-center gap-4">
        {/* User Image */}
        <Image
          src={userImage}
          alt={`${userName} profile`}
          width={75}
          height={75}
          className="rounded-full border-2 border-white/30"
        />
        
        <div className="flex flex-col">
          <span className="text-base font-semibold">{userName}</span>
          <p className="text-gray-400 text-sm">{userRole}</p>

          {/* Verification Badge */}
          <div className="flex items-center gap-2 mt-1">
            <Image src={Verify} alt="Verified badge" width={30} height={30} />
            <p className="text-sm font-semibold bg-gradient-to-r from-[#FF00FF] to-[#FF7FFF] text-transparent bg-clip-text">
              Verified
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;

