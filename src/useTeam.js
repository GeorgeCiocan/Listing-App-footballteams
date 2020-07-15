import { useEffect, useState } from "react";
import useTeams from "./useTeams";

function useTeam(slug) {
  const teams = useTeams();
  const [team, setTeam] = useState(null);
  useEffect(() => {
    const findTeam = (slug) =>
      teams.find(
        (team) => team.name.replace(/\s+/g, "-").toLowerCase() === slug
      );
    if (teams) {
      const result = findTeam(slug);
      setTeam(result);
    }
  }, [teams, slug]);
  return team;
}

export default useTeam;
