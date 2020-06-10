import React from "react";
import { GridList, GridListTile, Box } from "@material-ui/core";
import { Waypoint } from "react-waypoint";
import useAxios from "axios-hooks";
import Axios from "axios";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

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

const IndexPage = (props) => {
  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 3;
    }

    if (isWidthUp("lg", props.width)) {
      return 3;
    }

    if (isWidthUp("md", props.width)) {
      return 2;
    }

    return 1;
  };

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
    <>
      {/* <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre> */}
      <Box
        component={GridList}
        style={{ padding: "40px" }}
        cellHeight={400}
        cols={getGridListCols()}
        width="100vw"
        maxWidth="100vw"
      >
        {data.map((url) => (
          <GridListTile key={`img-${url}`} cols={1}>
            <img
              style={{
                height: "100%",
                width: "100%",
                border: "5px solid black",
              }}
              src={url}
              alt="placeholder"
            />
          </GridListTile>
        ))}

        {/* {testArray.map((tile, index) => (
          <GridListTile key={`img-${index}`} cols={1}>
            <img src={tile.image} alt="placeholder" />
          </GridListTile>
        ))} */}
      </Box>
      <Waypoint onEnter={() => console.log("you have reached the waypoint")} />
    </>
  );
};

export default withWidth()(IndexPage);
