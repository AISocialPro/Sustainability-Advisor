import React from 'react';
import ProfileStats from '../components/profile/ProfileStats';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { profile } = useUser();

  if (!profile) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
      <ProfileStats profile={profile} />
    </div>
  );
};

export default Profile;