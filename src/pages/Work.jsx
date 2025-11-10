import React from 'react'
import Workitem from './WorkItem'


const data = [
        {
            year: '2024' ,
            title : 'After School Activity Program Leader',
            company : 'BGC Durham',
            duration : 'October 2024 - Current',
            details : 'Constantly providing active supervision and leadership to program participants. Responsible for providing a safe and strucutred laarning environment for young children. Expected to research and to plan assigned program activities, making activities innovative, and motivating club memebrs.'
        },
        {
            year: '2024' ,
            title : 'Summer Camp Counsellor',
            company : 'STEM Camp',
            duration : 'June 2024 - August 2024',
            details : 'Facilitated learning of the fundamentals of STEM (Science, Technology, Engineering, Mathematics) related fields trough project-based learning amongst young campers. Demonstrated the fundamentals of programming concepts through block coding in Scratch and Microsoft MakeCode Editor. Developed core engineering principles and fundamentals such as creative problem solving and resourcefulness amongst young campers. Conducted outdoor, team-based activities, including sports programs and collaborative group challenges, to promote teamwork, communication, and physical engagement'
        },
        {
            year: '2022' ,
            title : 'Retail Sales Associate',
            company : 'H&M',
            duration : 'April 2022 - December 2022',
            details : 'Tasked with maintaining the cleanliness of the sales floor. Provided excellent customer service. Worked with a team to create a positive shopping environment. Worked the cash point with maximum effectiveness. Managed the fitting room in an organized and customer friendly fashion'
        },
        {
            year: '2021' ,
            title : 'Crew Member',
            company : 'Taco Bell',
            duration : 'June 2021 - August 2021',
            details : 'Regulated and managed a fast-paced working environment to ensure deadlines were achieved. Tasked with keeping a clean and safe workplace environment. Cooked, prepared, and served food to customers. Provided excellent customer service. Ensured utensils and pans were clean'
        },
]

const Work = () => {
  return (
    <div id = 'work' >
        
        {data.map((item,idx) => (
            <Workitem 
            key = {idx} 
            year = {item.year}
            title = {item.title}
            duration = {item.duration}
            details = {item.details} 
            company = {item.company}
            />
        ))}
    </div>
  ) 
}

export default Work