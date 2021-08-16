import github from '../img/github.svg';
import twitter from '../img/twitter.svg';
import youtube from '../img/youtube.svg';
import instagram from '../img/instagram.svg';
import gmail from '../img/gmail.svg';

function Footer() {
  return (
    <div id="footer-container" className="flex justify-center content-center lg:px-32 md:px-16 px-8 mt-10 pb-10">
            <ul className="lg:my-10 md:my-7 sm:my-5 my-5 social md:space-x-7 sm:space-x-5 space-x-3">
                <a href="https://github.com/sggts04" target="_blank" rel="noreferrer"><li className="inline-block"><img src={github} className="lg:h-7 sm:h-5 h-6" alt="github"></img></li></a>
                <a href="https://twitter.com/@sggts04" target="_blank" rel="noreferrer"><li className="inline-block"><img src={twitter} className="lg:h-7 sm:h-5 h-6" alt="twitter"></img></li></a>
                <a href="https://www.youtube.com/user/gtshreyas" target="_blank" rel="noreferrer"><li className="inline-block"><img src={youtube} className="lg:h-7 sm:h-5 h-6" alt="youtube"></img></li></a>
                <a href="https://www.instagram.com/notshreyasgupta/" target="_blank" rel="noreferrer"><li className="inline-block"><img src={instagram} className="lg:h-7 sm:h-5 h-6" alt="instagram"></img></li></a>
                <a href="mailto:technology.shreyas@gmail.com" target="_blank" rel="noreferrer"><li className="inline-block"><img src={gmail} className="lg:h-7 sm:h-5 h-6" alt="mail"></img></li></a>
            </ul>
    </div>
  );
}

export default Footer;
