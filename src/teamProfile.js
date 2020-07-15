import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useTeam from "./useTeam";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function TeamProfile() {
  const classes = useStyles();
  const history = useHistory();
  const { slug } = useParams();
  const team = useTeam(slug);
  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <header className="Profile">
        <IconButton onClick={goBack} className={classes.margin} size="medium">
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>
        <h3>{team ? team.name : "Loading..."}</h3>
      </header>
      {team ? (
        <main className="Profile">
          <div className="Profile">
            <h2>{team.country}</h2>
            <img alt={team.name} src={team.image} />
            <h2 className="hidden">{team.country}</h2>
          </div>
          <p>
            Der Club <b>{team.name}</b> aus {team.country} hat einen Wert von{" "}
            {team.value} Millionen Euro.
          </p>
          <p>
            <b>{team.name}</b> konnte bislang{" "}
            {team.european_titles === 0 ? "keine" : team.european_titles} Sieg
            {team.european_titles !== 1 ? "e" : ""} auf europäischer Ebene
            erreichen.
          </p>
        </main>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default TeamProfile;
