"use client";

export default function GlobalAtmosphericShell() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden min-h-screen">
      
      {/* 1. GLOBAL TECHNICAL GRID MATRIX OVERLAY (rgba(243, 208, 129, 0.02)) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(243,208,129,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(243,208,129,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* 2. UNIVERSAL HEADER SPOTLIGHT (1200px x 400px centered at top: -100px) */}
      <div 
        className="w-[1200px] h-[400px] rounded-[100%] blur-[200px] absolute top-[-100px] left-1/2 -translate-x-1/2 pointer-events-none ambient-glow-core-a"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(243, 208, 129, 0.14) 0%, rgba(226, 183, 91, 0.05) 50%, rgba(0, 0, 0, 0) 75%)'
        }}
      />

      {/* 3. MID-LEFT BLEED (600px x 900px at left: -200px, top: 40%) */}
      <div 
        className="w-[600px] h-[900px] rounded-[100%] blur-[240px] absolute -left-[200px] top-[40%] pointer-events-none ambient-glow-core-b"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(160, 90, 25, 0.10) 0%, rgba(120, 60, 15, 0.03) 50%, rgba(0, 0, 0, 0) 75%)'
        }}
      />

      {/* 4. BOTTOM-RIGHT BLEED (700px x 700px at right: -150px, bottom: 10%) */}
      <div 
        className="w-[700px] h-[700px] rounded-[100%] blur-[220px] absolute -right-[150px] bottom-[10%] pointer-events-none ambient-glow-core-a"
        style={{
          background: 'radial-gradient(circle, rgba(243, 208, 129, 0.08) 0%, rgba(166, 110, 35, 0.02) 50%, rgba(0, 0, 0, 0) 75%)'
        }}
      />

    </div>
  );
}
