import { promises as fsPromises } from "fs";

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

/**
 * アイコンコンポーネントのソースコードを生成する
 * @param fileName - SVGファイル名
 */
const generateIconComponentText = (fileName: string) => {
  const [baseName, _ext] = fileName.split(".");
  const iconName = toPascalCase(baseName ?? "");
  const svgName = iconName + "Svg";
  const componentName = iconName + "Icon";
  return `
import { SvgIcon } from "@mui/material";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import type { FC } from "react";

import ${svgName} from "../icons/${fileName}?react";

export const ${componentName}: FC<
  Omit<SvgIconProps, "component" | "inheritViewBox">
> = (props) => {
  return (
    <SvgIcon
      component={${svgName}}
      inheritViewBox
      data-testid="${componentName}"
      {...props}
    />
  );
};
`.trim();
};

const dir = "./src/components";
fsPromises.readdir("./src/icons").then(async (files) => {
  await Promise.all(
    files.map(async (fileName) => {
      const [basename, _ext] = fileName.split(".");
      const iconName = toPascalCase(basename ?? "");
      const componentName = iconName + "Icon";
      await fsPromises.writeFile(
        `${dir}/${componentName}.tsx`,
        generateIconComponentText(fileName),
        "utf-8",
      );
    }),
  );
  await fsPromises.writeFile(
    `${dir}/index.ts`,
    files
      .map((fileName) => {
        const [basename, _ext] = fileName.split(".");
        const iconName = toPascalCase(basename ?? "");
        const componentName = iconName + "Icon";
        return `export * from "./${componentName}";`;
      })
      .join("\n"),
    "utf-8",
  );
});
