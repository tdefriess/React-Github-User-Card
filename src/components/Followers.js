import React from 'react';
import UserCard from './UserCard';

export default function Followers(props){
    // console.log(props.followerList);

    return (
        <>
            <div>
                {props.followerList.map(follower => {
                    return (
                        <UserCard profile={follower} />
                    )
                })}
            </div>
        </>
    )
}