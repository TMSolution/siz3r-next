"use client";
import HexagonBackground from "@/components/Background/HexagonBackground";
import FormComponent from "@/components/Form";
import Block from "@/components/Layout/Block";
import Component from "@/components/Layout/Component";
import Image from "@/components/Layout/Image";
import Text from "@/components/Layout/Text";
import TranslationContext from "@/context/TranslationContext";
import zIndex from "@mui/material/styles/zIndex";
import { useContext, useState } from "react";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import { sendEmail } from "@/app/actions";
export default function Contact() {
  const [reCaptchaToken, setRecaptchaToken] = useState(null);
  const { dictionary, lang } = useContext(TranslationContext);
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(-45deg, #3C1992, #3C1992,#00D278,)",
        marginTop: 15,
      }}>
      <HexagonBackground
        position={{
          xs: "linear-gradient(green, black, black)",
          md: `radial-gradient(circle at center, green, black, black)`,
        }}
        lightPos="0%"
        maskHeight={"100vh"}
      />
      <Block
        background="transparent"
        style={{
          minHeight: "40vh",
          paddingTop: 15,
          paddingBottom: 5,
          zIndex: 100,
        }}
        gridProps={{ spacing: 3, paddingTop: 15, paddingBottom: 15 }}>
        <Text
          title={dictionary.contact.title}
          text={dictionary.contact.description}
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
        style={{
          minHeight: "80vh",
          paddingTop: 0,
          overflow: "hidden",
          zIndex: 100,
        }}>
        <Component md={8}>
          <div id="contactForm" style={{ width: "100%" }}>
            <GoogleReCaptcha
              onVerify={(token) => !reCaptchaToken && setRecaptchaToken(token)}
            />
            <Text title={dictionary.contact.contactForm} md={12} />
            <FormComponent
              light={true}
              validate={(values) => {
                let errors = {};
                function validateEmail(email) {
                  var re = /\S+@\S+\.\S+/;
                  return re.test(email);
                }
                if (!values.name.trim())
                  errors.name = dictionary.contact.fieldRequired;
                if (!values.email.trim())
                  errors.email = dictionary.contact.fieldRequired;
                if (!validateEmail(values.email.trim()))
                  errors.email = dictionary.contact.invalidEmail;
                if (!values.phone.trim())
                  errors.phone = dictionary.contact.fieldRequired;
                if (!values.multiline.trim())
                  errors.multiline = dictionary.contact.fieldRequired;
                return errors;
              }}
              fields={{
                name: {
                  //name: "Nazwa",
                  type: "string",
                  value: "",
                  customFieldsTop: (
                    <span style={{ marginBottom: 4, marginLeft: 8 }}>
                      <b>{dictionary.contact.name}</b>
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
                      <b>{dictionary.contact.email}</b>
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
                      <b>{dictionary.contact.phone}</b>
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
                      <b>{dictionary.contact.message}</b>
                    </span>
                  ),
                },
              }}
              buttonName={dictionary.contact.send}
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
                  await sendEmail(
                    values.name,
                    values.email,
                    values.phone,
                    values.multiline
                  )
                    .then(() => {
                      setSubmitting(false);
                      setSuccess(true);
                    })
                    .catch((err) => {
                      setSubmitting(false);
                      alert("Błąd podczas wysyłania, spróbuj ponownie");
                    });
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
    </main>
  );
}
