import { useState } from "react";
import Conic from "../components/gradient/conic/Index";
import Linear from "../components/gradient/linear";
import Radial from "../components/gradient/radial";
const SELECTOR_ARRAY = ["Linear", "Radial", "Conic"];
const RENDER_ITEM = {
  Linear: <Linear />,
  Radial: <Radial />,
  Conic: <Conic />,
  Default: <Linear />,
};
const Gradient = () => {
  const [demo, setDemo] = useState("Linear");

  return (
    <div className="app_wrapper">
      <div className="wrapper_top">
        <p className="title">Css Selectors</p>
        <div className="selector_wrapper">
          {SELECTOR_ARRAY.map((sel, i) => (
            <div
              className={`selector--item ${
                demo === sel && "selector--item__active"
              }`}
              key={i}
              onClick={() => setDemo(sel)}
            >
              {sel}
            </div>
          ))}
        </div>
      </div>
      {/* <br /> */}
      <div className="wrapper_bottom">
        {RENDER_ITEM[demo] || RENDER_ITEM["Default"]}
      </div>
    </div>
  );
};

export default Gradient;
