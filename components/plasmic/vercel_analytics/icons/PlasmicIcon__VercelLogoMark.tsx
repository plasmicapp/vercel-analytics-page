// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VercelLogoMarkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VercelLogoMarkIcon(props: VercelLogoMarkIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 20"}
      fill={"none"}
      style={{
        marginRight: "10px",
        fill: "currentcolor",

        ...(style || {}),
      }}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M12 0l11.547 20H.453L12 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VercelLogoMarkIcon;
/* prettier-ignore-end */
