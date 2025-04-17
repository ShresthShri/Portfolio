export default function Projects({ projects }) {
    return (
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-2 text-white">{proj.title}</h3>
              <p className="text-gray-400 mb-3">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-3 text-sm text-purple-300">
                {proj.tech?.map((tech, i) => (
                  <span key={i} className="bg-gray-700 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noreferrer" className="text-blue-400 underline text-sm">
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  