import React from 'react';
import { Experience } from '../types';


const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
  <div className='py-4 border-b border-gray-300 last:border-b-0'>
    <div className='flex flex-row items-start gap-x-5 '>
      <div className='flex flex-col items-start gap-y-1 text-nowrap'>
        <h5 className='text-xs font-semibold'>{experience?.year}</h5>
        <h6 className='text-xs'>{experience?.location}</h6>
      </div>
      <div className='flex flex-col items-start'>
        <h5 className='text-base font-bold'>{experience?.company}</h5>
        <h3 className='text-lg font-black'>{experience?.title}</h3>
        <p className='py-1 text-sm font-normal'>{experience?.description}</p>
      </div>
    </div>
  </div>
);

export default ExperienceCard;
