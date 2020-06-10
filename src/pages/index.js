import React from "react";
import {
  GridList,
  GridListTile,
  Box,
  isWidthUp,
  withWidth,
} from "@material-ui/core";
import { Waypoint } from "react-waypoint";
import useAxios from "axios-hooks";
import Axios from "axios";
import { Img } from "react-image";

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
          let tweets = data.data.statuses.filter(
            (tweet) => tweet.entities.media !== undefined
          );

          return tweets;
        },
      ],
    },
    { useCache: false }
  );

  console.log("response: ", response);
  if (loading) return <div>loading..</div>;
  return (
    <>
      <Box
        component={GridList}
        style={{ padding: "40px" }}
        cellHeight={400}
        cols={getGridListCols()}
        width="100vw"
        maxWidth="100vw"
      >
        {/* Mapping through tweet objects */}
        {data.map((tweet) => {
          console.log("tweet: ", tweet);
          return tweet.entities.media.map((e, i) => (
            <GridListTile key={`img-${i}`} cols={1}>
              <Img src={e.media_url_https} alt="placeholder" />
            </GridListTile>
          ));
        })}

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
