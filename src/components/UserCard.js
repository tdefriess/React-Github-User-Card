import React from 'react';

export default function UserCard(props){
    // console.log(props);

    return (
        <>
            <div>
                <h3>{props.profile.name}</h3>
                <img src={`${props.profile.avatar_url}`} alt={`A profile of ${props.profile.name}`} />
                <p>{props.profile.login}</p>                
            </div>
        </>
    )
}