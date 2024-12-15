import { useContext } from "react";
import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
} from "./styled";
import { FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from "react-icons/fa6";
import { PostsContext } from "../../../../contexts/PostsContext";
import { numberFormat } from "../../../../utils/formatter";

export function Profile() {
  const { user } = useContext(PostsContext);

  return (
    <ProfileContainer>
      <img src={user?.avatar_url} alt="" />
      <ProfileContent>
        <ProfileHeader>
          <h1>{user?.name}</h1>
          <a href={user?.html_url} target="_blank">
            GITHUB
            <FaArrowUpRightFromSquare size={12} />
          </a>
        </ProfileHeader>
        
        <p>
          {user?.bio}
        </p>

        <ProfileInfo>
          <div>
            <FaGithub size={18} />
            <span>{user?.login}</span>
          </div>
          <div>
            <FaBuilding size={18} />
            <span>{user?.company}</span>
          </div>
          <div>
            <FaUserGroup size={18} />
            <span>
              {user.followers ? numberFormat(user.followers) : 0}
              {user?.followers !== 1
                ? " seguidores"
                : " seguidor"}
            </span>
          </div>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  );
}
