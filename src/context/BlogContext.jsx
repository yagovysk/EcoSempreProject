import { createContext, useContext, useState } from "react";
import { useGetData } from "../helpers";

const BlogContext = createContext(null);

export function BlogProvider({ children, endpoint }) {
  const [posts, setPosts] = useState("");
  useGetData(endpoint, setPosts);

  return (
    <BlogContext.Provider value={{ posts, setPosts }}>
      {children}
    </BlogContext.Provider>
  );
}

export const useBlog = () => useContext(BlogContext);
