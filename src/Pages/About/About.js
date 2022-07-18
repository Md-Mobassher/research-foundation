import React from 'react';
import UseAboutInfo from '../../Hooks/UseAboutInfo';

const About = () => {
    return (
        <div>
            <div className='lg:my-12 my-8 lg:px-20 px-5 overflow-x-hidden overflow-hidden mx-auto '>
            <h2 className='text-3xl font-semibold mb-2'>About Us</h2>
            <hr />
                 <UseAboutInfo></UseAboutInfo>
            </div>
        </div>
    );
};

export default About;