import React from 'react';

interface ComparisonRow {
  feature: string;
  free: string | boolean;
  premium: string | boolean;
}

interface ComparisonTableProps {
  title?: string;
  rows: ComparisonRow[];
  freeLabel?: string;
  premiumLabel?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ 
  title, 
  rows, 
  freeLabel = "Free Access", 
  premiumLabel = "Premium Membership" 
}) => {
  return (
    <div className="my-16 overflow-hidden border border-white/10 rounded-2xl">
      {title && (
        <div className="bg-white/5 p-6 border-b border-white/10">
          <h3 className="text-xl font-black uppercase tracking-tight text-center">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black">
              <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-500 border-b border-white/10">Feature</th>
              <th className="p-6 text-sm font-black uppercase tracking-widest text-gray-500 border-b border-white/10 text-center">{freeLabel}</th>
              <th className="p-6 text-sm font-black uppercase tracking-widest text-amber-500 border-b border-white/10 text-center">{premiumLabel}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-6 font-bold text-gray-300">{row.feature}</td>
                <td className="p-6 text-center text-gray-500">
                  {typeof row.free === 'boolean' ? (row.free ? '✓' : '—') : row.free}
                </td>
                <td className="p-6 text-center text-white font-bold bg-amber-500/5">
                  {typeof row.premium === 'boolean' ? (row.premium ? '✓' : '—') : row.premium}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
