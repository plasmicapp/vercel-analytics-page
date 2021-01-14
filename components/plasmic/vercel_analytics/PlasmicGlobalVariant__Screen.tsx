// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
export type ScreenValue = "tablet" | "desktop";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

const screenVariants: ScreenValue[] = ["tablet", "desktop"];
const screenQueries = ["(min-width:768px)", "(min-width:900px)"];

function matchScreenVariants() {
  const matching: ScreenValue[] = [];
  if (!globalThis.matchMedia) {
    return matching;
  }
  for (let i = 0; i < screenQueries.length; i++) {
    if (globalThis.matchMedia(screenQueries[i]).matches) {
      matching.push(screenVariants[i]);
    }
  }
  return matching;
}

export function ScreenVariantProvider(props: { children?: React.ReactNode }) {
  const [value, setValue] = React.useState<ScreenValue[]>([]);
  React.useEffect(() => {
    const handler = () => {
      const newValues = matchScreenVariants();
      if (
        newValues.length !== value.length ||
        newValues.some((v) => !value.includes(v))
      ) {
        setValue(newValues);
      }
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [value]);
  return (
    <ScreenContext.Provider value={value}>
      {props.children}
    </ScreenContext.Provider>
  );
}

export default ScreenContext;
/* prettier-ignore-end */
