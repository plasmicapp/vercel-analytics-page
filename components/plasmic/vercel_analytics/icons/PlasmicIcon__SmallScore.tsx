// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SmallScoreIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SmallScoreIcon(props: SmallScoreIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"11 11 106 106"}
      fill={"none"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "score_score__3_512"
      )}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g shapeRendering={"geometricPrecision"}>
        <circle
          cx={"64"}
          cy={"64"}
          r={"48"}
          strokeWidth={"10"}
          stroke={"rgba(0,0,0,.1)"}
        ></circle>

        <circle
          cx={"64"}
          cy={"64"}
          r={"48"}
          strokeWidth={"10"}
          stroke={"#0CCE6B"}
          strokeDasharray={"301.59289474462014,301.59289474462014"}
          strokeDashoffset={"15.08"}
          strokeLinecap={"round"}
          className={"score_progress__fzOn5"}
        ></circle>

        <text
          x={"64"}
          y={"79"}
          fill={"#444"}
          fontWeight={"500"}
          fontSize={"42"}
          textAnchor={"middle"}
        >
          95
        </text>
      </g>
    </svg>
  );
}

export default SmallScoreIcon;
/* prettier-ignore-end */
