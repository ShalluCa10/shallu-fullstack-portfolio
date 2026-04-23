function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>

        <p className="text-gray-600 mb-4">
          {project.description}
        </p>

        <p className="text-sm text-gray-500 mb-4">
          <strong>Tech:</strong> {project.languages}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;