export async function fetchPrices(){
  // Use server-side proxy to avoid CORS and rate-limit issues
  const url = `/prices.php`;
  const res = await fetch(url, { cache: 'no-store' });
  if(!res.ok) throw new Error('price fetch failed');
  return res.json();
}

export function startTicker(){
  console.log('Starting ticker with 20 coins...');
  
  const container = document.getElementById('header-ticker');
  if(!container) {
    console.log('Ticker container not found!');
    return;
  }
  
  const inner = container.querySelector('#ticker-inner');
  if(!inner) {
    console.log('Ticker inner not found!');
    return;
  }
  
  const update = () => {
    console.log('Fetching prices...');
    fetchPrices()
      .then(data => {
        console.log('Prices fetched, rendering ticker...');
        renderTicker(inner, data);
      })
      .catch(err => {
        console.error('Price fetch failed:', err);
      });
  };
  
  update();
  // Poll gently to respect upstream limits; 60s is reasonable
  setInterval(update, 60000);
}

function renderTicker(inner, data){
  const map = [
    {sym:'BTC', key:'bitcoin'},
    {sym:'ETH', key:'ethereum'},
    {sym:'BNB', key:'binancecoin'},
    {sym:'SOL', key:'solana'},
    {sym:'ADA', key:'cardano'},
    {sym:'XRP', key:'xrp'},
    {sym:'DOT', key:'polkadot'},
    {sym:'DOGE', key:'dogecoin'},
    {sym:'AVAX', key:'avalanche-2'},
    {sym:'LINK', key:'chainlink'},
    {sym:'MATIC', key:'polygon'},
    {sym:'LTC', key:'litecoin'},
    {sym:'BCH', key:'bitcoin-cash'},
    {sym:'UNI', key:'uniswap'},
    {sym:'XLM', key:'stellar'},
    {sym:'ETC', key:'ethereum-classic'},
    {sym:'XMR', key:'monero'},
    {sym:'TRX', key:'tron'},
    {sym:'ATOM', key:'cosmos'},
    {sym:'ALGO', key:'algorand'}
  ];
  
  const row = map.map(m => {
    const p = data[m.key]?.usd;
    const chg = data[m.key]?.usd_24h_change;
    const chgStr = (chg>0?'+':'') + (chg||0).toFixed(2) + '%';
    const chgClass = chg>=0 ? 'up' : 'down';
    return `<div class="item"><span class="symbol">${m.sym}</span><span class="price">$${p?Number(p).toLocaleString():'-'}</span><span class="chg ${chgClass}">${chgStr}</span></div>`;
  }).join('');
  
  inner.innerHTML = row + row;
  console.log('Ticker updated with 20 coins');
}
