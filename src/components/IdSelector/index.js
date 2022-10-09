import "./IdSelector.css";

const IdSelector = () => {
  return (
    <>
      <p className="title">Id Selector</p>
      <div id="idselector">
        Id should be unique. By using this id we can modify style of element
      </div>
      <div id="idselector2">
        Don't use same id on multiple elements/fragements.
      </div>
    </>
  );
};

export default IdSelector;
