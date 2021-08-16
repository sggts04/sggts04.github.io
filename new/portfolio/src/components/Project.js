import github from '../img/github.svg';
import web from '../img/web.svg';

function Project(props) {
  return (
        <div class="container flex justify-center">
            <div class="max-w-sm py-8">
                <div class="relative shadow-lg hover:shadow-xl transition duration-500 rounded-md">
                    <img class="rounded-t-md" src={props.imgUrl} alt="project" />
                </div>
                <div class="py-3 px-3 lg:text-2xl md:text-xl text-base">
                    <h1 class="text-gray-200 font-bold text-2xl mb-3 ">{props.projectTitle}</h1>
                    <p class="text-gray-200 text-xl tracking-wide">{props.projectDesc}</p>
                    <a href={props.githubUrl} target="_blank" rel="noreferrer"><button class="mt-4 py-2 px-2 bg-blue-300 text-base text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-blue-500 hover:cursor-pointer"><img src={github} className="lg:h-5 sm:h-3 h-3" alt="github"></img></button></a>
                    <a href={props.projectUrl} target="_blank" rel="noreferrer"><button class="mt-4 ml-4 py-2 px-2 bg-blue-300 text-base text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-blue-500 hover:cursor-pointer"><img src={web} className="lg:h-5 sm:h-3 h-3" alt="github"></img></button></a>
                </div>
            </div>
        </div>
  );
}

export default Project;
