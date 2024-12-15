import { NavLink, useParams } from "react-router-dom";
import { PostContainer, PostHeader, PostHeaderLinks, PostInfo } from "./styled";
import { HiChevronLeft } from "react-icons/hi";
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaComment,
  FaGithub,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { userLogin, type Post } from "../../contexts/PostsContext";
import { dateFormat } from "../../utils/formatter";
import { PostContent } from "./components/PostContent";

export function Post() {
  const { repo, n } = useParams();

  const [post, setPost] = useState({} as Post);

  const getPost = async () => {
    try {
      const response = await api.get(`/repos/${userLogin}/${repo}/issues/${n}`);

      setPost(response.data);
    } catch {
      console.log("Erro na requisição individual do Post");
    }
  };

  useEffect(() => {
    getPost();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PostContainer>
      <PostHeader>
        <PostHeaderLinks>
          <NavLink to={"/"} title="Voltar">
            <HiChevronLeft />
            <span>VOLTAR</span>
          </NavLink>

          <NavLink to={post.html_url} title="Ver no GitHub" target="_blank">
            <span>VER NO GITHUB</span>
            <FaArrowUpRightFromSquare />
          </NavLink>
        </PostHeaderLinks>

        <h2>{post.title}</h2>

        <PostInfo>
          <div>
            <FaGithub size={18} />
            <span>{post.user ? post.user.login : "Carregando..."}</span>
          </div>
          <div>
            <FaCalendarDay size={18} />
            <span>
              {post.created_at ? dateFormat(post.created_at) : "Carregando..."}
            </span>
          </div>
          <div>
            <FaComment size={18} />
            <span>
              {post.comments ? post.comments : "0"}
              &nbsp;
              {post.comments === 1 ? "comentário" : "comentários"}
            </span>
          </div>
        </PostInfo>
      </PostHeader>

      <PostContent post={post} />
      
    </PostContainer>
  );
}
