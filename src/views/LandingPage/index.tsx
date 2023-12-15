import UserProfileCard from 'src/components/UserProfileCard';
import { userData } from 'src/utils/DummyData';

export const LandingPage = () => {
  return (
    <UserProfileCard
      imageSrc={userData.imageSrc}
      name={userData.name}
      bio={userData.bio}
      email={userData.email}
    />
  );
};
