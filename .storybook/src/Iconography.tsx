import { IconGallery, IconItem } from "@storybook/blocks";
import { FC, SVGProps } from "react";

type SvgComponent = FC<SVGProps<SVGSVGElement>>;

const icons = import.meta.glob<{ default: SvgComponent }>("../../icons/*.svg", {
  eager: true,
  query: "react",
});

/**
 * パスカルケースに変換する
 * @param str - 文字列
 * @see https://stackoverflow.com/a/54651317
 */
const toPascalCase = (str: string) => {
  const clearAndUpper = (str: string) => {
    return str.replace(/-/, "").toUpperCase();
  };

  return str.replace(/(^\w|-\w)/g, clearAndUpper);
};

export const Iconography: FC = () => {
  return (
    <IconGallery>
      {Object.entries(icons).map(([path, { default: Icon }]) => {
        const fileName = path.split("/").pop();
        const [baseName, _ext] = fileName?.split(".") ?? [];
        const iconName = toPascalCase(baseName ?? "");
        return (
          <IconItem key={iconName} name={iconName}>
            <Icon />
          </IconItem>
        );
      })}
    </IconGallery>
  );
};
