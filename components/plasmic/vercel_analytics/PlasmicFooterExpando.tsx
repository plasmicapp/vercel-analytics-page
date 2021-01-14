// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tHfoxu6XFvmk837xn6JEtW
// Component: vcKKQo6nI4
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_vercel_analytics.module.css"; // plasmic-import: tHfoxu6XFvmk837xn6JEtW/projectcss
import sty from "./PlasmicFooterExpando.module.css"; // plasmic-import: vcKKQo6nI4/css

export type PlasmicFooterExpando__VariantMembers = {};
export type PlasmicFooterExpando__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterExpando__VariantsArgs;
export const PlasmicFooterExpando__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterExpando__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicFooterExpando__ArgsType;
export const PlasmicFooterExpando__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicFooterExpando__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultFooterExpandoProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicFooterExpando__RenderFunc(props: {
  variants: PlasmicFooterExpando__VariantsArgs;
  args: PlasmicFooterExpando__ArgsType;
  overrides: PlasmicFooterExpando__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicSlot
        defaultContents={"Frameworks"}
        value={args.children}
        className={classNames(sty.slotChildren)}
      />

      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, defaultcss.__wab_text, sty.box)}
      >
        {"+"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterExpando__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterExpando__VariantsArgs;
    args?: PlasmicFooterExpando__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterExpando__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooterExpando__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooterExpando__ArgProps,
      internalVariantPropNames: PlasmicFooterExpando__VariantProps
    });

    return PlasmicFooterExpando__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterExpando";
  } else {
    func.displayName = `PlasmicFooterExpando.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterExpando = Object.assign(
  // Top-level PlasmicFooterExpando renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicFooterExpando
    internalVariantProps: PlasmicFooterExpando__VariantProps,
    internalArgProps: PlasmicFooterExpando__ArgProps
  }
);

export default PlasmicFooterExpando;
/* prettier-ignore-end */
