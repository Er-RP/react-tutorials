import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import StyledError from "./StyledError";
import "../YoutubeForm.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  socialLinks: {
    fb: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};
const onSubmit = (values) => {
  /* Real world App's API call takes place here */
  console.log("Form Data onSubmit : ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name Required Y"),
  email: Yup.string()
    .required("Email Required Y")
    .email("Invalid Email format Y"),
  channel: Yup.string().required("Channel Required Y"),
  address: Yup.string().required("Address Required Y"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Comments Required";
  }
  return error;
};

const NewYoutubeForm = () => {
  //   console.log("Visited Fields:", formik.touched);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      // validationSchema={validationSchema}
      // validateOnBlur={false}  //To avoid validation on any form field blur
      // validateOnChange={false} //To avoid validation onChange
    >
      <Form>
        {/* <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={StyledError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={StyledError} />
        </div> */}

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field
            as="textarea"
            id="comments"
            name="comments"
            validate={validateComments}
          />
          <ErrorMessage name="comments" component={StyledError} />
        </div>

        {/* <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              const { field, form, meta } = props;
              //   console.log("Field Props :",props)
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error && (
                    <div className="error">{meta.error}</div>
                  )}
                </div>
              );
            }}
          </Field>
        </div>
        <div className="form-control">
          <label htmlFor="fb">Facebook</label>
          <Field type="text" id="fb" name="socialLinks.fb" />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" id="twitter" name="socialLinks.twitter" />
        </div>
        <div className="form-control">
          <label htmlFor="primary-mobile">Primary Mobile</label>
          <Field type="text" id="primary-mobile" name="phoneNumbers[0]" />
        </div>
        <div className="form-control">
          <label htmlFor="secondary-mobile">Secondary Mobile</label>
          <Field type="text" id="secondary-mobile" name="phoneNumbers[1]" />
        </div> */}
        {/* <div className="form-control">
          <label htmlFor="phNumbers">Phone Numbers</label>
          <FieldArray id="phNumbers" name="phNumbers">
            {(fieldArrayProps) => {
              // console.log("Field Array Props :", fieldArrayProps);
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              return (
                <>
                  {phNumbers.map((phNumber, i) => (
                    <div key={i}>
                      <Field name={`phNumbers[${i}]`} />
                      {i > 0 && (
                        <button type="button" onClick={() => remove(i)}>
                          -
                        </button>
                      )}
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  ))}
                </>
              );
            }}
          </FieldArray>
        </div> */}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default NewYoutubeForm;
