import React from 'react';


const ProjectCard = ({ title,description,role,framework,image }) => {
  return (
    title ? (
      <div className="bg-bg w-screen max-w-full desktop:container pb-20 pt-5">
        <div className='flex justify-center'>
          <img src={image} className='max-h-[400px] aspect-[21/10]' />
        </div>

        <div className='w-[60%] mx-auto lg:max-w-[840px] pt-10'>
          <div className='flex-grow my-auto text-left '>
            <h1 className="font-neue text-5xl ">{title}</h1>
          </div>
          <div className='md:flex flex-row py-6'>
            <div className='w-[67%] '>
              <p className="md:pr-16 font-maxima font-normal text-lg">
                {description}</p>
            </div>
            <div className='w-[33%]'>
              <div className='py-8 md:py-0'>
                <h1 className='font-neue text-lg'>Role</h1>
                <p className="font-maxima font-normal" dangerouslySetInnerHTML={{ __html: role }} />
              </div>
              <div>
                <h1 className='font-neue text-lg'>Framework and Tools</h1>
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
