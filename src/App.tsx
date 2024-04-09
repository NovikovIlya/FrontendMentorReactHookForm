import './App.css'
import { Controller, useForm } from 'react-hook-form';
import { Input } from 'antd';

function App() {
  const { register, handleSubmit, reset,control, formState: { errors } } = useForm();

  const onSubmit = (data:any) => console.log(data);

  const isValid = (text:string)=>{
    console.log('t',text)
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(text) ){
      return true
    }else return 'нет'
  }

 
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='email'
        control={control}
        rules={{
          required: true,
          validate: isValid || "That URL is not valid!"
        }}
        render={({field})=><Input  {...field}/>}
       />
       {errors?.email?.message ? <div>{errors.email.message.toString()}</div> : '' }
      <button type="submit" >Send</button>
    </form>
  );
}

export default App
