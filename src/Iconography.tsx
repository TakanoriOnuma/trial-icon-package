import { IconGallery, IconItem } from "@storybook/blocks";
import { FC } from "react";

import * as icons from "./components/index";

export const Iconography: FC = () => {
  return (
    <IconGallery>
      {Object.entries(icons).map(([iconName, Icon]) => {
        const name = iconName.replace(/Icon$/, "");
        return (
          <IconItem key={name} name={name}>
            <Icon />
          </IconItem>
        );
      })}
    </IconGallery>
  );
};
