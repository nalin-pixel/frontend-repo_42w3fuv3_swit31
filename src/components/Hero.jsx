import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-white via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
          Liquid Glass Portfolio
        </h1>
        <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg">
          A futuristic, immersive showcase blending iridescent motion with clean, minimal content.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2.5 text-sm backdrop-blur-md transition">
            Explore Work
          </a>
          <a href="#contact" className="rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-5 py-2.5 text-sm transition">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
