import "./Rotate.css";

const Rotate = () => {
  return (
    <div>
      <p className="title title--left">2D rotate</p>
      <p>
        By using rotate property, we can rotate elements in two dimenional.
        <br />
        Here we are rotating this element 90deg (Also we can use 0.25turn)
      </p>
      <div id="rotate2d" className="basediv">
        Rotate
      </div>
      <p className="title title--left">3D rotate</p>
      <p>
        By using rotate3d property, we can rotate elements in two dimenional.
        <br />
        The first point of the axis is the default transform-origin. We don't
        have to redefine it. The second point of the axis is defined by giving
        the 3 first values for rotate3d property : example rotate3d(1, -1, -1,
        40deg)
        <br />
        <a
          href="https://www.w3.org/Talks/2012/0416-CSS-WWW2012/Demos/transforms/demo-rotate3d.html"
          rel="noreferrer"
          target="_blank"
        >
          Know More
        </a>
      </p>
      <div id="rotate3d" className="basediv">
        Rotate
      </div>
    </div>
  );
};

export default Rotate;
