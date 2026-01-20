import { useForm } from 'react-hook-form'
import { registerSchema } from '../Schemas/schema'
import { yupResolver } from '@hookform/resolvers/yup'

function Form() {

    const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(registerSchema)})

    const onsubmit = (data) => {
      console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <input type='text' {...register('name')} placeholder='name' />
      <p className='error'>{errors.name?.message}</p>

      <input type='number' {...register('age')} placeholder='age' />
      <p className='error'>{errors.age?.message}</p>

      <input type='email' {...register('email')} placeholder='email' />
      <p className='error'>{errors.email?.message}</p>

      <input type='password' {...register('password')} placeholder='password' />
      <p className='error'>{errors.password?.message}</p>

      <input type='password' {...register('confirmPassword')} placeholder='confirm password' />
      <p className='error'>{errors.confirmPassword?.message}</p>

      <label>Skills:</label>
      <input type='checkbox' value="React" {...register('skills')} />React
      <input type='checkbox' value="nodejs" {...register('skills')} />Nodejs
      <input type='checkbox' value="javascript" {...register('skills')} />Javascript
      <p className='error'>{errors.skills?.message}</p>

      <button type='submit'>Register</button>
    </form>
  )
}

export default Form