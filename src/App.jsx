// App.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css';
import TextField from './components/LabelField/TextField';
import PasswordField from './components/PasswordField/PasswordField';
import SubmitButton from './components/SubmitButton/SubmitButton';

const schema = yup.object().shape({
  familia: yup.string().required("Familia majburiy"),
  name: yup.string().required("Ism majburiy"),
  email: yup.string().email("Email noto'g'ri").required("Email majburiy"),
  password: yup.string().min(6, "Parol kamida 6 ta belgi bo'lishi kerak").required("Parol majburiy"),
});

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      familia: data.familia.charAt(0).toUpperCase() + data.familia.slice(1),
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
    };
    console.log('Submitted Data:', formattedData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Familia:"
        {...register("familia")}
        error={errors.familia}
      />
      <TextField
        label="Ism:"
        {...register("name")}
        error={errors.name}
      />
      <TextField
        label="Email:"
        {...register("email")}
        error={errors.email}
      />
      <PasswordField
        {...register("password")}
        error={errors.password}
      />
      <SubmitButton />
    </form>
  );
};

export default App;
