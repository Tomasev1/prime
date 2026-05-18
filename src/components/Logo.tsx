import { ShieldCheck, Bug } from 'lucide-react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center text-primary h-10 w-10 shrink-0">
        <ShieldCheck className="absolute h-10 w-10" strokeWidth={1.5} />
        <Bug className="absolute h-5 w-5 mt-[#2px] text-primary" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col justify-center translate-y-[2px]">
        <span className="font-heading font-black text-2xl leading-none text-secondary tracking-tight">PRIME</span>
        <span className="font-sans font-bold text-[0.55rem] uppercase tracking-[0.2em] text-primary">Pest Control</span>
      </div>
    </div>
  );
}
