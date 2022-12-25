import { useState } from "react";
import uuid from "react-uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Button, CircularProgress, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import bell from "../../assets/bell.svg";
import bgLogo from "../../assets/bg-logo.svg";
import close from "../../assets/close.svg";
// import phone from "../../assets/card-phone.png";
import styles from "./styles.module.scss";

const SubscribeCard = ({ handleClose }) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async ({ email }) => {
    const id = uuid();
    await setDoc(doc(db, `emails/${id}`), { email }).then(() =>
      setSuccess(true)
    );
  };

  return (
    <div className={styles.container}>
      <Image
        src={close}
        alt="close"
        className={styles.close}
        onClick={handleClose}
      />
      <Image src={bgLogo} alt="" className={styles.logo} />

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {!success ? (
            <>
              <h2>
                Get <span>early access</span> benefits
              </h2>
              <p>
                Be the first to be notified when we go live, and get early
                access benefits
              </p>

              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .trim()
                    .required("This field is required")
                    .email("E-mail is not valid"),
                })}
                onSubmit={handleSubmit}
              >
                {({
                  handleSubmit,
                  handleChange,
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  dirty,
                  isValid,
                }) => (
                  <form noValidate onSubmit={handleSubmit}>
                    <TextField
                      size="small"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      // touched={touched.email}
                      // error={errors.email}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={!(isValid && dirty)}
                    >
                      {isSubmitting ? <CircularProgress size={30} /> : "Submit"}
                    </Button>
                  </form>
                )}
              </Formik>
            </>
          ) : (
            <>
              <h2>Thank you for subscribing to our service</h2>
            </>
          )}
        </div>

        <Image src={bell} alt="" className={styles.bell} />
      </div>
    </div>
  );
};

export default SubscribeCard;
