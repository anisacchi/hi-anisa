import {
  ButtonTop,
  CardProfile,
  Certificates,
  Educations,
  Experiences,
  Skill,
  Transition,
} from '@/components';

export default function About() {
  return (
    <>
      <Transition />
      <section className='w-full flex flex-col justify-start items-start'>
        <div className='w-full flex lg:flex-row flex-col justify-start items-start'>
          <div className='flex justify-center w-full h-auto lg:basis-5/12'>
            <CardProfile />
          </div>
          <div className='lg:w-7/12 w-full lg:pt-0 pt-8 flex flex-col lg:gap-10 gap-8'>
            <p>
              Hi, I am a passionate React/Front-End Developer and have a deep
              love for learning, especially about IT, where I am constantly
              looking for opportunities to expand my knowledge. In addition to
              my love for coding, I also have a creative side that I indulge in
              by designing graphics and drawing.{' '}
              <span className='font-semibold'>
                {`Let's collaborate and create something amazing!`}
              </span>
            </p>
            <div className='w-full flex flex-col gap-4'>
              <div className='border-l-2 border-primary-500 pl-4 mt-4'>
                <span className='text-sm text-primary-600 dark:text-primary-200'>{`A few technologies I've been working with recently`}</span>
                <h1 className='lg:text-4xl text-2xl font-bold tracking-wide text-primary-700 dark:text-primary-400'>
                  Skills
                </h1>
              </div>
              {/* <Skill /> */}
            </div>
          </div>
        </div>
        <div className='w-full my-6 flex flex-col gap-8'>
          <div className='border-l-2 border-primary-500 pl-4 mt-4'>
            <span className='text-sm text-primary-600 dark:text-primary-200'>
              Where I studied and got my degree
            </span>
            <h1 className='lg:text-4xl text-2xl font-bold tracking-wide text-primary-700 dark:text-primary-400'>
              Education
            </h1>
          </div>
          <Educations />
        </div>
        <div className='w-full my-6 flex flex-col gap-8'>
          <div className='border-l-2 border-primary-500 pl-4 mt-4'>
            <span className='text-sm text-primary-600 dark:text-primary-200'>
              What I have done so far
            </span>
            <h1 className='lg:text-4xl text-2xl font-bold tracking-wide text-primary-700 dark:text-primary-400'>
              Experiences
            </h1>
          </div>
          <Experiences />
        </div>
        <div className='w-full my-6 flex flex-col gap-8'>
          <div className='border-l-2 border-primary-500 pl-4 mt-4'>
            <span className='text-sm text-primary-600 dark:text-primary-200'>
              What I achieved so far
            </span>
            <h1 className='lg:text-4xl text-2xl font-bold tracking-wide text-primary-700 dark:text-primary-400'>
              Certificates
            </h1>
          </div>
          <Certificates />
        </div>
        <ButtonTop />
      </section>
    </>
  );
}
