import {useForm} from 'react-hook-form'
import './App.css';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

function App() {
  const schema = yup.object().shape({
    FullName: yup.string().max(30).min(3).required(),
    Email: yup.string().email().required(),
    yourAge: yup.number().positive().integer().min(18),
    password: yup.string().min(4).max(20).required(),
    confirmPass: yup.string().oneOf([yup.ref('password'),null]).required()
  })


  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver : yupResolver(schema)
  })

  const onSubmit = (data) =>{
    console.log(data)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Full Name...' {...register('FullName')} />
        <input type="text" placeholder='Email...' {...register('Email')}/>
        <input type='number' placeholder='Age' {...register('yourAge')}/>
        <input type='password' placeholder='Password' {...register('password')}/>
        <input type='password' placeholder='Confirm Password' {...register('confirmPass')}/>
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;
