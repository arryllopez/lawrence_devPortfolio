import React from 'react'
import {motion} from 'framer-motion'

var index8 = 1
var index9 = 2
var index10 = 3
var index11 = 4
var index12 = 5

const fadeInAnimationVariants = 
{ 
  initial : {
    opacity : 0,
    x:100
  },
  animate :  (index) => ({
    opacity : 1,
    x : 0,
    transition : {
    delay : 0.05 * index,
    },
  }),
}

const Workitem = ({year, title, duration, details, company}) => {
  return (
    <ol className = 'flex flex-col md:fex-row relative border-1 border-stone-200'> 
        <li className = 'mb-10 ml-4'> 
            <div className = 'absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
                <p className  ='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>

                    <motion.span 
                    className = 'outline outline-offset-0 outline-gray-900 inline-block px-2 py-1 font-semibold text-white bg-[#cc5500] rounded-md'
                    variants = {fadeInAnimationVariants}
                    initial = "initial"
                    whileInView = "animate"
                    viewport = {{
                    once : true,
                    }}
                    custom = {index8}
                    >{year} </motion.span> 

                    <motion.span className = 'outline outline-offset-0 outline-gray-900 inline-block px-2 py-1 font-semibold text-white bg-[#cc5500] rounded-md'
                    variants = {fadeInAnimationVariants}
                    initial = "initial"
                    whileInView = "animate"
                     viewport = {{
                       once : true,
                     }}
                     custom = {index9}
                    >{company} </motion.span>

                    <motion.span className = 'text-lg font-semibold text-[#cc5500]'
                    variants = {fadeInAnimationVariants}
                    initial = "initial"
                    whileInView = "animate"
                     viewport = {{
                       once : true,
                     }}
                     custom = {index10}
                    >{title} </motion.span> 

                    <motion.span className = 'my-1 text-sm font-nomrla leading-none text-stone-400'
                      variants = {fadeInAnimationVariants}
                      initial = "initial"
                      whileInView = "animate"
                       viewport = {{
                         once : true,
                       }}
                       custom = {index11}
                    >{duration} </motion.span> 

                </p>

                <p> 
                <motion.span className = 'my-2 text-base font-normal text-stone-500'
                   variants = {fadeInAnimationVariants}
                   initial = "initial"
                   whileInView = "animate"
                    viewport = {{
                      once : true,
                    }}
                    custom = {index12}
                >{details}</motion.span> 

                </p>
        </li>
    </ol>
  )
}

export default Workitem