import './App.css';
import ksu_photo from './content/ksu_photo.jpg'
import headshot from './content/headshot.jpeg'

function App() {
  return (
    <div className="App">
      <div class="body">
        <div class="left">
          <img class="photo" src={headshot}  alt="headshot" />
          <img class="photo" src={ksu_photo} alt="ksu photo" />
        </div>
        <div class="personalInfo">
          <h3>Jeffrey Cain</h3>
          <h1>Software Developer</h1>
          <p>
            Hello, I am Jeffrey Cain! I have been a Full Stack Software Developer since 2019 with a majority of my work experience focused on Web Development and modernizing legacy applications. I've used various frontend technologies including React, JQuery, Typescript, Next.js as well as basic javascript, while on the backend I have use primarily PHP and MySql for database management.
          </p>
          <p>
            I played in the Kansas State University Marching Band for 4 years, between 2015 and 2019 and am a big KSU sports fan. I played in band for the Football, Mens' Basketball, Womens' Basketball and Womens' Volleyball programs during my time there. I still keep up with how these programs are doing, with some of my favorite experiences being at #14 KSU v #5 Alabama in the Sugar Bowl (2022) and #9 KSU v #16 UMBC in the round of 32 for the NCAA tournament (2018).
          </p>
          <p>
            A few of my other hobbies include reading One Piece and Brandon Sanderson novels; playing trombone in various community bands; and playing video games, my favorite being Stardew Valley with my wife, Betty Cain.
          </p>
        </div>
      </div>
      <div class="footer">
          <p>jeffjcain@gmail.com</p>
          <p><a href="https://github.com/jeffreycain">Github</a></p>
          <p><a href="https://www.linkedin.com/in/jeffrey-cain/">LinkedIn</a></p>
          <p>Resume (add link)</p>
      </div>
    </div>
  );
}

export default App;
