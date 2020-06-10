import React, { useState } from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  Box,
  isWidthUp,
  withWidth,
} from "@material-ui/core";
import { Waypoint } from "react-waypoint";
import useAxios from "axios-hooks";
import Axios from "axios";
import { Img } from "react-image";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .modalBackground {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease-in-out;
    background: black;
    width: 10rem;
    height: 10rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .modalShowing-true {
    opacity: 1;
    pointer-events: showing;
  }
`;

const IndexPage = (props) => {
  const [modalState, setModalState] = useState(false);
  const manageModalState = () => {
    setModalState(!modalState);
  };

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
            (tweet) =>
              tweet.entities.media !== undefined &&
              // G Dollaz,
              // does this logic need to go in the backend?
              !tweet.text.includes("RT") &&
              tweet.lang === "en"
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
    <StyledWrapper>
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
          // console.log("tweet: ", tweet);
          return tweet.entities.media.map((e, i) => (
            <Box
              component={GridListTile}
              border="2px solid black"
              p={0}
              key={`img-${i}`}
              cols={1}
              onClick={() => manageModalState()}
            >
              <Img width="100%" src={e.media_url_https} alt="placeholder" />
              <GridListTileBar
                title={tweet.text}
                subtitle="#hashtag #anotherHashtag"
              ></GridListTileBar>
            </Box>
          ));
        })}
      </Box>
      <Waypoint onEnter={() => console.log("you have reached the waypoint")} />
      <div className={`modalBackground modalShowing-${modalState}`}>
        i am the modal
      </div>
    </StyledWrapper>
  );
};

export default withWidth()(IndexPage);
