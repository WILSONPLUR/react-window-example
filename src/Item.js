import React from "react";

export default function Item({ index, style, isScrolling }) {
  return <div style={style}>{isScrolling ? "Wait..." : `Item: ${index}`}</div>;
}
