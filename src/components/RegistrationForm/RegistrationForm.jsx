import { Field, Form, Formik } from 'formik';
import s from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label className={s.label}>
          <span>Name</span>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </label>
        <label className={s.label}>
          <span>Email</span>
          <Field
            className={s.input}
            type="email"
            name="email"
            placeholder="Enter your email: email@gmail.com"
          />
        </label>
        <label className={s.label}>
          <span>Password</span>
          <Field
            className={s.input}
            type="password"
            name="password"
            placeholder="Create your password"
          />
        </label>
        <button className={s.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
