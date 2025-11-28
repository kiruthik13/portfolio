import profilePic from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section className="hero relative flex flex-col md:flex-row items-center justify-center h-[90vh] overflow-hidden bg-white dark:bg-black gap-8 md:gap-16 px-4">

      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
        <h1 className="hero-heading text-5xl md:text-7xl font-extrabold mb-4 text-primary drop-shadow-lg">
          Kiruthikbairavan C
        </h1>
        <h2 className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-semibold mb-4">
          Full-Stack Developer & Software Systems Student
        </h2>
        <p className="hero-text text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-200 font-medium">
          To leverage my technical skills and problem-solving abilities to contribute to innovative software solutions.
        </p>

        <div className="hero-buttons flex flex-wrap gap-4 justify-center md:justify-start mb-8">
          <a
            href="/resume.pdf"
            download
            className="btn btn-primary px-8 py-3 rounded-full text-white font-bold text-lg"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="btn btn-secondary px-8 py-3 rounded-full font-bold text-lg"
          >
            Contact Me
          </a>
        </div>

        <div className="hero-socials flex gap-4 justify-center md:justify-start">
          <a href="https://github.com/kiruthik13" target="_blank" rel="noopener noreferrer" className="social-chip" aria-label="GitHub">
            GH
          </a>
          <a href="https://linkedin.com/in/kiruthikbairavan" target="_blank" rel="noopener noreferrer" className="social-chip" aria-label="LinkedIn">
            in
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-chip" aria-label="X (Twitter)">
            X
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-image flex-shrink-0">
        <img
          src={profilePic}
          alt="Kiruthikbairavan C"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-lg profile-img-hover"
        />
      </div>

    </section>
  );
}