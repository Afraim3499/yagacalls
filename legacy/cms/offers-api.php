<?php
/**
 * Offers API Endpoint
 * Returns active offers in JSON format
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$offersFile = __DIR__ . '/../data/offers.json';
$offers = [];

if (file_exists($offersFile)) {
    $offersContent = @file_get_contents($offersFile);
    if ($offersContent !== false) {
        $decoded = @json_decode($offersContent, true);
        if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
            $offers = $decoded;
        }
    }
}

// Filter only active offers
$activeOffers = array_filter($offers, function($offer) {
    return isset($offer['active']) && $offer['active'] === true;
});

// Return first active offer (or empty object)
$activeOffer = !empty($activeOffers) ? reset($activeOffers) : null;

echo json_encode($activeOffer, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

