import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <div className='pt-16 mt-3 mb-4'>
            <div className='text-center text-black'>
                <Fade delay={1e3} cascade damping={1e-1}>
                    <p className='text-4xl font-bold'>About Me</p>
                </Fade>
                <Fade delay={1e3} cascade damping={1e-1}>
                    <p className='w-[70%] mx-auto text-2xl font-semibold my-4'>
                        This is Kajol Kona Datta. A passionate Frontend Developer. I believe that the main reason is that front-end development satisfies my need for creativity. </p>
                        </Fade>
                        <Fade delay={1e3} cascade damping={1e-1}>
                       <p className='w-[70%] mx-auto text-2xl font-semibold my-4'> I am from Sylhet, Bangladesh.A place of beauty and nature.Since my childhood, i love art and painting.I always try to design stuff with my unique point of view.I also love to create things that can be usefull to others. </p>
                       </Fade>
                       <Fade delay={1e3} cascade damping={1e-1}>
                     <p className='w-[70%] mx-auto text-2xl font-semibold my-4'> I started coding from university life.Coding is also an art for me.I love it and now I have the opportunity to design along with the coding.I find it really interesting and I enjoyed the process a lot. </p>
                     </Fade>
                     <Fade delay={1e3} cascade damping={1e-1}>
                   <p className='w-[70%] mx-auto text-2xl font-semibold my-4'>
                        My vision is to make the world a better place.Now almost everything is becoming better than ever.It is time for us to create more good stuff that helps the world to become a better place.</p>
                </Fade>
            </div>
        </div>
    );
};

export default About;