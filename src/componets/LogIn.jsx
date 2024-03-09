import React, { useState } from 'react'
import Button from './Button'

function LogIn() {
  const [logIn, setLogIn ] = useState(true)
  const [logUp, setLogUp ] = useState(true)
  const [logUp2, setLogUp2 ] = useState(true)
  const [change, onchange] = useState('')

  
  const handleLogin = () => setLogIn(!logIn)
  const handleLoginUp = () => setLogUp(!logUp)
  const handleLoginUp2 = () => setLogUp2(!logUp2)


  function handleChange(event) {
    console.log(event.target.value);
  }
  
    return (
    <div>
        <div className='md:p-0 flex flex-col gap-4 items-center justify-center w-full h-[100vh] bg-blue-300'>
            <p className='text-[2rem] text-[white]'>bank of Davita </p>
            {logUp && <div className={`flex flex-col justify-center items-center p-[.6rem] h-[15srem] gap-5 bg-white placeholder  rounded-[10px] ${!logIn && 'hidden'}`}>
                <div className='flex flex-col gap-5'>
                    <div onClick={handleLoginUp}>
                        <Button value={'sign up'}/>
                    </div>
                        <input className='border-[1px] p-[1rem] rounded bg- ' placeholder='email' type="text" />
                        <input className='border-[1px] p-[1rem] rounded ' placeholder='password' type="text" />
                    <div onClick={handleLogin}>
                        <Button  value={'sign in'}/>

                    </div>
                </div>

            </div>}

            {!logUp && <form className='flex flex-col justify-center items-center p-[.6rem] h-[15srem] gap-5 bg-white placeholder  rounded-[10px]'>
                <input className='border-[1px] p-[1rem] w-full rounded bg- ' placeholder='first name ' type="text" />
                <input className='border-[1px] p-[1rem] w-full rounded bg- ' placeholder='last name ' type="text" />
                <input className='border-[1px] p-[1rem] w-full rounded bg- ' placeholder='email' type="email" />
                <input className='border-[1px] p-[1rem] w-full rounded bg- ' placeholder='password' type="password" />
                <input className='border-[1px] p-[1rem] w-full rounded bg- ' placeholder='confirm password' type="password" />
                <Button onClick={handleLoginUp2}  value={'sign up'}/>
            </form>
            }
            {!logIn &&
            <div className=' text-green-500 text-[2rem] text-center'>
                Log in Success
                    <div onClick={handleLogin} className='text-[black]'>
                        <Button  value={'sign in'}/>
                    </div>
            </div>

            }
        </div>
    </div>
  )
}

export default LogIn
