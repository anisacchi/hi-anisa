import { ButtonTop, CardProfile, Certificates, Educations, Experiences, Skill, Transition } from '@/components';

export default function About() {
  return (
    <>
      <Transition />
      <section className='w-full flex md:flex-row flex-col justify-start items-start'>
        <div className='relative w-full h-auto md:basis-5/12'>
          <CardProfile />
        </div>
        <div className='md:w-7/12 w-full md:pt-4 pt-8 md:basis-7/12 flex flex-col lg:gap-10 gap-8'>
          <p className='md:text-sm text-base'>
            Hi, I am a passionate React/Front-End Developer and have a deep love
            for learning, especially about IT, where I am constantly looking for
            opportunities to expand my knowledge. In addition to my love for
            coding, I also have a creative side that I indulge in by designing
            graphics and drawing.{' '}
            <span className='font-medium'>
              {`Let's collaborate and create something amazing!`}
            </span>
          </p>
          <div className='w-full flex flex-col gap-4'>
            <div className='border-l-2 border-primary-300 pl-4 mt-4'>
              <span className='md:text-xs text-sm text-neutral-500 dark:text-neutral-200'>{`A few technologies I've been working with recently`}</span>
              <h2 className='lg:text-3xl text-2xl font-bold tracking-wide'>Skills</h2>
            </div>
            <Skill />
          </div>
					<div className='w-full my-6 flex flex-col gap-8'>
            <div className='border-l-2 border-primary-300 pl-4 mt-4'>
              <span className='md:text-xs text-sm text-neutral-500 dark:text-neutral-200'>Where I studied and got my degree</span>
              <h2 className='lg:text-3xl text-2xl font-bold tracking-wide'>Education</h2>
            </div>
						<Educations />
          </div>
					<div className='w-full my-6 flex flex-col gap-8'>
            <div className='border-l-2 border-primary-300 pl-4 mt-4'>
              <span className='md:text-xs text-sm text-neutral-500 dark:text-neutral-200'>What I have done so far</span>
              <h2 className='lg:text-3xl text-2xl font-bold tracking-wide'>Experiences</h2>
            </div>
						<Experiences />
          </div>
					<div className='w-full my-6 flex flex-col gap-8'>
            <div className='border-l-2 border-primary-300 pl-4 mt-4'>
              <span className='md:text-xs text-sm text-neutral-500 dark:text-neutral-200'>What I achieved so far</span>
              <h2 className='lg:text-3xl text-2xl font-bold tracking-wide'>Certificates</h2>
            </div>
						<Certificates />
          </div>
        </div>
				<ButtonTop />
      </section>
    </>
  );
}
