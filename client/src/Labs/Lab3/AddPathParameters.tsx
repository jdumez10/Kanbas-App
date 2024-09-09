import React from "react";
import { useParams } from "react-router-dom";

export default function AddPathParameters() {
  const { a = "3", b = "4" } = useParams<{ a: string, b: string }>();
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);

  // Validate that numA and numB are indeed numbers
  if (isNaN(numA) || isNaN(numB)) {
    return <div id="wd-add"><h4>Add Path Parameters</h4>Invalid parameters</div>;
  }

  return (
    <div id="wd-add">
      <h4>Add Path Parameters</h4>
      {a} + {b} = {numA + numB}
    </div>
  );
}