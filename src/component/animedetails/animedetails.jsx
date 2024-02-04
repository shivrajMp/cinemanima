import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  clearDetailsActionCreator,
  fetchApiAnimeData,
} from "../../action/animeAction";
import "./animedetails.css";
import ContentLoader, { List } from "react-content-loader";
import TrailerEmbed from "../embedTrailer/trailerembed";
import { MyContext } from "../../context/context";
import { Chip, Skeleton } from "@mui/material";
import { YouTube } from "@mui/icons-material";

const CardImage = styled.img`
  height: 25rem !important;
`;

const StyledDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  height: 50%;
  align-items: start;
  min-width: 80%;
  max-width: 80%;
  background-color: #222f4c8a;
  border-radius: 3px;
  width: fit-content;
  padding: 20px;
  column-gap: 20px;
  row-gap: 20px;
  margin: 10px 0;
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
`;

const DetailsDiv = styled.div`
  /* padding: 20px; */
  flex: 0 0 65%; /* Flex-basis set to 70% */
  max-width: 65%;
  #title {
    font-size: xx-large;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: bolder;
  }
  @media (max-width: 1200px) {
    flex: 0 0 85%;
    max-width: 85%;
  }
`;
const ChildDetails = styled.div`
  padding: 10px;
`;
function AnimeDetails() {
  const location = useLocation();
  const { animeId } = useParams();
  const dispatch = useDispatch();
  const selectedanime = useSelector(
    (state) => state?.selectedAnime?.selectedanime?.data
  );
  const isLoading = useSelector((state) => state?.selectedAnime?.loading);
  const error = useSelector((state) => state?.selectedAnime?.error);
  const { onDetails, updateOnDetails } = useContext(MyContext);
  updateOnDetails(false);
  useEffect(() => {
    console.log(selectedanime);
  }, [selectedanime]);

  useEffect(() => {
    dispatch(clearDetailsActionCreator());
    dispatch(fetchApiAnimeData(animeId));
  }, [animeId]);
  const CardContentLoader = () => (
    <ContentLoader
      speed={3}
      width={300}
      height={"100%"}
      backgroundColor="#f3f3f3"
      foregroundColor="#dbdbdb"
    >
      <rect x="0" y="0" rx="8" ry="8" width="300" height="100%" />
    </ContentLoader>
  );
  const ListLoader = () => (
    <List
      style={{ margin: "10px" }}
      speed={3}
      backgroundColor="#f3f3f3"
      foregroundColor="#dbdbdb"
    ></List>
  );
  return (
    <div style={{ color: "white" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StyledDetailContainer class="container_loog">
          {" "}
          <div class="image-container">
            {isLoading ? (
              <>
                <CardContentLoader style={{ padding: "20px" }} />
              </>
            ) : (
              <>
                <CardImage
                  src={selectedanime?.images?.webp?.large_image_url}
                  loading="lazy"
                  alt="Image"
                />
                <br />
                {selectedanime?.trailer?.embed_url ? (
                  <TrailerEmbed
                    embedUrl={selectedanime?.trailer?.embed_url}
                  ></TrailerEmbed>
                ) : (
                  <>
                    <Skeleton variant="rectangular" width="100%" height={150} />
                  </>
                )}
              </>
            )}
          </div>
          {selectedanime ? (
            <DetailsDiv>
              <p>
                <b>
                  {selectedanime?.type}({selectedanime?.year})
                </b>{" "}
                {selectedanime?.rating}
              </p>

              <h1 id="title">{selectedanime?.title_english}</h1>
              <Chip
                color="success"
                size="small"
                variant="filled"
                label={selectedanime?.status}
                style={{ margin: "10px 0" }}
              />
              <div style={{ display: "flex", columnGap: "10px" }}>
                {selectedanime?.genres?.map((gener) => {
                  return (
                    <Chip
                      key={gener?.mal_id}
                      color="warning"
                      size="small"
                      variant="filled"
                      label={gener?.name}
                      style={{
                        margin: "10px 0",
                        borderRadius: "6px",
                        backgroundColor: "#ed6c02e3",
                      }}
                    />
                  );
                })}
              </div>
              {selectedanime?.themes?.length ? (
                <p>
                  <b>Theme</b>
                </p>
              ) : null}
              <div style={{ display: "flex", columnGap: "10px" }}>
                {selectedanime?.themes?.map((gener) => {
                  return (
                    <Chip
                      key={gener?.mal_id}
                      size="small"
                      variant="filled"
                      label={gener?.name}
                      style={{
                        margin: "10px 0",
                        borderRadius: "6px",
                        backgroundColor: "#4f378b",
                        color: "white",
                      }}
                    />
                  );
                })}
              </div>
              {selectedanime?.synopsis ? (
                <p>
                  <b>Synopsis</b>
                </p>
              ) : null}
              <p className="para_">{selectedanime?.synopsis}</p>
            </DetailsDiv>
          ) : (
            <div style={{ display: "flex", width: "60%" ,flexDirection:'column'}}>
              <Skeleton variant="text" width="70%" />
              <Skeleton variant="text" width="20%" height={100} />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="text" width="100%" height={100} />
              <Skeleton variant="text" width="20%" />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="100%" />
            </div>
          )}
          <div></div>
        </StyledDetailContainer>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <StyledDetailContainer style={{flexDirection:'column'}}>
          <div>
            {selectedanime?.background ? (
              <p>
                <b>Bckground</b>
              </p>
            ) : null}
            <p className="para_">{selectedanime?.background}</p>
          </div>
          <div>
            {selectedanime?.rank ? (
              <p>
                <b>Rank</b>
              </p>
            ) : null}
            <p className="para_">#{selectedanime?.rank}</p>
          </div>
        </StyledDetailContainer>
      </div>
    </div>
  );
}

export default AnimeDetails;
