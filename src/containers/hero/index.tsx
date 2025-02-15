import PhoneMockup from "../../../public/images/components/PhoneMockup.svg";
import AppStoreBadge from "../../../public/images/components/download-with-app.png";
import GooglePlayBadge from "../../../public/images/components/download-with-google.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#1B1A1F] text-white min-h-screen w-full flex flex-col p-10">

      {/* Hero Content */}
      <div className="flex md:flex-row items-center justify-between px-6 md:px-12 py-8 md:py-16">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col gap-10 items-start space-y-4">
          <h1 className="text-3xl font-bold leading-tight">
            UNLEASH YOUR{" "}
            <span className="text-[#FF3EB3] text-3xl">CREATIVITY.</span> <br />
            CHALLENGE THE AI.
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-md container mx-auto">
            Can AI guess what you draw? Put your skills to the test in this
            exciting, fast-paced game where you sketch, and AI plays detective!
            Join the fun! Download now &amp; start drawing!
          </p>
          {/* Download Badges */}
          <div className="flex gap-6 space-x-4 pt-4">
            <Image
              src={AppStoreBadge}
              alt="Download on the App Store"
              className="w-36 h-auto"
            />
            <Image
              src={GooglePlayBadge}
              alt="Get it on Google Play"
              className="w-36 h-auto"
            />
          </div>
        </div>

        {/* Mockup Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src={PhoneMockup}
            alt="Drawzy App Mockup"
            className="w-64 md:w-80 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
