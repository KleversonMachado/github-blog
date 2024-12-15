import { useContext } from "react";
import { PostsContext } from "../../../../contexts/PostsContext";
import { BoxPostContainer, BoxPostHeader, BoxPostStyle } from "./styled";
import { dateFormat } from "../../../../utils/formatter";

export function BoxPost() {
  const { posts } = useContext(PostsContext);

  return (
    <BoxPostContainer>
      {posts.map((post) => {

        const repositoryName = post.repository_url.split('/').pop();

        return (
          <BoxPostStyle key={post.id} to={`/post/${repositoryName}/${post.number}`} title={post.title}>
            <BoxPostHeader>
              <h2>{post.title}</h2>
              <span>
                {dateFormat(post.created_at)}
              </span>
            </BoxPostHeader>
            <p>{post.body}</p>
          </BoxPostStyle>
        )})}
    </BoxPostContainer>
  );
}
