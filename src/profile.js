import React from 'react'
import "./css/.css"

function Profile() {
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,700&display=swap" rel="stylesheet"/>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
    <link rel="stylesheet" href="styles.css"/>
    </>
  return (
    <main class ="main">
    <header>
      <nav>
        <div class="left">Ekansh</div>
        <div class="right">
          <ul>
            <li><a href="#home" class="active">Home</a></li>
            <li><a href="#about">My Keypoints</a></li>
  
            <li><a href="#contact">Slots</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <section class="firstSection">
      <div class="leftSection">
        <h5>HI, My name is</h5>
        <div class="purple"><h1 id="slide">Ekansh</h1></div>
        {/* user.name */}
        <h5>and I am a passionate</h5>
        <span id="element"></span>
        <p>I am 1<sup>st</sup> year student in DTU</p>
        {/* here will be the info of the person */}
        {/* <div class="home-sci">
          <a href="#" ><i class='bx bxl-linkedin' ></i></a>
        </div> */}
        <a href="#" class="btn-box">Linkedin</a>
      </div>
      <div class="rightSection">
        <div class="box">
          <div class="content">
            <img src="https://pps.whatsapp.net/v/t61.24694-24/358220047_3539108243029399_3321016758607747344_n.jpg?ccb=11-4&oh=01_AdTeAUrKyHo28hh4cSpFL2V_vzEpCKgrfrmFbWtexvtT7w&oe=64CBC61A" class="dp" alt="" />
          </div>
        </div>
      </div>
    </section>


    <section>
      <div class="services" id="services">
          <div class="container">
              <h1 class="sub-title">My <span>Keypoints</span></h1>
              <div class="services-list">
                  <div>
 
                      <h2>About Me</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis qui error omnis, exercitationem dolor non nostrum asperiores odio sed mollitia. Beatae nisi tempore voluptatibus obcaecati temporibus, cumque 
                          incidunt quisquam a! Dicta facilis consequuntur animi atque doloremque. Laboriosam laudantium eveniet facilis explicabo.</p>
     
                  </div>
                  <div>
      
                      <h2>Education</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis qui error omnis, exercitationem dolor non nostrum asperiores odio sed mollitia. Beatae nisi tempore voluptatibus obcaecati temporibus, cumque 
                          incidunt quisquam a! Dicta facilis consequuntur animi atque doloremque. Laboriosam laudantium eveniet facilis explicabo.</p>
                    
                  </div>
                  <div>
        
                      <h2>Experience</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis qui error omnis, exercitationem dolor non nostrum asperiores odio sed mollitia. Beatae nisi tempore voluptatibus obcaecati temporibus, cumque 
                          incidunt quisquam a! Dicta facilis consequuntur animi atque doloremque. Laboriosam laudantium eveniet facilis explicabo.</p>
                    
                  </div>
              </div>
          </div>
      </div>
  </section>


  <section>
      <div class="services" id="services">
          <div class="container">
              <h1 class="sub-title"> <span></span></h1>
              <div class="services-list">
                  <div>
 
                      <h2>Past Experience</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis qui error omnis, exercitationem dolor non nostrum asperiores odio sed mollitia. Beatae nisi tempore voluptatibus obcaecati temporibus, cumque 
                          incidunt quisquam a! Dicta facilis consequuntur animi atque doloremque. Laboriosam laudantium eveniet facilis explicabo.</p>
     
                  </div>
                  <div>
      
                      <h2>Future Plans</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis qui error omnis, exercitationem dolor non nostrum asperiores odio sed mollitia. Beatae nisi tempore voluptatibus obcaecati temporibus, cumque 
                          incidunt quisquam a! Dicta facilis consequuntur animi atque doloremque. Laboriosam laudantium eveniet facilis explicabo.</p>
                    
                  </div>
                  <div>
        
                      <h2>Skills</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis qui error omnis, exercitationem dolor non nostrum asperiores odio sed mollitia. Beatae nisi tempore voluptatibus obcaecati temporibus, cumque 
                          incidunt quisquam a! Dicta facilis consequuntur animi atque doloremque. Laboriosam laudantium eveniet facilis explicabo.</p>
                    
                  </div>
              </div>
          </div>
      </div>
  </section>

  <section>
       <div class="services" id="services">
          <h1 class="sub-title"> <span>Slots</span></h1>
          <div class="services-list">
              {/* slots will be added here */}
          </div>
      </div>
  </section>
  </main>
  )
}

export default Profile
