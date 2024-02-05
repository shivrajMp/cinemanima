import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { Form, Field } from "react-final-form";
import { createBrowserHistory } from "history";
// import { useLocation, useNavigate } from "react-router-dom";
import {
  Autocomplete,
  Badge,
  Button,
  Drawer,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  SwipeableDrawer,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import {
  clearDetailsActionCreator,
  fetchApiData,
  fetchTotalAnimeApiData,
} from "../../action/animeAction";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";

import { clickDropdown, clickSound, clickCardSound } from "../../utils/sound";
import { MyContext } from "../../context/context";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledField = styled(Field)`
  margin: 10px !important;
`;

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100% !important", // Adjust this width as needed
  "& .MuiInputBase-input": {
    color: "white",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}) !important`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "100% !important",
      height: "auto !important",
      padding: theme.spacing(0, 0, 0, 0),
      // "&:focus": {
      //   width: "20ch !important",
      // },
    },
  },
  "& .MuiOutlinedInput-root": {
    padding: "0 !important",
    [theme.breakpoints.up("sm")]: {
      padding: "0 !important",
    },
  },
}));

const CinemanimaHeading = styled("h1")`
  font-family: "Indie Flower", cursive;
  font-size: 2rem;
  color: #ffcc00;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 0;
`;

const StyledButton = styled("button")`
  .MuiBadge-badge {
    background-color: #c54a00;
  }
  svg {
    color: white;
  }
