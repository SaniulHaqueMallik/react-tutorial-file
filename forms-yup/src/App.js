import './App.css';
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'


function App() {

  const schema = yup.object().shape({
    FullName: yup.string().required('Name is required'),
    Email : yup.string().email('Please provide a valid mail').required('Email is required'),
    Age : yup.number().positive('Age should be positive').integer().min(18).required('Age is required'),
    Password : yup.string().min(4).max(20).required('Password is required'),
    ConfirmPassword: yup.string().oneOf([yup.ref('Password'),null],'Password and Confirm Password should be same').required(),
   })


  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver : yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data.Age)
  }
  return (
    <div className="App">
     <h1>React Hook Form</h1>
     <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Full Name...' {...register("FullName")} />
        <div className='error'>{errors.FullName?.message}</div>

        <input type="text" placeholder='Email...' {...register('Email')}/>
        <div className='error'>{errors.Email?.message}</div>

        <input type="number" placeholder='Age' {...register('Age')} />
        <div className='error'>{errors.Age?.message}</div>
       
        <input type="password" placeholder='Password' {...register('Password')} />
        <div className='error'>{errors.Password?.message}</div>

        <input type="password" placeholder='Confirm Password' {...register('ConfirmPassword')} />
        <div className='error'>{errors.ConfirmPassword?.message}</div>

        <input className='submit' type="submit" value='Register'/>
     </form>
    </div>
  );
}

export default App;
