import { useState } from "react";
import { FadeLoader } from "react-spinners";
import ClipLoader from "react-spinners/PropagateLoader";

export function PropagateLoaderSpinner() {
  let [color, setColor] = useState("#00bbf0");

  return (
    <div className="sweet-loading ">
      <ClipLoader
        color={color}
        loading="true"
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export function FadeLoaderSpinner() {
  let [color, setColor] = useState("#00bbf0");

  return (
    <div className="sweet-loading ">
      <FadeLoader color={color} />
    </div>
  );
}

export function ScaleLoader() {
  <div className="sweet-loading ">
    <ScaleLoader color="#36d7b7" size={10} />
  </div>;
}
