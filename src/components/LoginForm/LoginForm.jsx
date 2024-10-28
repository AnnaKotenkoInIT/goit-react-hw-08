import { Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.name}`);
      })
      .catch(() => {
        toast.error('Invalid credentials!');
      });
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
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
            placeholder="Enter your password"
          />
        </label>
        <button className={s.btn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
