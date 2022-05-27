import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../YoutubeForm.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
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
          <ErrorMessage name="name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default NewYoutubeForm;
