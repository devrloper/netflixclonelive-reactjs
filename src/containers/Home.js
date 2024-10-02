import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Header from "../components/Header";
import Footer from "../components/Footer";
import mainpic from "../assets/Images/mainpic.jpg";
import netflixLogo from "../assets/Images/netflix-logo.png";
import Image1 from "../assets/Images/Image1.webp";
import Image2 from "../assets/Images/Image2.webp";
import Image3 from "../assets/Images/Image3.webp";
import Image4 from "../assets/Images/Image4.webp";
import Image5 from "../assets/Images/Image5.webp";
import Image6 from "../assets/Images/Image6.webp";
import Image7 from "../assets/Images/Image7.webp";
import Image8 from "../assets/Images/Image8.webp";
import Image9 from "../assets/Images/Image9.webp";
import Image10 from "../assets/Images/Image10.webp";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



// impot Image1 from "../assets/Images/Image1.webp";
// Importing slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  const [openSection, setOpenSection] = useState(null);
  const[count,setCount]=useState("Signup");
  const[count1,setCount1]=useState("Unlimited movies,TV shows, and more.");
  const[count2,setCount2]=useState("Starts at Rs 250. Cancel anytime.");
  const[count3,setCount3]=useState("Ready to watch? Enter your email to create or restart you membership");
  const[count4,setCount4]=useState(" Get Started");
  const[count5,setCount5]=useState("Trending Now");
  const[count6,setCount6]=useState("Pakistan");
  const[count7,setCount7]=useState(" Movies");
  const[count8,setCount8]=useState("Haseen Dilruba");
  const[count9,setCount9]=useState(" Close");
  const[count10,setCount10]=useState(" Get Started");
  const[count11,setCount11]=useState(" More reasons to join");
  const[count12,setCount12]=useState("Enjoy on your TV");
  const[count13,setCount13]=useState("Watch on Smart TVs, Playstation, Xbox, and more.");
  const[count14,setCount14]=useState("Download your shows to watch offline");
  const[count15,setCount15]=useState("Save your favorites and always have something to watch.");
  const[count16,setCount16]=useState("Watch everywhere");
  const[count17,setCount17]=useState("Stream on your phone, tablet, laptop, and TV.");
  const[count18,setCount18]=useState("Create profiles for kids");
  const[count19,setCount19]=useState("Send kids on adventures with their favorite characters.");
  const[count20,setCount20]=useState(" Frequently Asked Questions");
  const[count21,setCount21]=useState(" What is Netflix?");
  const[count22,setCount22]=useState("Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week.");
  const[count23,setCount23]=useState(" How much does Netflix cost?");
  const[count24,setCount24]=useState("Netflix offers several subscription plans to suit your needs, starting from a basic plan at Rs 250 per month. Each plan offers different features and streaming qualities.");
  const[count25,setCount25]=useState(" Where can I watch Netflix?");
  const[count26,setCount26]=useState(" Netflix is available on a wide range of devices including smart TVs, game consoles, smartphones, tablets, and computers. You can also watch on streaming devices like Roku and Amazon Fire TV.");
  const[count27,setCount27]=useState(" Can I cancel my subscription?");
  const[count28,setCount28]=useState(" Yes, you can cancel your Netflix subscription at any time. You will retain access to the service until the end of your billing cycle.");
  const[count29,setCount29]=useState(" What to watch on Netflix?");
  const[count30,setCount30]=useState(" Netflix offers a diverse range of content including original series, movies, documentaries, and international content. You can browse through various genres and find something new to watch.");
  const[count31,setCount31]=useState(" How can I contact Netflix support?");
  const[count32,setCount32]=useState("You can contact Netflix support through their website by visiting the Help Center. They offer various ways to get in touch including live chat and email support.");
  const[count33,setCount33]=useState("Get Started >");
  


  
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalContent, setModalContent] = useState('');

  const handleShow = (imageSrc, content) => {
    setModalImage(imageSrc);
    setModalContent(content);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  // Slider settings
  const sliderSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <button type="button" className="slick-prev"></button>,
    nextArrow: <button type="button" className="slick-next"></button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div>
     
      <div
        className="container-fluid container1"
        style={{
          backgroundImage: `url(${mainpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          position: "relative",
        }}
      >
        <div className="overlay"></div>
        <div className="row align-items-center">
          <div className="col-12 col-md-1 text-center"></div>
          <div className="col-12 col-md-3 mt-4 text-center">
            <img className="logo" src={netflixLogo} alt="Netflix Logo" />
          </div>
          <div className="col-12 col-md-3 text-center"></div>
          <div className="col-12 col-md-2 text-center"></div>
          <div className="col-12 col-md-3 text-center">
        <a href="/signup"> <button className="btn btn-danger mt-3 w-50 p-2">{count}</button></a>   
          </div>
        </div>

        <div className="container-fluid" style={{ overflow: "hidden" }}>
          <div
            className="row justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <h1 className="p1 ">{count1}</h1>
              <p className="p2">{count2}</p>
              <p className="p3">
              {count3}  
              </p>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="email"
                />
                <div className="input-group-append">
                  <button className="btn btn-danger btn1">
                   {count4} &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 ">
        <p className="text-white" style={{fontSize:'2.4rem'}}>{count5}</p>
        <div className="d-flex justify-content-between mb-4">
          <div className="dropdown ">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="countryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              {count6}
            </button>
            <ul className="dropdown-menu" aria-labelledby="countryDropdown">
              <li><a className="dropdown-item" href="#">Country 1</a></li>
              <li><a className="dropdown-item" href="#">Country 2</a></li>
            </ul>
          </div>
          <div className="dropdown ">
            <button className="btn btn-secondary dropdown-toggle btn2" type="button" id="genreDropdown" data-bs-toggle="dropdown" aria-expanded="false">
             {count7}
            </button>
            <ul className="dropdown-menu" aria-labelledby="genreDropdown">
              <li><a className="dropdown-item" href="#">Genre 1</a></li>
              <li><a className="dropdown-item" href="#">Genre 2</a></li>
            </ul>
          </div>
        </div>

       
        <Slider {...sliderSettings} className="slider">
        {[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10].map((image, index) => (
          <div key={index} onClick={() => handleShow(image, 'Some content here')} className="slider-item">
            {/* <img 
              src={image} 
              alt={`Movie ${index + 1}`} 
              style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            /> */}
            <img 
              src={image} 
              alt={`Movie ${index + 1}`} 
              style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            {/* <div className="slider-number">
              {index + 1}
            </div> */}
          </div>
        ))}
      </Slider>

      {/* Modal Component */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:'black' }} >
          <Modal.Title  style={{color:'white'}}>{count8}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'black'}}>
          <img src={modalImage} alt="Modal Image" style={{ width: '100%' }} />
          <p>{modalContent}</p>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'black'}}>
          <Button variant="danger" onClick={handleClose}>
           {count9}
          </Button>
          <Button variant="danger" onClick={handleClose}>
           {count10}
          </Button>
        </Modal.Footer >
      </Modal>
      </div>

      <div className="container-fluid mt-5">
        <p className="mt-5 text-white" style={{ fontSize: "2.4rem", fontWeight: 700, marginLeft: "15%" }}>
        {count11} 
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-2 col-md-6 col-sm-12 mb-3">
            <div className="card1 p-4 text-white">
              <p style={{ fontWeight: 900, fontSize: "1.5rem" }}>{count12}</p>
              <p>{count13}</p>
              <img src="path/to/tv-icon.png" alt="TV Icon" className="icon" />
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12 mb-3">
            <div className="card2 p-4 text-white">
              <p style={{ fontWeight: 900, fontSize: "1.5rem" }}>{count14}</p>
              <p>{count15}</p>
              <img src="path/to/download-icon.png" alt="Download Icon" className="icon" />
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12 mb-3">
            <div className="card3 p-4 text-white">
              <p style={{ fontWeight: 900, fontSize: "1.5rem" }}>{count16}</p>
              <p>{count17}</p>
              <img src="path/to/watch-icon.png" alt="Watch Icon" className="icon" />
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12 mb-3">
            <div className="card4 p-4 text-white">
              <p style={{ fontWeight: 900, fontSize: "1.5rem" }}>{count18}</p>
              <p> {count19}</p>
              <img src="path/to/kids-icon.png" alt="Kids Icon" className="icon" />
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid mt-5 ">
        <p
          className="mt-5 text-white"
          style={{ fontSize: "2.4rem", fontWeight: 700, marginLeft: "15%" }}
        >
        {count20} 
        </p>
        <div className="accordion" id="accordionExample">
          <div className="card mb-3" style={{ backgroundColor: 'black' }}>
            <div
              className="card-header d-flex justify-content-between align-items-center"
              id="heading0"
              onClick={() => toggleSection(0)} // Entire header is clickable
              style={{
                cursor: "pointer",
                backgroundColor: 'rgb(63,63,63)',
                width: "80%", // Adjusted width
                margin: "auto",
                transition: "background-color 0.3s ease",
                height: '10vh',
              }}
            >
              <p className="mb-0" style={{ color: 'white', fontSize: '2rem' }}>
               {count21}
              </p>
              <span className="toggle-icon" style={{ color: 'white', fontSize: '2rem' }}>
                {openSection === 0 ? "x" : "+"}
              </span>
            </div>

            <div
              id="collapse0"
              className={`collapse ${openSection === 0 ? "show" : ""}`}
              style={{
                backgroundColor: 'rgb(63,63,63)',
                color:'white',
                fontSize:'2rem',
                width: "80%", // Adjusted width to match the header
                margin: "auto",
                padding: "20px",
              }}
            >
              <div className="card-body text-white">
                {count22}
              </div>
            </div>
          </div>

          <div className="card mb-3" style={{ backgroundColor: 'black' }}>
            <div
              className="card-header d-flex justify-content-between align-items-center"
              id="heading1"
              onClick={() => toggleSection(1)}
              style={{
                cursor: "pointer",
                backgroundColor: 'rgb(63,63,63)',
                width: "80%",
                margin: "auto",
                transition: "background-color 0.3s ease",
                height: '10vh',
              }}
            >
              <p className="mb-0" style={{ color: 'white', fontSize: '2rem' }}>
                {count23}
              </p>
              <span className="toggle-icon" style={{ color: 'white', fontSize: '2rem' }}>
                {openSection === 1 ? "x" : "+"}
              </span>
            </div>

            <div
              id="collapse1"
              className={`collapse ${openSection === 1 ? "show" : ""}`}
              style={{
                backgroundColor: 'rgb(63,63,63)',
                color:'white',
                fontSize:'2rem',
                width: "80%",
                margin: "auto",
                padding: "20px",
              }}
            >
              <div className="card-body text-white">
              {count24}  
              </div>
            </div>
          </div>

          <div className="card mb-3" style={{ backgroundColor: 'black' }}>
            <div
              className="card-header d-flex justify-content-between align-items-center"
              id="heading2"
              onClick={() => toggleSection(2)}
              style={{
                cursor: "pointer",
                backgroundColor: 'rgb(63,63,63)',
                width: "80%",
                margin: "auto",
                transition: "background-color 0.3s ease",
                height: '10vh',
              }}
            >
              <p className="mb-0" style={{ color: 'white', fontSize: '2rem' }}>
               {count25}
              </p>
              <span className="toggle-icon" style={{ color: 'white', fontSize: '2rem' }}>
                {openSection === 2 ? "x" : "+"}
              </span>
            </div>

            <div
              id="collapse2"
              className={`collapse ${openSection === 2 ? "show" : ""}`}
              style={{
                backgroundColor: 'rgb(63,63,63)',
                color:'white',
                fontSize:'2rem',
                width: "80%",
                margin: "auto",
                padding: "20px",
              }}
            >
              <div className="card-body text-white">
              {count26} 
              </div>
            </div>
          </div>

          <div className="card mb-3" style={{ backgroundColor: 'black' }}>
            <div
              className="card-header d-flex justify-content-between align-items-center"
              id="heading3"
              onClick={() => toggleSection(3)}
              style={{
                cursor: "pointer",
                backgroundColor: 'rgb(63,63,63)',
                width: "80%",
                margin: "auto",
                transition: "background-color 0.3s ease",
                height: '10vh',
              }}
            >
              <p className="mb-0" style={{ color: 'white', fontSize: '2rem' }}>
              {count27} 
              </p>
              <span className="toggle-icon" style={{ color: 'white', fontSize: '2rem' }}>
                {openSection === 3 ? "x" : "+"}
              </span>
            </div>

            <div
              id="collapse3"
              className={`collapse ${openSection === 3 ? "show" : ""}`}
              style={{
                backgroundColor: 'rgb(63,63,63)',
                color:'white',
                fontSize:'2rem',
                width: "80%",
                margin: "auto",
                padding: "20px",
              }}
            >
              <div className="card-body text-white">
               {count28}
              </div>
            </div>
          </div>

          <div className="card mb-3" style={{ backgroundColor: 'black' }}>
            <div
              className="card-header d-flex justify-content-between align-items-center"
              id="heading4"
              onClick={() => toggleSection(4)}
              style={{
                cursor: "pointer",
                backgroundColor: 'rgb(63,63,63)',
                width: "80%",
                margin: "auto",
                transition: "background-color 0.3s ease",
                height: '10vh',
              }}
            >
              <p className="mb-0" style={{ color: 'white', fontSize: '2rem' }}>
              {count29} 
              </p>
              <span className="toggle-icon" style={{ color: 'white', fontSize: '2rem' }}>
                {openSection === 4 ? "x" : "+"}
              </span>
            </div>

            <div
              id="collapse4"
              className={`collapse ${openSection === 4 ? "show" : ""}`}
              style={{
                backgroundColor: 'rgb(63,63,63)',
                color:'white',
                fontSize:'2rem',
                width: "80%",
                margin: "auto",
                padding: "20px",
              }}
            >
              <div className="card-body text-white">
              {count30} 
              </div>
            </div>
          </div>

          <div className="card mb-3" style={{ backgroundColor: 'black' }}>
            <div
              className="card-header d-flex justify-content-between align-items-center"
              id="heading5"
              onClick={() => toggleSection(5)}
              style={{
                cursor: "pointer",
                backgroundColor: 'rgb(63,63,63)',
                width: "80%",
                margin: "auto",
                transition: "background-color 0.3s ease",
                height: '10vh',
              }}
            >
              <p className="mb-0" style={{ color: 'white', fontSize: '2rem' }}>
               {count31}
              </p>
              <span className="toggle-icon" style={{ color: 'white', fontSize: '2rem' }}>
                {openSection === 5 ? "x" : "+"}
              </span>
            </div>

            <div
              id="collapse5"
              className={`collapse ${openSection === 5 ? "show" : ""}`}
              style={{
                backgroundColor: 'rgb(63,63,63)',
                color:'white',
                fontSize:'2rem',
                width: "80%",
                margin: "auto",
                padding: "20px",
              }}
            >
              <div className="card-body text-white">
               {count32} 
              </div>
            </div>
          </div>
        </div>
        <input type="email" placeholder="Email" className="email" style={{marginLeft:'15%',}}></input>
        <button className="btn btn-danger btn1">{count33}</button>
      </div>

      <Footer />
    </div>
  );
}
