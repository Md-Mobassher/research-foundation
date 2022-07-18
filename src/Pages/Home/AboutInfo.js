import React from 'react';
import UseAboutInfo from '../../Hooks/UseAboutInfo';



const AboutInfo = () => {
    return (
        <div className='lg:px-20 px-3 overflow-x-hidden overflow-hidden mx-auto my-12'>
            <h2 className='text-3xl mb-2'>NGIT Research Foundation, Bangladesh</h2>
            <hr />
            
            <UseAboutInfo></UseAboutInfo>
        </div>
    );
};

export default AboutInfo;