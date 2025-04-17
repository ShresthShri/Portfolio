export default function About({ about }) {
    return (
      <section className="px-8 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 mb-4">{about.summary.map((paragraph, index) => (
        <p key={index} className="mb-4 leading-relaxed text-gray-300">
          {paragraph}
        </p>))}</p>
        <div className="flex gap-4">
          <a href={about.github} className="text-blue-400 underline" target="_blank" rel="noreferrer">GitHub</a>
          <a href={about.linkedin} className="text-blue-400 underline" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    );
  }
  