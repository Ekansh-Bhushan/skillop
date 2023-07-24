import React from 'react'
import "./css/profile.css"

function Profile() {
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,700&display=swap" rel="stylesheet"/>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
    <link rel="stylesheet" href="styles.css"/>
    </>
  return (
    <main>
    <header>
        <nav>
            <div class = "left">Ekansh</div>
            <div class = "right">
                <ul>
                    <li><a href="#home"  class="active">Home</a></li>
                    <li><a href="#about" >About</a></li>
                    <li><a href="#services" >Services</a></li>
                    <li><a href="#skills" >Projects</a></li>
                    <li><a href="#contact" >Contact Me</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section class="firstSection">
        <div class="leftSection">
            <h5>HI, My name is </h5>
            <div class="purple"><h1 id="slide">Ekansh</h1></div>
            
            <h5>and I am a passionate</h5>
            
            <span id="element"></span>
            
            <p>I am 1<sup>st</sup> year student in DTU</p>
            <div class="home-sci">
                <a href="https://www.instagram.com/ekansh__bhushan/" target="_blank"><i class='bx bxl-instagram'></i></a>
                <a href="https://github.com/Ekansh-Bhushan" target="_blank"><i class='bx bxl-github' ></i></a>
                <a href="#"><i class='bx bxl-whatsapp' ></i></a>
                <a href="#" ><i class='bx bxl-linkedin' ></i></a>
                <a href="https://www.youtube.com/@ekansh4518/featured" target="_blank" ><i class='bx bxl-youtube' ></i></a>
            </div>
            <a href="#" class="btn-box">More About Me</a>
        </div>
        <div class="rightSection">
            <div class="box">
                <div class="content">
                    {/* <img src="photo.jpg" class="dp" alt=""/> */}
                </div>
        
            </div>
            
        </div>
    </section>
    </main>
  )
}

export default Profile
