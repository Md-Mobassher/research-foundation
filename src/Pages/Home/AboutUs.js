import React from 'react';

const AboutUs = () => {
    return (
        <div className='lg:px-20 px-3 overflow-x-hidden overflow-hidden mx-auto my-12'>
            <h2 className='text-3xl mb-2'>Biomedical Research Foundation, Bangladesh</h2>
            <hr />
            <div className='mt-5'>
                <h5 className='text-sm font-bold mb-2'>Who We Are</h5>
                <p className='text-sm'>Biomedical Research Foundation (BRF) is an independent non-profit organization based in Bangladesh. It aspires to be a reputed international collaborative research platform for biomedical research dedicated to improve the quality of life. BRF focuses on nurturing and developing young researchers as future scientific leaders of Bangladesh  in the area of health sector. It also wants to be the bridging platform for local and expatriate scientists.</p>
            </div>
            <div className='mt-5'>
                <h5 className='text-sm font-bold mb-2'>Mission</h5>
                <p className='text-sm'>Improving quality of life through biomedical research.</p>
            </div>
            <div className='mt-5'>
                <h5 className='text-sm font-bold mb-2'>Vision</h5>
                <p className='text-sm'>To establish as an international reputable collaborative research platform by 2021 and to make remarkable impact on chronic disease research by 2023.</p>
            </div>
            <div className='mt-5'>
                <h5 className='text-sm font-bold mb-2'>Values</h5>
                <p className='text-sm'>Integrity, collaboration, ethically responsible, transparent and accountable.</p>
            </div>
            <div className='mt-5'>
                <h5 className='text-sm font-bold mb-2'>Governance</h5>
                <p className='text-sm'>BRF operates under the overall guidance of a Board of Directors. The Board includes renowned researchers with multidisciplinary backgrounds, clinicians and successful entrepreneurs originated from Bangladesh.</p>
            </div>
        </div>
    );
};

export default AboutUs;