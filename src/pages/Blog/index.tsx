import { useContext } from "react";
import { Profile } from "./components/Profile";
import { PostsContext } from "../../contexts/PostsContext";
import { PublicationsContainer, TextPublication } from "./styled";
import { BoxPost } from "./components/BoxPost";
import { SearchPost } from "./components/SearchPost";

export function Blog() {

  const { total_count } = useContext(PostsContext);

  return (
    <>
      <Profile />

      <PublicationsContainer>
        <TextPublication>
          <h2>Publicações</h2>
          <span>{total_count} {total_count !== 1 ? 'publicações' : 'publicação'}</span>
        </TextPublication>
      </PublicationsContainer>

      <SearchPost />

      <BoxPost />

    </>
  )
}