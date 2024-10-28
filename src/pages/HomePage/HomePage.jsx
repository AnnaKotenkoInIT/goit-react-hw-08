import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome to the Phonebook!</h1>
      <p className={s.text}> Login or create your account now.</p>
    </div>
  );
};

export default HomePage;
