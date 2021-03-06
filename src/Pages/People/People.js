import React, { useEffect, useState } from 'react';
import TeamMember from './TeamMember';

const People = () => {
    const [teamMembers, setTeamMembers] = useState();

    useEffect(() => {
        fetch(`https://secret-dusk-46242.herokuapp.com/service`)
        .then(res => res.json())
        .then(data => setTeamMembers(data))
    } ,[])


    return (
        <div className='lg:my-12 my-8 lg:px-20 px-5'>
            <h2 className='text-3xl mb-2  font-semibold '>People</h2>
            <hr />
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 mt-6'>
                {
                    teamMembers?.map(teamMember => <TeamMember
                        key={teamMember._id}
                        teamMember={teamMember}
                    ></TeamMember>)
                }
            </div>

        </div>
    );
};

export default People;