import AnimeCard from "./card/animeCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchApiData } from "../../action/animeAction";
import styled from "styled-components";
import { Grid, Pagination, Paper } from "@mui/material";
import Footer from "../footer/footer";
import Header from "../header/header";

const StyledMoviesGrid = styled(Grid)`
  padding: 2%;
  position: relative;
  top:-25vh;
  height: 100%;
  /*display: flex;
column-gap: 5px; */
  /* position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8)// Adjust the overlay color and transparency
    color:#000; // Adjust the text color */
`;
// const StyledAnimeCard = styled(AnimeCard)`
//   /* :hover {
//     transform: scale(1.4);
//   } */
// `;
const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  /* position: sticky;
  bottom: 0; */
`;
const StyledPaper = styled(Paper)`
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Styledimage = styled.div`
  height: 55vh;
  position: relative;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.40),
      rgba(255, 255, 255, 1)
    ),
    url(${process.env.PUBLIC_URL}/201503.jpg) center/cover no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;

function Dashboard() {
  const dispatch = useDispatch();
  const animeList = useSelector((state) => state?.data?.anime);
  const isLoading = useSelector((state) => state?.data?.loading);
  const error = useSelector((state) => state?.data?.error);
  const [anime, setAnime] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    // Handle page change
    console.log(`Clicked page: ${value}`);
    setCurrentPage(value);
    dispatch(fetchApiData(value));
  };
  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  useEffect(() => {
    console.log(animeList, "list");
    setAnime(animeList?.data || []);
    setPagination(animeList?.pagination || {});
  }, [animeList]);
  return (
  
      !error ? (
        <>
          {/* <StyledPaper elevation={3} ></StyledPaper> */}
          <Styledimage></Styledimage>
         
          {/* <Header /> */}
          {/* <div key={"navbar"}></div> */}
          <StyledMoviesGrid container spacing={10} justifyContent="center">
            {anime.map((movie) => (
              <Grid item key={movie?.mal_id}>
                <AnimeCard
                  anime={movie}
                  key={movie?.mal_id}
                  isLoading={isLoading}
                />
              </Grid>
            ))}
          </StyledMoviesGrid>
          <StyledPagination
          size="small"
          color="primary"
            count={pagination?.last_visible_page || 0}
            page={currentPage || 1}
            showFirstButton
            showLastButton={!!pagination?.has_next_page}
            onChange={handleChange}
          />
          <Footer />
        </>
      ) : (
        <></>
      )
  );
}

export default Dashboard;
