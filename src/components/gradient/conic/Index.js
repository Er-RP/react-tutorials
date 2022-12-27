import "./Conic.css";

const Conic = () => {
  return (
    <div>
      <p className="title title--left"> Default Conic gradient</p>
      <div id="default" className="conic"></div>
      <p className="title title--left"> Degree Conic gradient</p>
      <div id="degree" className="conic"></div>
    </div>
  );
};

export default Conic;
