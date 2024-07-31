import React, { Fragment } from "react";
import {
  IconButton,
  TextField,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "./Interface/Button";

const FormComponent = (props) => {
  const parseFields = (fields) => {
    let initialValues = {};
    for (const [key, value] of Object.entries(fields)) {
      initialValues[key] = value.value;
    }
    return initialValues;
  };
  const classes = {}; //useStyles();
  const [success, setSuccess] = React.useState(false);
  const [visibleFields, setVisibleFields] = React.useState([]);
  const [initialValues, setInitialValues] = React.useState(
    parseFields(
      typeof props.fields === "function" ? props.fields() : props.fields
    )
  );
  const [fieldCount, setFieldCount] = React.useState(
    Object.entries(
      typeof props.fields === "function" ? props.fields() : props.fields
    ).length
  );

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          return (props.validate && props.validate(values)) || {};
        }}
        onSubmit={(values, { setSubmitting, setErrors, setValues }) => {
          setSubmitting(true);
          props.callback &&
            props.callback(
              values,
              setSubmitting,
              setErrors,
              setValues,
              setSuccess
            );
          setSubmitting(false);
        }}>
        {({
          values,
          handleChange,
          touched,
          errors,
          isSubmitting,
          handleSubmit,
        }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
            }}>
            {Object.entries(
              typeof props.fields === "function"
                ? props.fields(values)
                : props.fields
            ).map((item, index) => {
              let key = item[0];
              let value = item[1];
              return value.type === "checkbox" ? (
                <>
                  <FormControlLabel
                    classes={{ checkboxLabel: classes.formCheckbox }}
                    control={
                      <Checkbox
                        checked={values[key]}
                        onChange={handleChange}
                        name={key}
                        style={{
                          color:
                            touched[key] && Boolean(errors[key])
                              ? "#f44336"
                              : "#ffc545",
                        }}
                      />
                    }
                    label={value.name}
                  />

                  <FormHelperText
                    variant="filled"
                    error={touched[key] && Boolean(errors[key])}>
                    {touched[key] && errors[key]}
                  </FormHelperText>
                </>
              ) : (
                <Fragment key={key}>
                  {value.customFieldsTop && value.customFieldsTop}
                  <TextField
                    // className={
                    //   value.customFields
                    //     ? classes.fieldCustomFields
                    //     : classes.field
                    // }
                    style={{ margin: 12 }}
                    variant="outlined"
                    size={"normal"}
                    color="primary"
                    InputLabelProps={{
                      classes: { focused: classes.labelFocused },
                    }}
                    InputProps={{
                      style: {
                        //padding:0,
                        backgroundColor: props.light && "rgba(255,255,255,0.8)",
                        color: props.light && "black",
                        padding: props.light && 0,
                      },
                      autoComplete: value.preventAutofill && "new-password",
                      endAdornment: value.type === "password" && (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => {
                              if (!visibleFields.includes(key)) {
                                setVisibleFields((prevState) => {
                                  let newState = prevState.concat(key);

                                  return newState;
                                });
                              } else {
                                setVisibleFields((prevState) => {
                                  let newState = prevState.filter(
                                    (item) => item !== key
                                  );

                                  return newState;
                                });
                              }
                            }}>
                            {visibleFields.includes(key) ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    inputProps={{
                      style: {
                        WebkitBoxShadow:
                          "0 0 0 1000px transparent inset !important",
                        padding: 8,
                      },
                    }}
                    name={key}
                    label={value.name}
                    value={values[key]}
                    disabled={value.disabled || isSubmitting}
                    onChange={handleChange}
                    // onKeyPress={(ev) => {
                    //   if (index + 1 === fieldCount && ev.key === "Enter") {
                    //     //handleSubmit();
                    //     ev.preventDefault();
                    //   }
                    // }}

                    error={!success && touched[key] && Boolean(errors[key])}
                    helperText={!success ? touched[key] && errors[key] : ""}
                    type={
                      value.type === "password"
                        ? visibleFields.includes(key)
                          ? "string"
                          : "password"
                        : value.type
                    }
                    {...(value.props || {})}
                  />
                  {value.customFields && (
                    <div
                      style={{ margin: "0 12px 12px" }}
                      className={classes.customFields}>
                      {value.customFields}
                    </div>
                  )}
                </Fragment>
              );
            })}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 8,
              }}>
              <Button
                className={classes.formButton}
                disabled={props.buttonDisabled || isSubmitting}
                type="submit"
                variant="contained"
                size={"large"}
                color="primary"
                style={{
                  backgroundColor: success
                    ? "#4caf50"
                    : props.buttonColor && props.buttonColor,
                  color: props.light && "white",
                  padding: "6px 24px",
                  fontSize: 14,
                  fontWeight: 500,
                  //marginTop: 12,
                }}>
                {isSubmitting ? "Czekaj..." : props.buttonName}
              </Button>
              {success && (
                <FormHelperText style={{ paddingTop: 12 }}>
                  Pomyślnie wysłano
                </FormHelperText>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormComponent;
