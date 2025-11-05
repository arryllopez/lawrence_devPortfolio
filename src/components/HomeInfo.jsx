import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Lawrence</span>
        👋
        <br />
        A 3rd year Software Engineering student at Ontario Tech University
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
         I am passionate about building<span className='font-semibold mx-2 text-white'>intelligent</span>applications
         <br />that combine<span className = 'font-semibold mx-2 text-white'>full-stack development</span>with 
         <span className = 'font-semibold mx-2 text-white'>data-driven insights</span> 
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more about me
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Discover how I build<span className='font-semibold mx-2 text-white'>AI-powered, data-driven, 
            and full-stack solutions</span>that turn ideas into intelligent applications
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Let's connect - I'm always open to discussing new opportunities, ideas, or collaborations!
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Contact Me
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;