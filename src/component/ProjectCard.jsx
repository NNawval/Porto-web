import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ProjectCard = ({ title,description,role,framework,image,link }) => {
  return (
    title ? (
      <div className="bg-bg w-screen max-w-full desktop:container pb-20 pt-5">
        <div className='flex justify-center'>
          <img src={image} className='max-h-[400px] aspect-[21/10]' />
        </div>

        <div className='w-[60%] mx-auto lg:max-w-[920px] pt-10'>
          <div className='flex flex-row my-auto text-left '>
            <h1 className="font-neue text-5xl ">{title}</h1>

          </div>
          <div className='md:flex flex-row py-6'>
            <div className='w-[67%] '>
              <p className="md:pr-16 font-maxima font-normal text-lg">
                {description}</p>
                <a href={link} target="_blank" className="max-w-[100px] flex justify-between rounded-full mt-5 border-[0.6px] transition-all 
    ease-in-out border-black group
    capitalize text-black hover:border-white hover:bg-black hover:text-white font-medium
    dark:bg-black dark:text-light dark:hover:border-dark dark:hover:bg-light dark:hover:text-dark
    p-2 px-4 self-center md:text-base
"> <div >Github</div>
<div><FontAwesomeIcon icon={faGithub} /></div></a>
            </div>
            <div className='w-[33%]'>
              <div className='py-8 md:py-0 md:pb-3 '>
                <h1 className='font-neue '>Role</h1>
                <p className="font-maxima font-normal" dangerouslySetInnerHTML={{ __html: role }} />
              </div>
              <div>
                <h1 className='font-neue'>Framework and Tools</h1>
                <p className="font-maxima font-normal" dangerouslySetInnerHTML={{ __html: framework }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        {/* Your alternative div content goes here */}
      </div>
    )
  );
};

export default ProjectCard;
