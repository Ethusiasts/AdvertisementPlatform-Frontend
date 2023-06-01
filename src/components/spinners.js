import { useState } from "react";
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
