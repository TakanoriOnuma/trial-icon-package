import { IconGallery, IconItem } from "@storybook/blocks";
import { FC } from "react";

import { HomeIcon } from "./HomeIcon";

export const Iconography: FC = () => {
  return (
    <IconGallery>
      <IconItem name="Home">
        <HomeIcon />
      </IconItem>
    </IconGallery>
  );
};
