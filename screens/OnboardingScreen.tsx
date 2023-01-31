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
        {
          backgroundColor: "#FFFFFF",
          image: <Image source={require("../assets/images/onboarding2.svg")} />,
          title: "Convenience",
          subtitle:
            "All your favorite foods in one place with online reservation feature",
        },
        {
          backgroundColor: "#FFFFFF",
          image: <Image source={require("../assets/images/onboarding3.svg")} />,
          title: "Enjoy & Reviews",
          subtitle:
            "Enjoy all your great food, review and share your experience",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
