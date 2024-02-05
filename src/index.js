import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/movies.store";
import { MyContextProvider } from "./context/context";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MyContextProvider>
          <div className="main-container">
            <Header className="head_content" />
            <div className="content">
              <App />
            </div>
            <Footer className="foot_content" />
          </div>
        </MyContextProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();