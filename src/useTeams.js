import { useState, useEffect } from "react";
import axios from "axios";

function useTeams() {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    const getTeams = async () => {
      try {
        const result = await axios.get(
          "https://public.allaboutapps.at/hiring/clubs.json"
        );
        setTeams(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error.response.data.errors);
      }
    };
    getTeams();
  }, []);

  return teams;
}

export default useTeams;
