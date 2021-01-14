// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LargeScoreIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LargeScoreIcon(props: LargeScoreIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 128 128"}
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
        <circle cx={"64"} cy={"64"} r={"64"} fill={"#0CCE6B"}></circle>

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
          stroke={"#fff"}
          strokeDasharray={"301.59289474462014,301.59289474462014"}
          strokeDashoffset={"6.032"}
          strokeLinecap={"round"}
          className={"score_progress__fzOn5"}
        ></circle>

        <text
          x={"64"}
          y={"75"}
          fill={"#fff"}
          fontWeight={"800"}
          fontSize={"32"}
          textAnchor={"middle"}
        >
          98
        </text>
      </g>
    </svg>
  );
}

export default LargeScoreIcon;
/* prettier-ignore-end */
