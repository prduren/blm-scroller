import React from "react";
import { GridList, GridListTile } from "@material-ui/core";

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