`;
const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  #logo {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 50px;
      /* Add styles for larger screens */
    }
  }

  #logo:hover,
  img:hover,
  #text:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    /* Adjust styles for smaller screens */
    #logo {
      justify-content: start !important;
      flex-direction: column;
      align-items: start;
      img {
        height: 15px !important; /* Adjust the height for smaller screens */
      }
      #text {
        display: block;
        font-size: 15px;
      }
    }
  }
`;
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  zIndex: 1000,
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#0056b3" : "#007bff",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#0056b3",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function Header() {
  const animeList = useSelector((state) => state?.data?.anime?.data);
  const isLoading = useSelector((state) => state?.totalAnime?.loading);
  const { currentTopAnime, updateValue, onDetails, updateOnDetails } =
    React.useContext(MyContext);
  const dispatch = useDispatch();
  const move = function () {
    window.location.href = "/cinemanima";
  };

  const handleOptionClick = () => {
    // console.log(searchValue);
    // console.log(searchValue);
    clickSound.play();
    updateValue(false);
    console.log(searchValue, "searchValue");
    dispatch(clearDetailsActionCreator());
    dispatch(fetchApiData(1, searchValue, {}, false));
  };

  const [searchValue, setSearchValue] = React.useState("");
  const [filterValue, setFilterValue] = React.useState({});
  const [snackBarOpen, setSnackBarOpen] = React.useState(false);
  // const [topAnimeCheck, settopAnimeCheck] = React.useState(true);
  const currentPath = window.location.href;

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    clickSound.play();
    setDrawerOpen(open);
  };
  const handleCloseDrawer = () => {
    clickDropdown.play();
    setDrawerOpen(false);
  };

  const handleBackdropClick = (event) => {
    // clickDropdown.play()
    event.stopPropagation(); // Prevent click event from propagating to the parent elements
    event.preventDefault(); // Prevent default action of the event
  };

  const onSubmit = (values) => {
    clickCardSound.play();
    setFilterValue(values);
    updateValue(false);
    setSearchValue("");
    dispatch(fetchApiData(1, "", values, false));
    setDrawerOpen(false);
  };

  const ClearForm = () => {
    clickCardSound.play();
    clickDropdown.play();
    setDrawerOpen(false);
    setFilterValue({});
  };

  const handleChange = (event) => {
    updateValue(event.target.checked);
    ClearForm();
    dispatch(fetchApiData(1, "", {}, event.target.checked));
  };
  const handleCloseSelect = (input) => {
    input.onChange("");
  };

  const history = createBrowserHistory();
  const getComonent = (label, key, values) => {
    return (
      <StyledField name={key} style={{ margin: "10px !important" }}>
        {({ input }) => (
          <Box mb={2}>
            <InputLabel shrink={false}>{label}</InputLabel>
            <Select
              {...input}
              fullWidth
              displayEmpty
              sx={{
                height: 40, // Adjust the height as needed
                borderRadius: 0, // Remove rounded corners
              }}
              endAdornment={
                input.value && (
                  <IconButton
                    size="small"
                    edge="end"
                    onClick={() => handleCloseSelect(input)}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: 20,
                    }}
                  >
                    <CloseIcon
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "orange",
                      }}
                    />
                  </IconButton>
                )
              }
            >
              <MenuItem value="" disabled>
                Select an option
              </MenuItem>
              {values?.map((data) => {
                return (
                  <MenuItem value={data.key} key={data.key}>
                    {data.value}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
        )}
      </StyledField>
    );
  };
 const closeSnackbar =()=>{
  setSnackBarOpen(false)
  setSearchValue("");
 }
  return (
    <>
      <Snackbar
        open={snackBarOpen}
        autoHideDuration={3000}
        onClose={closeSnackbar}
        message="Not implemented !! (cinemanima)"
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
      />
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          zIndex: "5",
          backdropFilter: "blur(2px)",
          position: "sticky",
          top: "0px",
        }}
      >
        <AppBar
          position="sticky"
          style={{
            boxShadow: "none",
            background: "transparent",
            position: "sticky",
          }}
        >
          <StyledToolbar>
            <div id="logo" onClick={move}>
              <img
                src={`${process.env.PUBLIC_URL}/logo_.png`}
                alt="Logo"
                style={{ height: "40px", marginRight: "5px" }}
              />
              <CinemanimaHeading id="text">Cinemanima</CinemanimaHeading>
            </div>
            <div
              style={{
                display: "flex",
                columnGap: "10px",
                justifyContent: "end",
                width: "70%",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                {!onDetails && currentPath.includes("details") ? (
                  <Autocomplete
                    // style={{ width: "100%" }}
                    open
                    id="search-input"
                    freeSolo
                    options={
                      animeList?.length && animeList[0]?.url ? animeList : []
                    }
                    getOptionLabel={(option) => option?.title_english || ""}
                    renderOption={(props, option) => (
                      <li {...props}>
                        <img
                          src={option?.images?.jpg?.small_image_url}
                          alt={option?.year}
                          style={{ width: 24 }}
                        />
                        {option?.year} &nbsp;{option?.title_english}
                      </li>
                    )}
                    renderInput={(params) => (
                      <StyledTextField
                        {...params}
                        placeholder="Search…"
                        inputProps={{
                          ...params.inputProps,
                          "aria-label": "search",
                        }}
                      />
                    )}
                    onChange={(event, value) => {
                      console.log(value);
                      // history.push(`#/anime/details/${value?.title_english || value?.title}/${value?.mal_id}`)
                      if (value?.mal_id) {
                        setSnackBarOpen(true)
                      }
                      // window.location.assign(`cinemanimas/anime/details/${value?.title_english || value?.title}/${value?.mal_id}`)
                      // window.location.reload();
                    }}
                    onInputChange={(event, newInputValue) => {
                      if (
                        searchValue &&
                        (!event?.target?.value || event?.target?.value == "")
                      ) {
                        dispatch(fetchApiData(1, "", {}, currentTopAnime));
                      }
                      setSearchValue(event.target.value);
                    }}
                  />
                ) : (
                  // <></>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    value={searchValue}
                    onChange={(e) => {
                      if (
                        searchValue &&
                        (!e?.target?.value || e?.target?.value == "")
                      ) {
                        dispatch(fetchApiData(1, "", {}, currentTopAnime));
                      }
                      setSearchValue(e.target.value);
                    }}
                  />
                )}
              </Search>
              <Button
                variant="contained"
                onClick={handleOptionClick}
                style={{ minWidth: "30px" }}
              >
                Go
              </Button>
            </div>
          </StyledToolbar>
        </AppBar>
      </Box>
      {onDetails && !currentPath.includes("details") ? (
        <>
          <div className="filters" style={{ marginRight: "10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "5px",
              }}
            >
              <Typography
                style={{
                  display: "inline",
                  backdropFilter: "blur(2px)",
                  color: "white",
                  textShadow: "0px 5px 5px black",
                }}
              >
                Top Anime{" "}
              </Typography>{" "}
              <IOSSwitch
                defaultChecked
                label="Top Anime"
                checked={currentTopAnime}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />{" "}
            </div>
            <StyledButton
              className="floating-icon1"
              onClick={toggleDrawer(true)}
            >
              <Badge
                badgeContent={Object.values(filterValue)?.length}
                color="primary"
              >
                <FilterAltOutlinedIcon color="action" />
              </Badge>
            </StyledButton>
          </div>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            ModalProps={{
              BackdropProps: {
                onClick: handleBackdropClick,
              },
            }}
          >
            <Box sx={{ width: 250, padding: "16px" }}>
              <Form
                initialValues={filterValue}
                style={{}}
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: "600 !important",
                          fontSize: "20px",
                        }}
                      >
                        Filter
                      </Typography>
                      {/* <IconButton
                    size="small"
                    edge="end"
                    onClick={() => handleCloseDrawer()}
                  >
                    <CloseIcon
                      style={{
                        fontSize: "24px",
                        fontWeight: "500",
                        color: "orange",
                      }}
                    />
                  </IconButton> */}
                    </div>
                    {getComonent("Type", "type", [
                      { key: "tv", value: "Rv", index: 0 },
                      { key: "movie", value: "Movie", index: 1 },
                      { key: "ova", value: "Ova", index: 2 },
                      { key: "special", value: "Special", index: 3 },
                      { key: "ona", value: "Ona", index: 4 },
                      { key: "music", value: "Music", index: 5 },
                      { key: "cm", value: "Cm", index: 6 },
                      { key: "pv", value: "Pv", index: 7 },
                      { key: "tv_special", value: "Tv Special", index: 8 },
                    ])}
                    {getComonent("Status", "status", [
                      { key: "airing", value: "Airing", index: 0 },
                      { key: "upcoming", value: "Upcoming", index: 1 },
                      { key: "complete", value: "Complete", index: 2 },
                    ])}
                    {getComonent("Rating", "rating", [
                      { key: "g", value: "G - All Ages", index: 0 },
                      { key: "pg", value: "PG - Children", index: 1 },
                      {
                        key: "pg13",
                        value: "PG-13 - Teens 13 or older",
                        index: 2,
                      },
                      {
                        key: "r17",
                        value: "R - 17+ (violence & profanity)",
                        index: 3,
                      },
                    ])}

                    {getComonent("Order By", "order_by", [
                      { key: "start_date", value: "Start Date", index: 0 },
                      { key: "end_date", value: "End Date", index: 1 },
                      { key: "episodes", value: "Episodes", index: 2 },
                      { key: "score", value: "Score", index: 3 },
                      { key: "scored_by", value: "Scored By", index: 4 },
                      { key: "rank", value: "Rank", index: 5 },
                      { key: "popularity", value: "Popularity", index: 6 },
                      { key: "members", value: "Members", index: 7 },
                      { key: "favorites", value: "Favorites", index: 8 },
                    ])}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button variant="outlined" onClick={ClearForm}>
                        clear
                      </Button>
                      <Button type="submit" variant="contained">
                        Submit
                      </Button>
                    </div>
                  </form>
                )}
              />
            </Box>
          </Drawer>{" "}
        </>
      ) : null}
    </>
  );
}

export default Header;

// todolist
// apilist
// timerlis
// usetranitionj
