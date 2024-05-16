import { useState } from 'react'
import { Logo } from '../../constant'
import { Input } from '../ui'

function Register() {
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')


  return (
    <div className="w-25 mx-auto mt-5 text-center">
      <img className="mb-4" src={Logo} alt="logo" width="90"/>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <Input lable='Username' state={username} setState={setUsername}/>

      <Input lable='E-mail address' state={email} setState={setEmail}/>

      <Input lable='Password' state={password} setState={setPassword} type={'password'}/>

      <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    </div>
  )
}

export default Register