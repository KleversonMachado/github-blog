import { Post } from "../../../../contexts/PostsContext";
import { PostContentContainer } from "./styled";
import ReactMarkdown from 'react-markdown'

interface PostContentProps {
  post: Post;
}

export function PostContent({ post }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown>{post.body}</ReactMarkdown>
    </PostContentContainer>
  );
}
