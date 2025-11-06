export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white/70 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {year} Liquid Glass. All rights reserved.</p>
        <p className="text-sm">Built with care and a touch of iridescence.</p>
      </div>
    </footer>
  );
}
