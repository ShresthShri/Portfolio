export default function Contact({ email }) {
    return (
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-300">Email me at <a href={`mailto:${email}`} className="text-purple-400 underline">{email}</a></p>
      </section>
    );
  }
  