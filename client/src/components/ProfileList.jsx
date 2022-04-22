import React from 'react';
import Profile from './Profile.jsx';

const ProfileList = ({profiles}) => {
  return (
    <React.Fragment>
      {profiles.map((profile) => {
        return (
          <div>
            <div>{profile.name}</div>
            <div>{profile.dateOfBirth}</div>
            <div>{profile.location}</div>
            <div>{profile.team}</div>
            <div>{profile.gender}</div>
            <div>{profile.sports}</div>
            <div>{profile.about}</div>
            <div>{profile.interests}</div>
            <div>{profile._v}</div>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default ProfileList;