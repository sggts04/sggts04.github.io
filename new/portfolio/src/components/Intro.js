import me from '../img/me_x2.jpg';
import github from '../img/github.svg';
import twitter from '../img/twitter.svg';
import youtube from '../img/youtube.svg';
import instagram from '../img/instagram.svg';
import gmail from '../img/gmail.svg';

function Intro() {
  return (
    <div className="intro-container flex justify-center content-center min-h-screen text-center">
      <div className="main flex sm:flex-row flex-col items-center justify-center">
        <img src={me} className="me rounded-full sm:w-1/5 w-1/3 border-2 border-indigo-800 md:mx-12 sm:mx-6 mx-2" alt="me" />
        <div className="text flex flex-col md:mx-12 sm:mx-6 mx-3 sm:my-0 my-2.5">
            <p className="font-bold lg:text-7xl md:text-5xl sm:text-4xl text-4xl sm:my-1.5 my-0.5">
              Shreyas Gupta
            </p>
            <p className="lg:text-4xl md:text-2xl sm:text-xl text-xl sm:my-1.5 my-0.5">
              Student, Tech Lover and Programmer
            </p>
            <ul className="lg:my-10 md:my-7 sm:my-5 my-5 social md:space-x-7 sm:space-x-5 space-x-3">
                <a href="https://github.com/sggts04" target="_blank" rel="noreferrer"><li className="inline-block"><img src={github} className="lg:h-7 sm:h-5 h-6" alt="github"></img></li></a>
                <a href="https://twitter.com/@sggts04" target="_blank" rel="noreferrer"><li className="inline-block"><img src={twitter} className="lg:h-7 sm:h-5 h-6" alt="twitter"></img></li></a>
                <a href="https://www.youtube.com/user/gtshreyas" target="_blank" rel="noreferrer"><li className="inline-block"><img src={youtube} className="lg:h-7 sm:h-5 h-6" alt="youtube"></img></li></a>
                <a href="https://www.instagram.com/notshreyasgupta/" target="_blank" rel="noreferrer"><li className="inline-block"><img src={instagram} className="lg:h-7 sm:h-5 h-6" alt="instagram"></img></li></a>
                <a href="mailto:technology.shreyas@gmail.com" target="_blank" rel="noreferrer"><li className="inline-block"><img src={gmail} className="lg:h-7 sm:h-5 h-6" alt="mail"></img></li></a>
            </ul>
          </div>
      </div>
      <a className="arrow absolute bottom-0 mb-16" href="#about-container"><img className="animate-bounce h-14" alt="arrow" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgYmFzZVByb2ZpbGU9InRpbnkiIGhlaWdodD0iMjRweCIgdmVyc2lvbj0iMS4yIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBpZD0iTGF5ZXJfMSI+PHBhdGggZD0iTTE2LjcwNywxMy4yOTNjLTAuMzkxLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0LDBMMTMsMTUuNTg2VjhjMC0wLjU1Mi0wLjQ0Ny0xLTEtMXMtMSwwLjQ0OC0xLDF2Ny41ODZsLTIuMjkzLTIuMjkzICAgYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0TDEyLDE5LjQxNGw0LjcwNy00LjcwN0MxNy4wOTgsMTQuMzE2LDE3LjA5OCwxMy42ODQsMTYuNzA3LDEzLjI5M3oiLz48L2c+PC9zdmc+"></img></a>
    </div>
  );
}

export default Intro;
