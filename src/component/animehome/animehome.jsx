// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import SearchIcon from "@mui/icons-material/Search";
// import { useHistory } from "react-router-dom";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(TextField)(({ theme }) => ({
//   color: "inherit",
//   width: "100%",
// }));

// function AnimeHome() {
//   const handleOptionClick = (value) => {
//     if (value) {
//     }
//   };

//   const options = ["Option 1", "Option 2", "Option 3"];

//   return (
//     <Search>
//       <SearchIconWrapper>
//         <SearchIcon />
//       </SearchIconWrapper>
//       <Autocomplete
//         id="search-input"
//         freeSolo
//         options={options}
//         renderInput={(params) => (
//           <StyledInputBase
//             {...params}
//             placeholder="Search…"
//             inputProps={{ ...params.inputProps, "aria-label": "search" }}
//           />
//         )}
//         onChange={(event, value) => handleOptionClick(value)}
//       />
//     </Search>
//   );
// }

// export default AnimeHome;
