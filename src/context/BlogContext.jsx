import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/posts";

const BlogContext = createContext(null);

export function BlogProvider({ children, endpoint }) {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await api.get(endpoint);
        setPosts(response.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }

    getPosts();
  }, []);

  return (
    <BlogContext.Provider value={{ posts, setPosts }}>
      {children}
    </BlogContext.Provider>
  );
}

export const useBlog = () => useContext(BlogContext);
