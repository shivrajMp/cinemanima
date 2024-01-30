import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./errorpage.css";
function ErrorPage() {
  useEffect(() => {
    console.log("error");
  });
  return (
    // <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-between'}}>
    //   <div style={{color:'white' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
    //     <h1><p>Error 500</p></h1>
    //   </div>

    //   <img className="container"src={`${process.env.PUBLIC_URL}/NarutoPNGTransparentimage.png`} alt="Background" />
    // </div>
    <div class="container">
      <div class="left">
        <div>
          <div class="container2">
            <div class="firecracker red"></div>
            <div class="firecracker blue"></div>
            <div class="firecracker green"></div>
            <div class="firecracker yellow"></div>
          </div>
          <p id="header_">Error!!</p>
          <p id="header_1">Server jutsu failed! Rasengan needed.</p>
          <p>
            It seems that something unexpected happened on our server. Please
            try again later.
          </p>
        </div>
      </div>
      <div class="right">
        <img
          className="image_"
          src={`${process.env.PUBLIC_URL}/NarutoPNGTransparentimage.png`}
          alt="error"
        />
      </div>
    </div>
  );
}
export default ErrorPage;
