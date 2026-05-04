import React from 'react';

interface KeyTakeawaysProps {
  items: string[];
}

const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({ items }) => {
  return (
    <div className="my-10 p-8 border border-white/10 bg-white/[0.02] rounded-2xl">
      <h3 className="text-lg font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
        <span className="w-8 h-[1px] bg-amber-500/50" />
        Key Takeaways
      </h3>
      <ul className="grid gap-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-4 items-start text-gray-400">
            <span className="text-amber-500 font-bold">●</span>
            <span className="text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTakeaways;
