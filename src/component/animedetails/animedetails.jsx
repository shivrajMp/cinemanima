import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchApiAnimeData } from "../../action/animeAction";
import "./animedetails.css";
import ContentLoader, { List } from "react-content-loader";
import TrailerEmbed from "../embedTrailer/trailerembed";
const CardImage = styled.img`
  height: 25rem !important;
`;

const StyledDetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 50%;
  align-items: center;
  /* width: 100%; */
  margin: 10px;
  background-color: #222f4c8a;
  border-radius: 3px;
  width: fit-content;
  padding: 20px;
  column-gap: 20px;
  row-gap: 20px;
`;

const DetailsDiv = styled.div`
  /* padding: 20px; */
  #title {
    font-size: xx-large;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: bolder;
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
  useEffect(() => {
    console.log(selectedanime);
  }, [selectedanime]);

  useEffect(() => {
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
        <StyledDetailContainer>
          {" "}
          <div class="image-container">
            {isLoading ? (
              <>
                <CardContentLoader style={{ padding: "20px" }} />
              </>
            ) : (
              <CardImage
                src={selectedanime?.images?.webp?.image_url}
                loading="lazy"
                alt="Image"
              />
            )}
          </div>
          <DetailsDiv>
            <p>
              {selectedanime?.type} {selectedanime?.rating}
            </p>

            <h1 id="title">{selectedanime?.title_english}</h1>
            <TrailerEmbed embedUrl={selectedanime?.trailer?.embed_url}></TrailerEmbed>
          </DetailsDiv>
          {/* <div class="image-container"></div>
      <CardImage
        src={selectedanime?.images?.webp?.large_image_url}
        loading="lazy"
        alt="Image"
      /> */}
        </StyledDetailContainer>
      </div>
      <ChildDetails>
        <p>{selectedanime?.synopsis}</p>
      </ChildDetails>
    </div>
  );
}

export default AnimeDetails;
