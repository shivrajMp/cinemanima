import AnimeCard from "./card/animeCard";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import {
  clearDetailsActionCreator,
  fetchApiData,
} from "../../action/animeAction";
import styled from "styled-components";
import {
  Button,
  Grid,
  Input,
  Pagination,
  PaginationItem,
  Paper,
  Typography,
} from "@mui/material";
import "./dashboard.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useLocation, useNavigate } from "react-router-dom";
import { clickSound } from "../../utils/sound";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { MyContext } from "../../context/context";
import { Widgets } from "@mui/icons-material";
const StyledMoviesGrid = styled(Grid)`
  position: relative;
`;
const StyledMoviesGridParent = styled.div`
  padding: 2%;
  position: relative;
  /* top: 20vh; */
  z-index: 2;
  margin-top: 100px;
`;

const StyledPaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  flex-wrap: wrap;
  z-index: 2;
  margin: 10px 0;
`;
const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 2rem 0;
  /* .dark-mode-pagination .MuiPaginationItem-ellipsis,
  .light-mode-pagination .MuiPaginationItem-ellipsis {
    color: gray !important; 
  } */
  .MuiPaginationItem-ellipsis {
    color: white !important;
  }
`;
const GoToPageInput = styled(Input)`
  width: 50px;
  margin-right: 10px;
`;
const BackgroundImage = styled.div`
  img {
    position: fixed;
    pointer-events: none;
    left: 0;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 400px;
  }
  @media (max-width: 600px) {
    img {
      object-fit: cover; /* Adjust the height for smaller screens */
    }
  }
`;

const StyledImageEmpty = styled.div`
  margin: 0 20%;
  bottom: 100px;
  @media (max-width: 600px) {
   bottom: 40%
  }
`;
const BackgroundImage1 = styled.div`
  img {
    position: fixed;
    pointer-events: none;
    left: 0;
    z-index: 3;

    top: 0;
    width: 100%;
    height: 400px;
  }
  @media (max-width: 600px) {
    img {
      object-fit: cover; /* Adjust the height for smaller screens */
    }
  }
`;
const ErrorMessage = styled(Typography)`
  color: red;
  margin-top: 5px;
`;
function Dashboard() {
  const dispatch = useDispatch();
  const animeList = useSelector((state) => state?.data?.anime);
  const isLoading = useSelector((state) => state?.data?.loading);
  const error = useSelector((state) => state?.data?.error);
  const [anime, setAnime] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [inputError, setInputError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentTopAnime, updateValue, onDetails, updateOnDetails } =
    useContext(MyContext);
  updateOnDetails(true);
  // const {currentTopAnime, updateValue } = useContext(MyContext);
  const handleChange = (event, value) => {
    // Handle page change
    localStorage.setItem("currentPage", value);
    setCurrentPage(value);
    setGoToPage(value);
    dispatch(clearDetailsActionCreator());
    dispatch(fetchApiData(value, "", {}, currentTopAnime));
    navigate(`/anime?page=${value}`, { replace: true });
  };
  const [goToPage, setGoToPage] = useState(1);

  const handleInputChange = (event) => {
    setGoToPage(event.target.value);
    setInputError(null);
  };
  useEffect(() => {
    if (error) navigate(`/anime/error-page`);
  }, [error]);
  const handleGoToClick = () => {
    clickSound.play();
    if (
      goToPage &&
      goToPage > 0 &&
      !isNaN(goToPage) &&
      goToPage <= pagination?.last_visible_page
    ) {
      const parsedPage = parseInt(goToPage, 10);
      handleChange(null, parsedPage);
    } else {
      setInputError("Invalid page number");
    }
  };
  useEffect(() => {
    const currentPage = parseInt(localStorage.getItem("currentPage")) || 1;
    setCurrentPage(currentPage);
    setGoToPage(currentPage);
    dispatch(clearDetailsActionCreator());
    dispatch(fetchApiData(currentPage, "", {}, currentTopAnime));
    navigate(`/anime?page=${currentPage}`, { replace: true });
  }, [dispatch]);

  useEffect(() => {
    setAnime(animeList?.data || []);
    setPagination(animeList?.pagination || {});
  }, [animeList]);
  return !error ? (
    <div>
      <div style={{ height: "60%" }}>
        <BackgroundImage>
          <img
            src={`${process.env.PUBLIC_URL}/A1.png`}
            alt="Background"
            loading="lazy"
          />
        </BackgroundImage>

        <BackgroundImage1>
          <img
            src={`${process.env.PUBLIC_URL}/a2.png`}
            alt="Background"
            loading="lazy"
          />
        </BackgroundImage1>
      </div>
      {/* <div key={"navbar"}></div> */}
      {anime?.length ? (
        <>
          <StyledMoviesGridParent>
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
          </StyledMoviesGridParent>
          <StyledPaginationContainer>
            <StyledPagination
              size="small"
              color="primary"
              count={pagination?.last_visible_page || 0}
              page={currentPage || 1}
              showFirstButton
              showLastButton={!!pagination?.has_next_page}
              onChange={handleChange}
              darkMode={true}
              style={{ color: "white" }}
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  style={{ color: "white" }}
                  // Add other props as needed
                />
              )}
            />

            <div>
              <GoToPageInput
                // type="number"
                placeholder="#0"
                value={goToPage}
                onChange={handleInputChange}
                error={Boolean(inputError)}
                style={{
                  color: "white",
                  background: "black",
                  borderRadius: "5px",
                  padding: "0 10px",
                }}
              />
              <Button variant="contained" onClick={handleGoToClick}>
                Go
              </Button>
            </div>
            {inputError && <ErrorMessage>{inputError}</ErrorMessage>}
          </StyledPaginationContainer>{" "}
        </>
      ) : (
        <StyledImageEmpty
          style={{
            zIndex: "10000" /* margin: 0px 20%; */,
            left: "0",

            right: "0",
            position: "absolute",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/no_data.png`}
            alt="Background"
            loading="lazy"
          />
        </StyledImageEmpty>
      )}
    </div>
  ) : (
    <>{navigate(`/anime/error-page`)}</>
  );
}

export default Dashboard;
