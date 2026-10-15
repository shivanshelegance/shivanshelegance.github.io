export default function Icon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
    strokeWidth: 1.3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  };
  if (name === "fabric")
    return <svg {...common}><path d="M12 2.7s5.5 3.5 5.5 8.5c0 3.1-2.5 5.6-5.5 5.6s-5.5-2.5-5.5-5.6C6.5 6.2 12 2.7 12 2.7z" /><path d="M12 16.8V21M9 21h6" /></svg>;
  if (name === "sparkle")
    return <svg {...common}><path d="M12 3l2.1 5.4L19.5 10l-4.2 3.5 1.3 5.6L12 16.2 7.4 19l1.3-5.5L4.5 10l5.4-1.6L12 3z" /></svg>;
  if (name === "shield")
    return <svg {...common}><path d="M12 2.8l7.4 3v5.4c0 4.6-3 8.8-7.4 10-4.4-1.2-7.4-5.4-7.4-10V5.8l7.4-3z" /><path d="M8.8 12.1l2.3 2.3 4.1-4.4" /></svg>;
  if (name === "heart")
    return <svg {...common}><path d="M12 20.4S4.3 15.7 4.3 10.5A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 7.7 2.5c0 5.2-7.7 9.9-7.7 9.9z" /></svg>;
  return <svg {...common} strokeWidth={1.6}><path d="M4 12.5l5 5L20 6.5" /></svg>;
}
