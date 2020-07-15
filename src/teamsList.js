import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import SortIcon from "@material-ui/icons/Sort";
import useTeams from "./useTeams";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function TeamsList() {
  const teams = useTeams();
  const classes = useStyles();

  const [sortByValue, setSortByValue] = useState(null);

  const toggleSort = () => setSortByValue((value) => !value);

  if (!teams) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <header className="List">
        <p>all about clubs</p>
        <IconButton onClick={toggleSort}>
          <SortIcon />
        </IconButton>
      </header>
      <main className="List">
        <List className={classes.root}>
          {teams
            .sort((a, b) =>
              !sortByValue ? a.name.localeCompare(b.name) : a.value - b.value
            )
            .map((team) => (
              <Link
                key={10000 + team.value}
                to={`/detailsview/${team.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={team.name} src={team.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={team.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {team.country}
                        </Typography>
                        {` - ${team.value} Millionen Euro`}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </Link>
            ))}
        </List>
      </main>
    </div>
  );
}

export default TeamsList;
