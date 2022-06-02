import React from 'react';
import './Feature.css';

const Feature = () => {
    return (
        <div id='feature' className='my-12 border-b-2 border-black '>
            <div className='lg:px-20 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2'>
                <div className=' border-l-2  border-black p-10 sm:max-w-sm'>
                    <h2 className='text-2xl mb-2'>RESEARCH TEAM</h2>
                    <p className='text-sm'>BRF is providing a collaborative research platform for any expatriate researcher who aspires the mission of BRF.</p>
                    <button class="btn btn-info btn-sm mt-3">Click Here</button>
                </div>
                <div  className=' border-l-2  border-black p-10'>
                    <h2 className='text-2xl mb-2'>RESEARCH TEAM</h2>
                    <p className='text-sm'>BRF is providing a collaborative research platform for any expatriate researcher who aspires the mission of BRF.</p>
                    <button class="btn btn-info btn-sm mt-3">Click Here</button>
                </div>
                <div  className=' border-l-2  border-black p-10'>
                    <h2 className='text-2xl mb-2'>RESEARCH TEAM</h2>
                    <p className='text-sm'>BRF is providing a collaborative research platform for any expatriate researcher who aspires the mission of BRF.</p>
                    <button class="btn btn-info btn-sm mt-3">Click Here</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;