import "./ClassSelector.css";

const ClassSelector = () => {
  return (
    <>
      <p className="title title--left">Class Name Selector</p>
      <div className="class1">1. We can modify elements using classname</div>
      <div className="class2">
        2. Multiple elements can share single classname
      </div>
      <div className="class1">3. Point 1 and 3 sharing same class</div>
    </>
  );
};

export default ClassSelector;
