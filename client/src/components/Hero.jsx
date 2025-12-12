export default function Hero({ name }) {
    return (
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{name}</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-2">Lead Software Engineer • Aerospace to ML/AI</p>
        <p className="text-lg md:text-xl text-gray-400">MSc Computing (Distinction) @ Imperial College London</p>
        <p className="text-md md:text-lg text-gray-500 mt-2">Ex-BAE Systems • Drone Security • Autonomous Systems</p>
      </section>
    );
  }
  