import "./AttributeSelector.css";

const AttributeSelector = () => {
  return (
    <div>
      <>
        <p className="title title--left">Attribute Selector (simple)</p>
        <div className="about_css_con">
          We can target HTML elements using their attribute. We are targeting
          HTML elements which have attribute named as <strong>'title'</strong>
        </div>
        <button title="">This button have attribute named as 'title'</button>
        <button>This button Doesn't have attribute named as 'title'</button>
      </>
      {/* <br /> */}
      <>
        <p className="title title--left">Attribute Selector with Element</p>
        <div className="about_css_con">
          We can target HTML elements using their attribute with combination of
          element. We are targeting HTML elements which have attribute named as{" "}
          <strong>'title'</strong> and element <strong>"span"</strong>
        </div>
        <span title="">
          This span have attribute named as 'title' and specifc style only
          spplied for all span which have 'title' attribute.
        </span>
        <span>Span element without title attribute</span>
        <span title="">
          Simply reusing same style using 'title' attribute on this span too.
        </span>
      </>
      <>
        <p className="title title--left">Attribute Selector with Class</p>
        <div className="about_css_con">
          We can target HTML elements using their attribute with combination of
          class name. We are targeting HTML elements which have attribute named
          as <strong>'attribute-with-class'</strong> and class name{" "}
          <strong>"attributeSelectorClass"</strong>
        </div>
        <div
          attribute-with-class="att_class"
          className="attributeSelectorClass"
        >
          This is styled using class name 'attributeSelectorClass' and the
          attribute named 'attribute-with-class'
        </div>
      </>
      <>
        <p className="title title--left">
          Attribute Selector with exact attribute value
        </p>
        <div className="about_css_con">
          We can target HTML elements using their attribute and exact attribute
          value. We are targeting HTML elements which have attribute{" "}
          <strong>'data-attr'</strong> and attribute value{" "}
          <strong>"true"</strong>
        </div>
        <p data-attr={true}>
          This paragraph have exact value 'true' for attribute 'data-attr'.
        </p>
        <p data-attr={false}>
          This paragraph have value 'false' for attribute 'data-attr'.
        </p>
      </>
    </div>
  );
};

export default AttributeSelector;
