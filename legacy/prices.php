<?php
header('Content-Type: application/json; charset=utf-8');
// cache for 60 seconds to avoid rate limits
header('Cache-Control: public, max-age=60');

$ids = [
  'bitcoin','ethereum','binancecoin','solana','cardano','xrp','polkadot',
  'dogecoin','avalanche-2','chainlink','polygon','litecoin','bitcoin-cash',
  'uniswap','stellar','ethereum-classic','monero','tron','cosmos','algorand'
];

$url = 'https://api.coingecko.com/api/v3/simple/price?ids=' .
        implode(',', $ids) .
        '&vs_currencies=usd&include_24hr_change=true';

$ch = curl_init($url);
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 6,
  CURLOPT_CONNECTTIMEOUT => 4,
  CURLOPT_HTTPHEADER => ['Accept: application/json']
]);
$resp = curl_exec($ch);
$http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http >= 200 && $http < 300 && $resp) {
  echo $resp;
} else {
  http_response_code(502);
  echo json_encode(['error' => 'upstream_failed']);
}


