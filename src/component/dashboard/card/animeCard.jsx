import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
// import styled from "styled-components";
import styled, { keyframes } from "styled-components";
import ContentLoader, { List } from "react-content-loader";
import { YouTube } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";


const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;
const CardContainer = styled.div`
  width: 12.5rem;
  height: 21.875rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  margin: 16px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  /* background-color:  background-color: rgba(255, 255, 255, 0.7);; */
  background: white;
  &:hover {
    animation: ${bounceAnimation} 2s infinite;
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }
`;
const zoomInAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }`;
const CardImage = styled.img`
  flex-grow: 1;
  width: 100%;
  height: 15.625rem; /* Set the desired height of the image */
  object-fit: cover; /* Ensure the image covers the entire container */
  /* transform-origin: left top;
  transition: transform 0.2s ease-out;
  transform: scaleX(0); */
`;

const CardContentDiv = styled.div`
  /* padding: 16px; */
  bottom: 0;
  width: 100%;
  /* margin: 10px; */
  /* margin:10px;
  left: -10px; */
  background-color: rgba(255, 255, 255, 0.7);
  transition: height 0.5s ease-in-out;
  height: 50px; /* Initial height of the text box */
  ${CardContainer}:hover & {
    margin-top: 10px;
    position: absolute;
    height: 100%; /* Expanded height on hover */
    cursor: default;
  }
`;

const CardTitle = styled.h5`
  color: #000000;
  /* margin-right:15px; */
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  margin: 0;
  margin-bottom: 8px;
  padding: 10px 10px 0px 10px;
  background-color: transparent;
`;

const CardText = styled.p(({ iconcolor, fontWeight }) => ({
  color: iconcolor || "#3d3d3d", // Set to 'inherit' by default
  display: "inline-block",
  fontWeight: fontWeight || "inherit",
  flexWrap: "wrap",
  margin: "0",
  fontSize: "14px",
}));

const StyledIconButton = styled(IconButton)`
  color: red !important;
  display: inline-block;

  padding: 0 !important;
  color: red;
  a {
    color: red !important;
  }
`;

const StyledInfo = styled.div`
  position: fixed;
  bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  column-gap: 5px;
  cursor: pointer;
  #moreinfo {
    color: blue;
  }
  svg {
    color: gray;
    font-size: 1rem;
    position: relative;
    top:7px;
  }
  a{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CardInfo = styled.span`
  display: flex;
  justify-content: start;
  column-gap: 5px;
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  /* align-items: center; */
`;
const CardContentLoader = () => (
  <ContentLoader
    speed={3}
    width={300}
    height={250}
    viewBox="0 0 300 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#dbdbdb"
  >
    <rect x="0" y="0" rx="8" ry="8" width="300" height="250" />
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
const AdditionalDetails = styled.div`
  margin: 10px;
  opacity: 0; /* Initially hidden */
  /* transition: opacity 0.3s ease-in-out; */

  ${CardContainer}:hover & {
    row-gap: 10px;
    opacity: 1; /* Visible on hover */
  }
`;
function AnimeCard({ anime, isLoading }) {
  // const classes = useStyles();
  const images = anime?.images;
  // useEffect(() => {
  //   console.log(anime, "anime");
  // }, [anime]);
  return (
    // <CardContainer variant="elevation" elevation={6}>
    //   <CardActionArea>
    //   <LazyLoad height={200} offset={100} once>
    //     <StyledCardMedia
    //       component="img"
    //       image={images?.webp?.large_image_url}
    //       alt={anime?.title_english}
    //     />
    //     </LazyLoad>
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {anime.title_english}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         ts
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </CardContainer>

    <CardContainer>
      {isLoading ? (
        <>
          <CardContentLoader />
          <ListLoader />
        </>
      ) : (
        <>
          {images?.webp?.large_image_url ? (
            <CardImage
              src={images?.webp?.large_image_url}
              loading="lazy"
              alt="Image"
            />
          ) : null}
          <CardContentDiv>
            <CardTitle>{anime?.title_english || anime?.title}</CardTitle>
            {/* <CardText>{anime.title_english}</CardText> */}
            <AdditionalDetails>
              {/* Add more details to show on hover */}
              <CardInfo>
                <CardText iconcolor="#000000" fontWeight={500}>
                {anime?.type}
                </CardText>
                <CardText>{anime?.year ? `(${anime?.year})`: null}</CardText>
              </CardInfo>
              <CardInfo>
                <CardText iconcolor="#000000" fontWeight={500}>
                  Trailer:{" "}
                </CardText>
                <StyledIconButton
                  color="primary"
                  href={anime?.trailer?.url}
                  target="_blank"
                >
                  <YouTube />
                </StyledIconButton>
              </CardInfo>
              <CardInfo>
                <CardText iconcolor="#000000" fontWeight={500}>
                  Source:{" "}
                </CardText>
                <CardText>{anime?.source}</CardText>
              </CardInfo>
              <CardInfo>
                <CardText iconcolor="#000000" fontWeight={500}>
                  Duration:{" "}
                </CardText>
                <CardText>{anime?.duration}</CardText>
              </CardInfo>
              <CardInfo>
                <CardText iconcolor="#000000" fontWeight={500}>
                  Rating:{" "}
                </CardText>
                <CardText>{anime?.rating}</CardText>
              </CardInfo>
              <CardInfo>
                <CardText iconcolor="#000000" fontWeight={500}>
                  Genres:{" "}
                </CardText>
                <CardText>
                  {anime?.genres && anime?.genres?.length
                    ? anime.genres?.map((genre) => genre?.name).join(", ")
                    : "-"}
                </CardText>
              </CardInfo>
              <CardInfo>
                <CardText iconcolor="#000000" fontWeight={500}>
                  Ratings:{" "}
                </CardText>
                {anime?.score ? (
                  <>
                    {anime.score + "/10"}
                    <StarIcon style={{ color: "#FFD700" }} />
                  </>
                ) : (
                  "-"
                )}
              </CardInfo>
              <StyledInfo>
                <Link
                  to={`/anime/${anime?.title_english || anime?.title}/${
                    anime?.mal_id
                  }`}
                >
                  <p id="moreinfo">More info</p>

                  <InfoIcon />
                </Link>
              </StyledInfo>
            </AdditionalDetails>
          </CardContentDiv>
        </>
      )}
    </CardContainer>
  );
}

export default AnimeCard;
