import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import StyledError from "./StyledError";
import "../YoutubeForm.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
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

const NewYoutubeForm = () => {
  //   console.log("Visited Fields:", formik.touched);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
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
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
        </div>

        <div className="form-control">
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
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default NewYoutubeForm;
