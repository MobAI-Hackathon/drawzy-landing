import InfiniteSlider from "@/components/slider";
import HeroSection from "@/containers/hero";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <InfiniteSlider />
    </Fragment>
  );
}