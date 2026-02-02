import profilePic from "../assets/images/profilePIC.jpg";
import pic from "../assets/images/Pic2.JPG";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/browser");
  };
  return (
    <div className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className=" rounded-xl object-cover"
                src={pic}
                alt="MyPicture"
              />
            </div>
            <img
              className="sm:ml-0 ml-auto rounded-xl object-cover"
              src={profilePic}
              alt="MyPicture2"
            />
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  About Me
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  I am Anshul Rawat, a passionate Front-End Developer dedicated
                  to creating visually stunning and highly functional web
                  applications. With a strong background in modern web
                  technologies, I excel in crafting user interfaces that are
                  both engaging and intuitive. My journey in front-end
                  development began with a curiosity for how websites work and a
                  desire to bring creative ideas to life on the web. Over the
                  years, I've honed my skills in HTML, CSS, JavaScript, and
                  frameworks like React to build responsive, dynamic, and
                  accessible websites.
                </p>
                <div className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  What I do
                </div>

                <div className=" text-lg font-bold">Web Development: </div>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  I specialize in building responsive web applications using
                  HTML5, CSS3, and JavaScript. I ensure that my code is clean,
                  efficient, and maintainable.
                </p>
                <div className=" text-lg font-bold">React Development:</div>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  React is my framework of choice for creating dynamic and
                  interactive user interfaces. I have experience with state
                  management libraries like Redux and Context API to build
                  scalable applications.
                </p>
                <div className=" text-lg font-bold">UI/UX Design:</div>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  I have a keen eye for design and a strong understanding of
                  user experience principles. I strive to create interfaces that
                  are not only aesthetically pleasing but also user-friendly.
                </p>
                <div className=" text-lg font-bold">
                  Performance Optimization:
                </div>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  I prioritize performance and accessibility in my projects,
                  utilizing tools and techniques to ensure fast load times and
                  smooth user experiences.
                </p>
              </div>
            </div>
            <button
              onClick={handleClick}
              className="p-4 font-bold rounded-lg  bg-blue-700 text-white hover:bg-blue-900"
            >
              Back To My Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
