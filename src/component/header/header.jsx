import {
  AppBar,
  Toolbar,
  Typography,
 
} from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";
const StyledHeader = styled.div`
  /* background-color: aliceblue; */
  height: 50px;
  width: 100%;
  /* background: url(${process.env.PUBLIC_URL}/201503.jpg); */
  background: transparent;
  /* background-size: cover; */
`;
const CinemanimaHeading = styled.h1`
  font-family: "Indie Flower", cursive;
  font-size: 2rem;
  color: #ffcc00;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 0;
`;
// const StyledToolbar = styled(Toolbar)`
//  display: flex;
//  align-items: center;
//  justify-content: space-between;
//  #logo{
//   display: flex;
//   justify-content: center;
//   align-items: center;
//  }
// `;
const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  #logo {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 50px;
      /* Add styles for larger screens */
    }
  }

  @media (max-width: 600px) {
    /* Adjust styles for smaller screens */
    #logo {
      img {
        height: 25px; /* Adjust the height for smaller screens */
      }
    }

    ${CinemanimaHeading} {
      font-size: 1.3rem; /* Adjust the font size for smaller screens */
    }
  }
`;
function Header(prop) {
  return (
    <AppBar
      position="sticky"
      style={{ zIndex: 5, boxShadow: "none", background: "transparent" }}
    >
      <StyledHeader>
        <StyledToolbar>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
          <div id="logo">
            <img
            src={`${process.env.PUBLIC_URL}/logo_.png`}
              alt="Logo"
              style={{ height: "40px" ,marginRight:'5px'}}
            />
            <CinemanimaHeading>Cinemanima</CinemanimaHeading>
          </div>
          {/* </Typography> */}
          {/* <Typography>menu/Items </Typography> */}
        </StyledToolbar>
      </StyledHeader>
    </AppBar>
  );
}
export default Header;
