import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { Waypoint } from "react-waypoint";
import useAxios from "axios-hooks";
import Axios from "axios";

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
  const [{ data, loading, error, response }] = useAxios(
    {
      method: "GET",
      url: "https://blm-scroller.herokuapp.com/api/feed",
      transformResponse: [
        ...Axios.defaults.transformResponse,
        (data) => {
          let images = [];

          let tweets = data.data.statuses.filter(
            (tweet) => tweet.entities.media !== undefined
          );

          tweets.forEach((tweet) => {
            tweet.entities.media.forEach((obj) => {
              images.push(obj.media_url_https);
            });
          });
          return images;
        },
      ],
    },
    { useCache: false }
  );

  console.log("response: ", response);
  if (loading) return <div>loading..</div>;
  return (
    <div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>

      <GridList style={{ padding: 24 }} cellHeight={300} cols={4}>
        {data.map((url) => (
          <GridListTile key={`img-${url}`} cols={1}>
            <img src={url} alt="placeholder" />
          </GridListTile>
        ))}

        {/* {testArray.map((tile, index) => (
          <GridListTile key={`img-${index}`} cols={1}>
            <img src={tile.image} alt="placeholder" />
          </GridListTile>
        ))} */}
      </GridList>
      <Waypoint onEnter={() => console.log("you have reached the waypoint")} />
    </div>
  );
};

export default IndexPage;
