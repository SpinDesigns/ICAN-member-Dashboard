import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("authToken");
      const storedUser = localStorage.getItem("userInfo");

      if (token) {
        setIsAuthenticated(true);
        if (storedUser) {
          setUserInfo(JSON.parse(storedUser));
        } else {
          try {
            const response = await axios.get(
              "https://ican-abeokuta-backend.onrender.com/api/v1/user/me",
              { headers: { Authorization: `Bearer ${token}` } }
            );
            setUserInfo(response.data); // Fix: Use setUserInfo instead of setUser
            localStorage.setItem("userInfo", JSON.stringify(response.data));
          } catch (error) {
            console.error("Error fetching user info:", error);
            setIsAuthenticated(false);
          }
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    fetchUserInfo();
  }, []);

  return { isAuthenticated, userInfo };
};

export default useAuth;
