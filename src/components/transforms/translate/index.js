import "./Translate.css";

const Translate = () => {
  return (
    <div>
      <p className="title title--left">Translate</p>
      <p>Scale changes the size of the element</p>
      <p>scale(1.25)</p>
      <div id="scale2d1" className="basediv">
        Scale
      </div>
      <p>scale(2.0.75)</p>
      <div id="scale2d2" className="basediv">
        Scale
      </div>
    </div>
  );
};

export default Translate;
