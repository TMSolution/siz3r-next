"use client";
import FormComponent from "@/components/Form";
import Block from "@/components/Layout/Block";
import Component from "@/components/Layout/Component";
import Image from "@/components/Layout/Image";
import Text from "@/components/Layout/Text";
import { useState } from "react";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact() {
  const [reCaptchaToken, setRecaptchaToken] = useState(null);
  return (
    <>
      <Block
        background="transparent"
        style={{
          minHeight: "40vh",
          paddingTop: 15,
          paddingBottom: 5,
        }}
        gridProps={{ spacing: 3 }}>
        <Text
          title={"Skontaktuj się z nami"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus efficitur, dignissim nunc vel, bibendum sem.\n\nNulla condimentum efficitur vehicula. Nullam ac felis fringilla, ultrices purus vel, porta nisl. Mauris ut rutrum tellus, ut placerat turpis. Proin et metus ex. Sed pellentesque finibus pulvinar. Curabitur vitae ex ut velit commodo consectetur.\n\n Suspendisse ut vestibulum velit. Donec ligula nisl, faucibus vel pharetra eu, ornare in elit. Cras tristique aliquet sagittis. Phasellus eu nisl maximus, cursus lectus quis, consequat ex. "
          }
          textAlign="left"
          textAlignTitle="left"
          md={5.5}
        />
        <Image
          md={6.5}
          src={"https://picsum.photos/1600/600"}
          // height={"40vh"}
          width={"100%"}
          gridStyle={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        />
      </Block>
      <Block
        background="transparent"
        style={{ minHeight: "80vh", paddingTop: 0, overflow: "hidden" }}>
        <Component md={8}>
          <div id="contactForm" style={{ width: "100%" }}>
            <GoogleReCaptcha
              onVerify={(token) => !reCaptchaToken && setRecaptchaToken(token)}
            />
            <Text title={"Formularz kontaktowy"} md={12} />
            <FormComponent
              // light={true}
              validate={(values) => {
                let errors = {};
                function validateEmail(email) {
                  var re = /\S+@\S+\.\S+/;
                  return re.test(email);
                }
                if (!values.name.trim()) errors.name = "Pole wymagane.";
                if (!values.email.trim()) errors.email = "Pole wymagane.";
                if (!validateEmail(values.email.trim()))
                  errors.email = "Nieprawidłowy Email";
                if (!values.phone.trim()) errors.phone = "Pole wymagane.";
                if (!values.multiline.trim())
                  errors.multiline = "Pole wymagane.";
                return errors;
              }}
              fields={{
                name: {
                  //name: "Nazwa",
                  type: "string",
                  value: "",
                  customFieldsTop: (
                    <span style={{ marginBottom: 4, marginLeft: 8 }}>
                      <b>Nazwa</b>
                    </span>
                  ),
                  props: {
                    style: { margin: 0, marginBottom: 16 },
                  },
                },
                email: {
                  //name: "Email",
                  type: "string",
                  value: "",
                  customFieldsTop: (
                    <span style={{ marginBottom: 4, marginLeft: 8 }}>
                      <b>Adres e-mail</b>
                    </span>
                  ),
                  props: {
                    style: { margin: 0, marginBottom: 16 },
                  },
                },
                phone: {
                  //name: "Telefon",
                  type: "tel",
                  value: "",
                  customFieldsTop: (
                    <span style={{ marginBottom: 4, marginLeft: 8 }}>
                      <b>Telefon</b>
                    </span>
                  ),
                  props: {
                    style: { margin: 0, marginBottom: 16 },
                  },
                },
                multiline: {
                  //name: "Wiadomość",
                  variant: "string",
                  value: "",
                  props: {
                    multiline: true,
                    minRows: 8,
                    style: { margin: 0, marginBottom: 16, padding: 0 },
                  },
                  customFieldsTop: (
                    <span style={{ marginBottom: 4, marginLeft: 8 }}>
                      <b>Wiadomość</b>
                    </span>
                  ),
                },
              }}
              buttonName="Wyślij"
              //  buttonProps={{}}
              callback={async (
                values,
                setSubmitting,
                setErrors,
                setValues,

                setSuccess
              ) => {
                if (reCaptchaToken) {
                  setSubmitting(true);
                  alert("submit");
                  // await axios
                  //   .post(window.location.origin + "/api/email", {
                  //     userEmailProps: {
                  //       name: values.name,
                  //       phone: values.phone,
                  //       email: values.email,
                  //       message: values.multiline,
                  //     },
                  //   })
                  //   .then(() => {
                  //     setSubmitting(false);
                  //     setValues({
                  //       name: "",
                  //       email: "",
                  //       phone: "",
                  //       multiline: "",
                  //     });
                  //     setSuccess(true);
                  //   })
                  //   .catch(() => {
                  //     alert("Błąd podczas wysyłania, spróbuj ponownie");
                  //   });
                }
              }}
            />
          </div>
        </Component>
      </Block>
    </>
  );
}
