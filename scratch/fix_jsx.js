const fs = require('fs');

const path = './app/preview/signal-card/page.tsx';
let code = fs.readFileSync(path, 'utf8');

// Find where the button starts
const startIdx = code.indexOf('<button\n                    onClick={() => {\n                      const txt = `YAGACALLS SIGNAL');
if (startIdx === -1) {
    console.log("Could not find button start");
    process.exit(1);
}

// Find where the unified responsive card starts (we will replace everything in between)
const endIdx = code.indexOf('{/* ── UNIFIED RESPONSIVE CARD ── */}');
if (endIdx === -1) {
    console.log("Could not find unified responsive card start");
    process.exit(1);
}

const newBlock = `
                  <button
                    onClick={() => {
                      const txt = \`YAGACALLS SIGNAL\\nBEING ROYAL\\n\\n\${symbol} · \${pair} · \${direction} · \${leverage} · \${timeframe}\\nLive \${livePrice}\\n\\nEntry   \${entry}\\nStop    \${stopLoss}   (\${stopSign}\${stopPct}%)\\nTP1     \${tp1}   (\${tpSign}\${tp1Pct}%)\\nTP2     \${tp2}   (\${tpSign}\${tp2Pct}%)\\nTP3     \${tp3}   (\${tpSign}\${tp3Pct}%)\\n\\nR:R to TP1   1 : \${rr1}\\nR:R to TP2   1 : \${rr2}\\nR:R to TP3   1 : \${rr3}\\n\\nNot financial advice. DYOR.\`;
                      navigator.clipboard.writeText(txt);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#E39E2E] hover:bg-[#d49025] active:scale-95 text-black font-extrabold text-xs rounded-xl shadow-lg transition-all"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? "Copied!" : "Copy Signal Text"}
                  </button>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 gap-2.5 text-xs">
              {[
                { label: "Asset",    val: symbol,   set: (v) => setSymbol(v.toUpperCase()),   type: "text" },
                { label: "Pair",     val: pair,     set: (v) => setPair(v.toUpperCase()),     type: "text" },
                { label: "Leverage", val: leverage, set: setLeverage,    type: "text" },
                { label: "Entry",    val: entry,    set: setEntry,       type: "number" },
                { label: "Stop Loss",val: stopLoss, set: setStopLoss,    type: "number" },
                { label: "TP 1",     val: tp1,      set: setTp1,         type: "number" },
                { label: "TP 2",     val: tp2,      set: setTp2,         type: "number" },
                { label: "TP 3",     val: tp3,      set: setTp3,         type: "number" },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-slate-500 font-semibold mb-1 uppercase tracking-wide text-[10px]">{f.label}</label>
                  <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)} className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-2.5 py-1.5 rounded-lg font-bold text-white focus:outline-none text-xs" />
                </div>
              ))}
              <div>
                <label className="block text-slate-500 font-semibold mb-1 uppercase tracking-wide text-[10px]">TF</label>
                <select value={timeframe} onChange={e => setTimeframe(e.target.value)} className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-2.5 py-1.5 rounded-lg font-bold text-white focus:outline-none text-xs">
                  <option value="5m">5m</option>
                  <option value="15m">15m</option>
                  <option value="1h">1H</option>
                  <option value="6h">6H</option>
                  <option value="12h">12H</option>
                  <option value="1d">24H</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-500 font-semibold mb-1 uppercase tracking-wide text-[10px]">Direction</label>
                <select value={direction} onChange={e => setDirection(e.target.value)} className="w-full bg-[#12151C] border border-[#252D3D] focus:border-[#E39E2E] px-2.5 py-1.5 rounded-lg font-bold text-white focus:outline-none text-xs">
                  <option value="LONG">🟢 LONG</option>
                  <option value="SHORT">🔴 SHORT</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      `;

const finalCode = code.substring(0, startIdx) + newBlock + code.substring(endIdx);
fs.writeFileSync(path, finalCode, 'utf8');
console.log("Fixed JSX syntax!");
