import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
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
const CinemanimaHeading = styled("h1")`
  font-family: "Indie Flower", cursive;
  font-size: 2rem;
  color: #ffcc00;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 0;
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
      img {
        height: 25px; /* Adjust the height for smaller screens */
      }
      #text {
        display: none;
      }
    }
  }
`;

function Header(prop) {
  const move = function () {
    window.location.href = "/";
  };
  const history = createBrowserHistory();
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ zIndex: "5", backdropFilter: "blur(2px)" }}
    >
      <AppBar
        position="sticky"
        style={{ boxShadow: "none", background: "transparent" }}
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
