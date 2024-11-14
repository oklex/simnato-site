import { useState, useEffect } from "react";

const ROLES = [
  "Tactical Advisor",
  "Logistics Aide",
  "CEO of MUN",
  "CEO of Stickers",
  "Principal Theorist",
  "Club Advisor",
  "Club Representative",
  "Crisis Staff",
  "MUN Nomad",
  "RichMUN Advsior",
];

const useAmberRole = () => {
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    const localStorageKey = "selectedString";

    // Check if a string already exists in localStorage
    const storedString = localStorage.getItem(localStorageKey);
    if (storedString) {
      setSelectedRole(storedString);
    } else {
      const randomString = ROLES[Math.floor(Math.random() * ROLES.length)];
      localStorage.setItem(localStorageKey, randomString);
      setSelectedRole(randomString);
    }
  }, []); 

  return selectedRole;
};

export default useAmberRole;
