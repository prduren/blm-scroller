import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { Waypoint } from "react-waypoint";
import useAxios from "axios-hooks";
import Axios from "axios";
import { Img } from "react-image";

const IndexPage = () => {
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
      <GridList style={{ padding: 24 }} cellHeight={300} cols={4}>
        {/* Mapping through tweet objects */}
        {data.map((tweet) => {
          console.log("tweet: ", tweet);
          return tweet.entities.media.map((e, i) => (
            <GridListTile key={`img-${i}`} cols={i % 2 === 0 ? 1 : 2}>
              <Img src={e.media_url_https} alt="placeholder" />
            </GridListTile>
          ));
        })}
      </GridList>
      <Waypoint onEnter={() => console.log("you have reached the waypoint")} />
    </>
  );
};

export default IndexPage;
