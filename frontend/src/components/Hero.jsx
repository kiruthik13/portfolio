import profilePic from '../assets/profile.jpg'; // Place your profile photo here

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[90vh] overflow-hidden text-center bg-white dark:bg-black">
      <img
        src={profilePic}
        alt="Kiruthikbairavan C"
        className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg mb-8 animate-slide-in-right"
      />
      <h1
        className="text-5xl md:text-7xl font-extrabold mb-4 text-primary drop-shadow-lg animate-slide-up"
      >
        Kiruthikbairavan C
      </h1>
      <p
        className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-200 font-medium max-w-2xl mx-auto animate-slide-up delay-200"
      >
        To leverage my technical skills and problem-solving abilities to contribute to innovative software solutions.
      </p>
      <a
        href="/resume.pdf" // Place your resume PDF in public/resume.pdf
        download
        className="inline-block px-8 py-3 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-accent transition text-lg animate-slide-up delay-500 btn-hover-effect"
      >
        Download Resume
      </a>
    </section>
  );
}