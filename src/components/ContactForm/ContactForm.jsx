import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import s from './ContactForm.module.css'

const ContactForm = ({addNewCard}) => {
     const orderSchema = Yup.object().shape({
         name: Yup.string()
             .required()
             .min(3)
             .max(50),
         number: Yup.string()
             .required()
             .matches(/^\d+$/)
             .min(3)
             .max(50),
  });



    return (
        <Formik
            validationSchema={orderSchema}
            initialValues={{ name: '', number: '' }}
            onSubmit={(values, { resetForm }) => {
                addNewCard(values);
                resetForm();
            }}
    >
            {() => (
                <Form>
                    <label><Field className={s.addInput} name="name" type="text"/></label>
                    <ErrorMessage name="name"  component="div"
                    style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}/>
                    <label><Field className={s.addInput} name="number" type="tel" /></label>
                    <ErrorMessage name="number"  component="div"
                    style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}/>
                    <button className={s.btnAdd} type="submit">Add contact</button>
                </Form>
            )}
        </Formik>
    )
};

export default ContactForm;