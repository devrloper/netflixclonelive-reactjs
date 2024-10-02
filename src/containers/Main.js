// import React from 'react'
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import banner from "../assets/Images/banner.jpg"

// export default function Main() {
//   return (
//     <div>
//       <Header/>
//       <div className="video-container border body">
//       <video autoPlay muted loop id="myVideo">
//         <source src="videoplayback.mp4" type="video/mp4" />
//         Your browser does not support HTML5 video.
//       </video>
//       <img className='bannerimg' src={banner}></img>
//       <div className="content">
//         <h1 id="head1" style={{ color: "#e50914", fontWeight: "800" }}>
//           KRAVEN
//         </h1>
//         <p id="para1">
//           'A new trailer for "Kraven" reveals the complex relationship between
//           Nikolai and his son, exploring themes of hunting, legacy, and
//           identity.'
//         </p>
//         <button id="myBtn" >
//           More Info
//         </button>
//       </div>
//     </div>
      
//       <Footer/>
//     </div>
//   )
// }

import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import banner from "../assets/Images/banner.jpg";
import Row from '../components/Row'; // Make sure this is the correct path
import largemovie1 from "../assets/Images/large-movie1.jpg";
import largemovie2 from "../assets/Images/large-movie2.jpg";
import largemovie3 from "../assets/Images/large-movie3.jpg";
import largemovie4 from "../assets/Images/large-movie4.jpg";
import largemovie5 from "../assets/Images/large-movie5.jpg";
import largemovie6 from "../assets/Images/large-movie6.jpg";
import largemovie7 from "../assets/Images/large-movie7.jpg";
import largemovie8 from "../assets/Images/large-movie8.jpg";
import smallmovie1 from "../assets/Images/small-movie1.jpg";
import smallmovie2 from "../assets/Images/small-movie2.jpg";
import smallmovie3 from "../assets/Images/small-movie3.jpg";
import smallmovie4 from "../assets/Images/small-movie4.jpg";
import smallmovie5 from "../assets/Images/small-movie5.jpg";
import smallmovie6 from "../assets/Images/small-movie6.jpg";
import smallmovie7 from "../assets/Images/small-movie7.jpg";
import smallmovie8 from "../assets/Images/small-movie8.jpg";
import video from "../assets/Images/videoplayback.mp4";

const Main = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Header on top of the banner */}
      <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10 }}>
        <Header />
      </div>

      {/* Banner Section */}
      <div 
        className="banner"  
        style={{
          backgroundImage: `url(${banner})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '70vh', 
          position: 'relative',
          color: 'white',
        }}
      >
        <div 
          className="banner_contains" 
          style={{
            position: 'absolute', 
            bottom: '50px', 
            left: '20px',
            zIndex: 2
          }}
        >
          <h1 
            className="banner_title" 
            style={{
              fontSize: '3rem', 
              marginBottom: '20px',
              overflow: 'hidden'
            }}
          >
            MONEY Heist
          </h1>
          <div className="banner_buttons" style={{ display: 'flex', gap: '10px' }}>
            <button 
              className="banner_button" 
              style={{
                padding: '10px 20px', 
                fontSize: '1rem', 
                backgroundColor: '#e50914', 
                border: 'none', 
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Play
            </button>
            <button 
              className="banner_button" 
              style={{
                padding: '10px 20px', 
                fontSize: '1rem', 
                backgroundColor: 'rgba(109, 109, 110, 0.7)', 
                border: 'none', 
                color: 'white',
                cursor: 'pointer'
              }}
            >
              My List
            </button>
          </div>
          <div 
            className="banner_description" 
            style={{
              marginTop: '20px', 
              maxWidth: '500px', 
              fontSize: '1.2rem', 
              lineHeight: '1.4'
            }}
          >
            To carry out the heist of the century, a mysterious man called the Professor recruits a band of eight robbers who have a single characteristic...
          </div>
        </div>
        <div 
          className="banner--fadebottom" 
          style={{
            position: 'absolute', 
            bottom: 0, 
            width: '100%', 
            height: '100px', 
            backgroundImage: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8))',
            zIndex: 1
          }}
        ></div>
      </div>

      {/* Rows */}
      <Row 
        title="NETFLIX ORIGINALS" 
        imageUrls={[
          largemovie1, largemovie2, largemovie3, largemovie4, 
          largemovie5, largemovie6, largemovie7, largemovie8
        ]} 
        isLarge={true} 
      />
      <Row 
        title="Trending Now" 
        imageUrls={[
          smallmovie1, smallmovie2, smallmovie3, smallmovie4, 
          smallmovie5, smallmovie6, smallmovie7, smallmovie8
        ]} 
      />
      <Row 
        title="Top Rated" 
        imageUrls={[
          smallmovie1, smallmovie2, smallmovie3, smallmovie4, 
          smallmovie5, smallmovie6, smallmovie7, smallmovie8
        ]} 
      />
      <Row 
        title="Action Movies" 
        imageUrls={[
          smallmovie1, smallmovie2, smallmovie3, smallmovie4, 
          smallmovie5, smallmovie6, smallmovie7, smallmovie8
        ]} 
      />
     
      <Footer />
    </div>
  );
}

export default Main;
