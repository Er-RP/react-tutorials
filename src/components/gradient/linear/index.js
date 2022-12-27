import "./Linear.css";

const Linear = () => {
  return (
    <div>
      <p className="title title--left"> Top to Bottom Linear Gradient</p>
      <div id="linear_top_to_bottom" className="linear">
        Top to Bottom
      </div>
      <p className="title title--left"> Right to LeftLinear Gradient</p>

      <div id="linear_rtl" className="linear">
        Right to Left
      </div>
      <p className="title title--left"> Diagonal Linear Gradient</p>
      <div id="linear_diagonal" className="linear">
        Diagonal
      </div>
      <p className="title title--left"> Angle Linear Gradient</p>
      <div id="linear_angle" className="linear">
        Angle (55deg)
      </div>
      <p className="title title--left"> Multiple Color Linear Gradient</p>
      <div id="linear_multiple" className="linear">
        Multiple color
      </div>
    </div>
  );
};

export default Linear;
