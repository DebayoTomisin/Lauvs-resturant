import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={[
        {
          backagoundColor: "#FFFFFF",
          image: <Image source={require("../assets/images/onboarding1.svg")} />,
          title: "Joyfulness",
          subtitle: "Enjoy Happy Moments with Family",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
