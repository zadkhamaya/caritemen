import React from "react";

export default function Page({ params }) {
  const { username, productSlug } = params;
  return <div>{productSlug}</div>;
}
