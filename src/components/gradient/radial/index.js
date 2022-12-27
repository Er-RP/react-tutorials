import "./Radial.css";

const Radial = () => {
  return (
    <div>
      <p className="title title--left"> Default radial gradient</p>
      <div id="default" className="radial"></div>
      <p className="title title--left"> Differently Spaced Color Stops</p>
      <div id="color_stops" className="radial"></div>
      <p className="title title--left"> shape - circle</p>
      <div id="circle" className="radial"></div>
    </div>
  );
};

export default Radial;
