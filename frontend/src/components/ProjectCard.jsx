export default function ProjectCard({ project, onClick, idx }) {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl bg-white dark:bg-gray-900 card-hover-effect animate-slide-up"
      style={{ animationDelay: `${idx * 150}ms` }}
      onClick={onClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
        <div className="text-white/80 text-sm mb-1">{project.client} &middot; {project.year}</div>
        <p className="text-white/90 text-base line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
}