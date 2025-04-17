export default function Hero({ name }) {
    return (
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold mb-4">{name}</h1>
        <p className="text-xl text-gray-300">Engineer • Developer • Machine Learning Enthusiast</p>
      </section>
    );
  }
  