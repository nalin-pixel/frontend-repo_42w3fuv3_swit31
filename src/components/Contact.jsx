import { Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Let's build something</h2>
        <p className="mt-2 text-white/70">
          Have a project in mind? Send a note and we'll get back soon.
        </p>

        <form onSubmit={onSubmit} className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="col-span-1">
              <label className="block text-sm text-white/70 mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/70 mb-2">Message</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Tell me about your idea..."
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-white/60">
              This is a demo form. Submissions are not sent.
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2.5 transition"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>

          {submitted && (
            <div className="mt-4 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-cyan-200">
              Thanks! Your message preview: {message.slice(0, 80)}{message.length > 80 ? "..." : ""}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
