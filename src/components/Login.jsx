import { useState } from 'react'
import BG_IMAGE from '../assets/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }
    return (
        <>
            <div className='absolute'>
                <img className='opacity-95' src={BG_IMAGE} alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <form className='bg-black h-[400px] relative mt-14 w-1/3 bg-opacity-90'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-white p-5 pl-10 mt-4 text-3xl font-bold '>
                            {isSignIn ? "Sign In" : "Sign Up"}
                        </div>
                        {!isSignIn ? <input className='bg-gray-500 p-2 mx-10' type="text" placeholder='Full Name' /> : null}
                        <input className='bg-gray-500 p-2 mx-10' type="text" placeholder='Email or phone number' />
                        <input className='bg-gray-500 p-2 mx-10' type="text" placeholder='Password' />
                        <div className='text-center'>
                            <button className='bg-red-600 mt-5 text-white p-2 px-24' type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
                            <p className=' text-white p-3 px-24 cursor-pointer' onClick={toggleSignInForm}>
                                {
                                    isSignIn ? "New to Netflix ? Sign up now" : "Already a User? Sign in now"
                                }
                            </p>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Login