import React, { Suspense } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Fox from '../models/Fox.jsx'
import { Loader } from '@react-three/drei';



const Contact = () => {

  const formRef = useRef(null);

  const [form, setForm] = useState({name: '', email: '', message: ''}); 
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleFocus = () => {};

  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    //emailjs package installation 
    emailjs.send(
      //create emailjs account
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name : form.name, 
        to_name :"Lawrence", 
        from_email : form.email,
        to_email: "arryllopez7@gmail.com",
        message : form.message, 

      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);     
      // show success message
      // hide an alert 
      //temp success message
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({name: '', email: '', message: ''});
  }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      alert("Something went wrong. Please try again.");
    });
  }

  
  return (
    <section
      className="relative flex lg:flex-row flex-col max-container"
    > 
      <div className = "flex-1 min-w-[50%] flex flex-col"> 
        <h1 className = "head-text "> Get in Touch </h1>

        <form
          className = "w-full flex flex-col gap-7 mt-14"
          onSubmit = {handleSubmit} 
        > 
          <label className = "text-black-500 font-semibold">
            Your Name

            <input 
            type= "text" 
            name = "name"
            className = "input" 
            placeholder = "John"
            required
            value = {form.name} 
            onChange = {handleChange}
            onFocus = {handleFocus}
            onBlur = {handleBlur}  
            /> 
          
          </label>

          <label className = "text-black-500 font-semibold">
           Your Email

            <input 
            type= "email" 
            name = "email"
            className = "input" 
            placeholder = "john@example.com"
            required
            value = {form.email} 
            onChange = {handleChange}
            onFocus = {handleFocus}
            onBlur = {handleBlur}  
            /> 
          
          </label>

          <label className = "text-black-500 font-semibold">
            Your Message

            <textarea 
            rows = "4" 
            name = "message"
            className = "textarea" 
            placeholder = "Let's talk about..."
            required
            value = {form.message} 
            onChange = {handleChange}
            onFocus = {handleFocus}
            onBlur = {handleBlur}  
            /> 
          
          </label>

          <button
          type = "submit"
          className = "btn" 
          disabled = {isLoading}
          onFocus = {handleFocus}
          onBlur =  {handleBlur}
          >
            {isLoading  ? 'Sending...' : 'Send Message'}
           
          </button>
        </form> 
      </div> 

      <div className = "lg-w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"> 
        <Canvas
          camera = {{ 
            position :[0,0,5]
          }}
        > 
          <Suspense fallback = {<Loader/>}>
            <Fox
            position  = {[0.5,0.35,0]}
            rotation = {[12,0,0]}
            scale = {[0.5,0.5,0.5]} 
            /> 
          </Suspense>
        </Canvas>  
      </div> 

    </section> 
  )
}

export default Contact