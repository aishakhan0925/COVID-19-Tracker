import React from "react";
import style from "./Card.module.css";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
const CardData = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return `...Loading`;
  }
  return (
    <div className={style.container}>
      <Grid container spacing={5} marginBottom="4" justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(style.card, style.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number Of Active Cases</Typography>
          </CardContent>
        </Grid>
        {/* ==== */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(style.card, style.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoverd
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number Of Active Cases</Typography>
          </CardContent>
        </Grid>
        {/* === */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(style.card, style.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number Of Active Cases</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default CardData;
