import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  GridList,
  GridListTile,
} from "@material-ui/core";

const testArray = [
  {
    image: "https://picsum.photos/200/300",
  },
  {
    image: "https://picsum.photos/200/300",
  },
  {
    image: "https://picsum.photos/200/300",
  },
  {
    image: "https://picsum.photos/200/300",
  },
  {
    image: "https://picsum.photos/200/300",
  },
  {
    image: "https://picsum.photos/200/300",
  },
  {
    image: "https://picsum.photos/200/300",
  },
  {
    image: "https://picsum.photos/200/300",
  },
  {
    image: "https://picsum.photos/200/300",
  },
  {
    image: "https://picsum.photos/200/300",
  },
  {
    image: "https://picsum.photos/200/300",
  },
  {
    image: "https://picsum.photos/200/300",
  },
];

const IndexPage = () => {
  return (
    <div>
      {/* header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            Black Lives Matter
          </Typography>
        </Toolbar>
      </AppBar>
      {/* content */}
      <GridList style={{ padding: 24 }} cellHeight={300} cols={4}>
        {testArray.map((tile) => (
          <GridListTile cols={1}>
            <img src={tile.image} alt="placeholder" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default IndexPage;
