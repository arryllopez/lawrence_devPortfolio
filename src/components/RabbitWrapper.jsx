import React, { useState, useEffect } from 'react'
import Rabbit from '../models/Rabbit.jsx';

const RabbitWrapper = ({ currentAnimation }) => {
  const [rabbitPosition, setRabbitPosition] = useState([0.5, -0.3, 0])
  const [rabbitScale, setRabbitScale] = useState([0.5, 0.5, 0.5])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // 📱 mobile
        setRabbitPosition([0, 0.35, 0])
        setRabbitScale([0.35, 0.35, 0.35])
      } else {
        // 🖥 desktop
        setRabbitPosition([0.5, -0.5, 0])
        setRabbitScale([0.5, 0.5, 0.5])
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Rabbit
      currentAnimation={currentAnimation}
      position={rabbitPosition}
      rotation={[12.6, -0.6, 0]}
      scale={rabbitScale}
    />
  )
}

export default RabbitWrapper
