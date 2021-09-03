import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "20px",
    flexGrow: 1,
    background: "#848484",
    margin: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  //   grid: {
  //     margin: "auto",
  //   },
}));

const Home = () => {
  const classes = useStyles();
  const [gridColSpan, setGridgridColSpan] = useState(12);
  const [gridRowSpan, setGridRowSpan] = useState("6");
  const [mediaArr, setMediaArr] = useState([]);
  const [mediaLen, setMediaLen] = useState([]);
  useEffect(() => {
    setMediaArr([1, 2]);
  }, []);
  useEffect(() => {
    setGridSpanValues(mediaArr.length);
  });
  const paperStyle = {
    height: gridRowSpan + "rem",
  };
  const changeMediaLength = (len) => {
    let t = [];
    for (let i = 1; i <= len; i++) {
      t.push(i);
    }
    setMediaArr(t);
  };
  const setGridSpanValues = (streamLength) => {
    switch (true) {
      case streamLength == 1:
        setGridgridColSpan(12);
        setGridRowSpan("24");
        break;
      case streamLength == 2:
        setGridgridColSpan(6);
        setGridRowSpan("24");
        break;
      case streamLength == 3:
        setGridgridColSpan(4);
        setGridRowSpan("24");
        break;
      case streamLength == 4:
        setGridgridColSpan(6);
        setGridRowSpan("12");
        break;
      case streamLength > 4 && streamLength < 7:
        setGridgridColSpan(4);
        setGridRowSpan("12");
        break;
      case streamLength > 6 && streamLength < 10:
        setGridgridColSpan(4);
        setGridRowSpan("8");
        break;
      case streamLength > 9 && streamLength < 13:
        setGridgridColSpan(3);
        setGridRowSpan("8");
        break;
      case streamLength > 12 && streamLength < 17:
        setGridgridColSpan(3);
        setGridRowSpan("6");
        break;
      default:
        setGridgridColSpan(3);
        setGridRowSpan("8");
    }
  };

  const remoteStreams = mediaArr.map((a) => (
    <Grid item xs={gridColSpan} className={classes.grid}>
      <Paper className={classes.paper} style={paperStyle}>
        video tile
      </Paper>
    </Grid>
  ));
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {remoteStreams}
      </Grid>
      <div style={{ marginTop: "20px" }}>
        {" "}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16].map(
          (n) => (
            <label>
              {n}
              <Radio
                checked={mediaLen == n}
                onChange={(e) => {
                  setMediaLen(e.target.value);
                  changeMediaLength(e.target.value);
                }}
                value={n}
                name="radio-button-demo"
                inputProps={{ "aria-label": "B" }}
              />{" "}
            </label>
          )
        )}{" "}
      </div>
    </div>
  );
};

export default Home;
