import { Suspense, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Rabbit from '../models/Rabbit.jsx'; // 🐇 replaced Fox
import Loader from '../components/Loader.jsx';
import { Canvas } from '@react-three/fiber';
import RabbitWrapper from '../components/RabbitWrapper.jsx';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('Armature.001|Idle');

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation('Armature.001|Run');
  const handleBlur = () => setCurrentAnimation('Armature.001|Idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('run');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Lawrence",
        from_email: form.email,
        to_email: "arryllopez7@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({ show :true, text: 'Thank you. I will get back to you as soon as possible.', type: 'success'});

      setTimeout(()=> { 
        hideAlert();
        setCurrentAnimation('Armature.001|Idle');
        setForm({ name: '', email: '', message: '' });
      }, [3000])
     
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('Armature.001|Idle');
      console.error(error);
      showAlert({ show :true, text: 'Something went wrong. Please try again.', type: 'danger'});
    });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Your Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Your Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@example.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              rows="4"
              name="message"
              className="textarea"
              placeholder="Let's talk about..."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg-w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 3],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <RabbitWrapper currentAnimation={currentAnimation} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
