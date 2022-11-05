import { useState } from "react";
import AttributeSelector from "../components/AttributeSelector";
import ClassSelector from "../components/ClassSelector";
import ElementSelector from "../components/ElementSelector";
import IdSelector from "../components/IdSelector";

const SELECTOR_ARRAY = ["Class", "Elemet", "Id", "Attribute"];

const RENDER_ITEM = {
  Class: <ClassSelector />,
  Elemet: <ElementSelector />,
  Id: <IdSelector />,
  Attribute: <AttributeSelector />,
  Default: <ClassSelector />,
};
const CssSelectors = () => {
  const [demo, setDemo] = useState("Class");
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

export default CssSelectors;
