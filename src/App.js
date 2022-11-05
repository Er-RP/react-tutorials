import { useState } from "react";
import "./App.css";
import CssSelectors from "./Pages/CSS_Selectors";

const SELECTOR_ARRAY = ["Selector"];

const RENDER_PAGE = {
  Selector: <CssSelectors />,
  Default: <CssSelectors />,
};
const App = () => {
  const [page, setPage] = useState("Selector");
  return (
    <div class>
      <div className="wrapper_top">
        <p className="title title--left">CSS Pages</p>
        <div className="selector_wrapper">
          {SELECTOR_ARRAY.map((sel, i) => (
            <div
              className={`selector--item ${
                page === sel && "selector--item__active"
              }`}
              key={i}
              onClick={() => setPage(sel)}
            >
              {sel}
            </div>
          ))}
        </div>
      </div>
      {/* <br /> */}
      <div className="wrapper_bottom">
        {RENDER_PAGE[page] || RENDER_PAGE["Default"]}
      </div>
    </div>
  );
};

export default App;
