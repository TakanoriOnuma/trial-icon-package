import HomeSvg from "../../src/icons/Home.svg?react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

console.log("HomeSvg", HomeSvg, HomeSvg.displayName);

export const HomeIcon: FC<
  Omit<SvgIconProps, "component" | "inheritViewBox">
> = (props) => {
  return (
    <SvgIcon
      component={HomeSvg}
      inheritViewBox
      data-testid="HomeIcon"
      {...props}
    />
  );

  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>home</title>
        <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
      </svg>
    </SvgIcon>
  );
};

console.log("HomeIcon", HomeIcon, HomeIcon.displayName);
