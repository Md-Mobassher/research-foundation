import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeamMember = ({teamMember}) => {
    const {img, designation, interest, name, _id} = teamMember;
    const navigate = useNavigate();


    const handleDescription = (id) => {
        navigate(`/people/${id}`);
    }
    return ( 
        <div class="card  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body text-center">
                <h2 class="text-xl mb-2 font-semibold">{name}</h2>
                <p className='text-sm mb-2'>{designation}</p>
                <p className='text-sm'>{interest?.slice(0,40)} <button onClick={() => {handleDescription(_id)}} class="text-primary ">Read More...</button></p>
         
            </div>
        </div>
    );
};

export default TeamMember;