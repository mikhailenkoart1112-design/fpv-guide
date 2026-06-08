"use client";

const columns = Array.from({ length: 38 });

export default function BinaryBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,157,0.12),transparent_38%)]" />

      {columns.map((_, index) => (
        <div
          key={index}
          className="binary-column absolute top-[-120%] text-sm font-bold text-[#00FF9D]/30"
          style={{
            left: `${index * 2.8}%`,
            animationDelay: `${index * -0.7}s`,
            animationDuration: `${8 + (index % 8)}s`,
          }}
        >
          {"010101101001011010010110100101101001011010010110100101101001"
            .split("")
            .map((number, i) => (
              <span key={i} className="block leading-5">
                {number}
              </span>
            ))}
        </div>
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,5,0.15),rgba(5,5,5,0.72))]" />
    </div>
  );
}