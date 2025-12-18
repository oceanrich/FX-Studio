export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="text-2xl font-bold tracking-tight">FX</span>
      <span className="text-2xl tracking-tight">
        <span className="font-bold">S</span>
        <span className="font-light">tudio</span>
      </span>
    </div>
  );
}

