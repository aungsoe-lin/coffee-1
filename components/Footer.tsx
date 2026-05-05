export default function Footer() {
  return (
    <footer className="py-12 bg-[#fdfdfb] border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold tracking-tight text-orange-900">
            Sweet Crumbs
          </span>
          <span className="text-zinc-300">|</span>
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
        <div className="flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-orange-800 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-orange-800 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-orange-800 transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}
