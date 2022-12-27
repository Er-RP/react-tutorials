import { useState } from "react";
import Rotate from "../components/transforms/rotate";
import Scale from "../components/transforms/scale";
import "./Transform.css";

const SELECTOR_ARRAY = ["Rotate", "Scale"];
const RENDER_ITEM = {
  Rotate: <Rotate />,
  Scale: <Scale />,
  Rotate: <Rotate />,
};

const Transforms = () => {
  const [demo, setDemo] = useState("Rotate");

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

export default Transforms;
