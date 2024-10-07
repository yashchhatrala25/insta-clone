import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import useGetUserProfileByUserName from "../../hooks/useGetUserProfileByUserName";
import { useParams } from "react-router-dom";
import ProfileHeaderSkeleton from "../../components/ProfileHeaderSkeleton/ProfileHeaderSkeleton";
import UserNotFound from "../../components/UserNotFound/UserNotFound";

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUserName(username);

  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) return <UserNotFound />;

  return (
    <Container maxW={"container.lg"} py={5}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}
      >
        {!isLoading && userProfile && <ProfileHeader />}
        {isLoading && <ProfileHeaderSkeleton />}
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        direction={"column"}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;
