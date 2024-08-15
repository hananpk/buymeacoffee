import { useEffect, useState } from "react";

export const useCreators = () => {
  const [data, setData] = useState([]);

  const api = process.env.REACT_APP_ALL_CREATORS_SLIDER;

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch(`${api}?results=10`);
      const result = await response.json();
      const users = result.results.map((user) => ({
        ...user,
        isActive: Math.random() > 0.5,
      }));
      setData(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  return { data };
};
