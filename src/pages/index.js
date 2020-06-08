import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { Waypoint } from "react-waypoint";

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
      <GridList style={{ padding: 24 }} cellHeight={300} cols={4}>
        {testArray.map((tile, index) => (
          <GridListTile key={`img-${index}`} cols={1}>
            <img src={tile.image} alt="placeholder" />
          </GridListTile>
        ))}
      </GridList>
      <Waypoint onEnter={() => console.log("you have reached the waypoint")} />
    </div>
  );
};

export default IndexPage;
