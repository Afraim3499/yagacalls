"use client";

export default function BackgroundSpine() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden min-h-full">
      {/* 1. CONTINUOUS GRID MATRIX (Spans full page scroll height) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(243,208,129,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(243,208,129,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* 2. LIGHTING SPINE 1: LEFT-ANCHORED DEEP AMBER GLOW (What is Yaga Calls -> Why Join) */}
      <div 
        className="w-[950px] h-[1400px] rounded-[100%] blur-[240px] absolute -left-[300px] top-[14%] z-0 ambient-glow-core-a"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(226, 160, 60, 0.24) 0%, rgba(166, 110, 35, 0.09) 45%, rgba(0, 0, 0, 0) 75%)'
        }}
      />

      {/* 3. LIGHTING SPINE 2: RIGHT-ANCHORED WARM COGNAC GLOW (Comparison Trap -> What You Get) */}
      <div 
        className="w-[1050px] h-[1400px] rounded-[100%] blur-[240px] absolute -right-[250px] top-[38%] z-0 ambient-glow-core-b"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(243, 208, 129, 0.22) 0%, rgba(180, 120, 40, 0.08) 50%, rgba(0, 0, 0, 0) 75%)'
        }}
      />

      {/* 4. LIGHTING SPINE 3: LEFT-ANCHORED CHAMPAGNE GLOW (Free vs Premium -> Audience) */}
      <div 
        className="w-[1000px] h-[1300px] rounded-[100%] blur-[240px] absolute -left-[250px] top-[64%] z-0 ambient-glow-core-a"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(226, 160, 60, 0.20) 0%, rgba(166, 110, 35, 0.07) 50%, rgba(0, 0, 0, 0) 75%)'
        }}
      />

      {/* 5. LIGHTING SPINE 4: RIGHT-ANCHORED AMBER GLOW (Signal Examples -> FAQ) */}
      <div 
        className="w-[1050px] h-[1300px] rounded-[100%] blur-[240px] absolute -right-[250px] top-[85%] z-0 ambient-glow-core-b"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(243, 208, 129, 0.20) 0%, rgba(166, 110, 35, 0.07) 50%, rgba(0, 0, 0, 0) 75%)'
        }}
      />
    </div>
  );
}
