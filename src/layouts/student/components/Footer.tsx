export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-4 border-t border-slate-300">
      <div className="max-w-7xl mx-auto py-4 pb-2">
        <p className="text-slate-600 text-sm">© {year} intype.</p>
      </div>
    </footer>
  );
}
