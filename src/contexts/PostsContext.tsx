import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface UserProfile extends User {
  id: number;
  name: string;
  bio: string;
  company: string;
  followers: number;
}

export interface Post {
  id: number;
  url: string;
  html_url: string;
  repository_url: string;
  number: number;
  title: string;
  user: User;
  comments: number;
  created_at: string;
  body: string;
}

interface PostsContextType {
  total_count: number;
  posts: Post[];
  user: UserProfile;
  fetchPosts: (query?: string) => Promise<void>;
}

export const userLogin = "kleversonmachado";

// eslint-disable-next-line react-refresh/only-export-components
export const PostsContext = createContext({} as PostsContextType)


export function PostsProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile>({} as UserProfile);
  const [state, setState] = useState<{posts: Post[]; totalCount: number }>({
    posts: [],
    totalCount: 0,
  });
  
  async function fetchUser() {
    try {
      const response = await api.get(`/users/${userLogin}`);

      setUser(response.data);
    } catch(error) {
      console.log("Erro ao buscar o usuário: ", error);
    }
  }

  async function fetchPosts(query?: string) {
    try {
      const response = await api.get('/search/issues', {
        params: {
          q: `user:${userLogin} ${query ? ' is:issue ' + query : ''}`
        }
      });

      setState({
        posts: response.data.items,
        totalCount: response.data.total_count,
      });
    } catch (error) {
      console.log("Erro ao buscar posts: ", error);
    }
  }

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{
      user,
      total_count: state.totalCount,
      posts: state.posts,
      fetchPosts,
    }}>
      {children}
    </PostsContext.Provider>
  )
}