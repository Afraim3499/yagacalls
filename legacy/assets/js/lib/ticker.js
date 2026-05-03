export async function fetchPrices(){
  const ids = [
    'bitcoin', 'ethereum', 'binancecoin', 'solana', 'cardano', 'xrp', 'polkadot', 
    'dogecoin', 'avalanche-2', 'chainlink', 'polygon', 'litecoin', 'bitcoin-cash',
    'uniswap', 'stellar', 'ethereum-classic', 'monero', 'tron', 'cosmos', 'algorand'
  ];
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(',')}&vs_currencies=usd&include_24hr_change=true`;
  const res = await fetch(url, { cache: 'no-store' });
  if(!res.ok) throw new Error('price fetch failed');
  return res.json();
}

export function renderTicker(container, data){
  if(!container) return;
  console.log('Rendering ticker with data:', Object.keys(data).length, 'coins');
  
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
  
  console.log('Map has', map.length, 'coins:', map.map(m => m.sym).join(', '));
  
  const row = map.map(m => {
    const p = data[m.key]?.usd;
    const chg = data[m.key]?.usd_24h_change;
    const chgStr = (chg>0?'+':'') + (chg||0).toFixed(2) + '%';
    const chgClass = chg>=0 ? 'up' : 'down';
    return `<div class="item"><span class="symbol">${m.sym}</span><span class="price">$${p?Number(p).toLocaleString():'-'}</span><span class="chg ${chgClass}">${chgStr}</span></div>`;
  }).join('');
  
  const inner = container.querySelector('#ticker-inner');
  if(inner){ 
    inner.innerHTML = row + row;
    console.log('Ticker updated with', map.length, 'coins');
  } else {
    console.log('Ticker inner element not found!');
  }
}

export function startTicker(){
  console.log('Starting ticker...');
  const container = document.getElementById('header-ticker');
  console.log('Ticker container found:', !!container);
  if(!container) {
    console.log('Ticker container not found!');
    return;
  }
  
  // Simple test with hardcoded data
  console.log('Testing with hardcoded data...');
  const testData = {
    bitcoin: { usd: 50000, usd_24h_change: 2.5 },
    ethereum: { usd: 3000, usd_24h_change: -1.2 },
    binancecoin: { usd: 500, usd_24h_change: 3.1 },
    solana: { usd: 200, usd_24h_change: -0.8 }
  };
  
  console.log('Rendering test data...');
  renderTicker(container, testData);
  console.log('Test render complete');
}


