import me2 from '../img/me2.jpg';

function About() {
  return (
    <div id="about-container" className="flex justify-center content-center md:px-32 sm:px-16 px-8 mt-6">
      <div className="about flex flex-col">
        <p className="font-bold lg:text-5xl md:text-3xl sm:text-2xl text-2xl sm:my-2.5 my-1.5">
            About Me
        </p>
        <div className="flex md:flex-row flex-col lg:text-2xl md:text-xl text-base md:my-2.5 my-1.5 font-light">
          <center><img src={me2} className="m-6 rounded-md md:h-3/6 w-3/6 md:hidden" alt="about-me-img"></img></center>
          <p>
            I’m a student who is enthusiastic about tech and programming. I am currently studying Information Technology at Indian Institute of Information Technology, Allahabad. I grew up in Haridwar and did my schooling from Delhi Public School, Ranipur. I learned the basics of programming from school and then explored the Internet to expand my knowledge and understanding of various languages and concepts.
            <br/><br/>
            Other than that I’m a Sub-25 Speedcuber, Avid Gamer(mainly CS:GO & Valorant), Beginner Chess Player and TV Show Lover(including Anime :P)! A lot of my free time goes into coding, browsing Reddit, researching crypto or watching TV Shows.
            <br/><br/>
            With reference to programming, I’m experienced with HTML/CSS, Python, C/C++, JS/TS, NodeJS, Git, SQL, Bash.
            I love to explore and learn basics of new techologies be it Kubernetes and Docker or Smart Contracts on Ethereum.
            I'm a frequent open-source contributor to many projects and I open-source my own projects aswell.
            <br/><br/>
            You can see my projects and their corresponding links on the Projects page below.
          </p>
          <img src={me2} className="big-image m-6 rounded-md lg:h-3/6 md:h-1/6 sm:1/6 w-3/6 hidden md:block" alt="about-me-img"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
