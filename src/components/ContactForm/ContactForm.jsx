import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { toast } from "react-toastify";
import { selectContacts } from "../../redux/selectors";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(20).required("Required"),
});

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      toast.warning(`${values.name} is already in contacts`);
      actions.resetForm();
      return;
    }

    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Number
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
