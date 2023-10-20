/* eslint-disable react/no-unescaped-entities */
import Swal from 'sweetalert2'


import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authcontext } from '../../Authprovider/Authprovider';



const Register = () => {
const {createuser}=useContext(authcontext)
const [passerror,setpasserror]=useState('')
const navigate=useNavigate()

    const handleregister=(e)=>{
e.preventDefault()
const form=new FormData(e.currentTarget)
const name=form.get('name')
const email=form.get('email')
const password=form.get('password')
const regex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
console.log(name,email,password)

if(!name){
    return setpasserror('put your name email & password')
}

if(!regex.test(password)){

return setpasserror("password should contain atleast one number and one special character")
 

}





createuser(email,password)
.then(res=>{
    console.log(res.user)
    Swal.fire(
        'congratulations!',
        'your sign up done!',
        'success'
      )
      navigate('/')

})
.catch(error=>{
    console.log(error)
})


    }
    return (
        <div>
            <section className="">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">

        <form onSubmit={handleregister} className="w-full max-w-md">
     <div className="mb-5">    <h1 className="mt-3 text-2xl font-semibold text-gray-800 ">sign up</h1></div>
        <input type="text" name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="name"/>
          

            <div className="relative flex items-center mt-8">
          
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    
                </span>
   

                <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
            </div>

            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input type="password" name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
            </div>

            <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign up
                </button>

      <p className="text-red-600 font-medium">{passerror}</p>

              

                <div className="mt-6 text-center ">
                  <Link to={'/login'}>  <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                     have an account ? Sign in
                    </a></Link>
                    
                </div>
            </div>
        </form>
    </div>
</section>
        </div>
    );
};

export default Register;