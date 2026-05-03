export function startTicker(){
  console.log('Simple ticker starting...');
  
  const container = document.getElementById('header-ticker');
  console.log('Container found:', !!container);
  
  if (!container) {
    console.log('No container found!');
    return;
  }
  
  const inner = container.querySelector('#ticker-inner');
  console.log('Inner found:', !!inner);
  
  if (!inner) {
    console.log('No inner found!');
    return;
  }
  
  console.log('Adding test content...');
  inner.innerHTML = `
    <div class="item"><span class="symbol">BTC</span><span class="price">$50,000</span><span class="chg up">+2.5%</span></div>
    <div class="item"><span class="symbol">ETH</span><span class="price">$3,000</span><span class="chg down">-1.2%</span></div>
    <div class="item"><span class="symbol">BNB</span><span class="price">$500</span><span class="chg up">+3.1%</span></div>
    <div class="item"><span class="symbol">SOL</span><span class="price">$200</span><span class="chg down">-0.8%</span></div>
  `;
  
  console.log('Test content added successfully!');
}
