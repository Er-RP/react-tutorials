import "./AttributeSelector.css";

const AttributeSelector = () => {
  return (
    <div>
      <p className="title">Attribute Selector (simple)</p>
      <button title="">This button have attribute named as 'title'</button>
      <button>This button Doesn't have attribute named as 'title'</button>
      <br />
      <p className="title">Attribute Selector with Element</p>
      <span title="">
        This span have attribute named as 'title' and specifc style only spplied
        for all span which have 'title' attribute.
      </span>
      <span>Span element without title attribute</span>
      <span title="">
        Simply reusing same style using 'title' attribute on this span too.
      </span>
      <br />
      <p className="title">Attribute Selector with Class</p>
      <div attribute-with-class="att_class" className="attributeSelectorClass">
        This is styled using class name 'attributeSelectorClass' and the
        attribute named 'attribute-with-class'
      </div>
    </div>
  );
};

export default AttributeSelector;
