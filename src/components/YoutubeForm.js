import React from "react";
import { useFormik } from "formik";
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
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name Required";
  }
  if (!values.email) {
    errors.email = "Email Required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "Invalid Email format";
  }
  if (!values.channel) {
    errors.channel = "Channel Required";
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name Required Y"),
  email: Yup.string()
    .required("Email Required Y")
    .email("Invalid Email format Y"),
  channel: Yup.string().required("Channel Required Y"),
});

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  //   console.log("Visited Fields:", formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <span className="error">{formik.errors.name}</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="error">{formik.errors.email}</span>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel && (
            <span className="error">{formik.errors.channel}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
