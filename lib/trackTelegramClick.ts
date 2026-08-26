declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Fires on every click of an outbound Telegram CTA — the site's actual
 * conversion action (see audit-2026/findings/12-analytics-tracking.md).
 * Previously this only reached a server endpoint that did nothing but
 * console.log, and wasn't wired into GTM/GA4 at all. Now it:
 *   1. Pushes a real event into GTM's dataLayer, so it's queryable in GA4
 *      like any other conversion.
 *   2. Still POSTs to /api/track/telegram for a durable first-party log
 *      (see that route for what it does with it).
 * Never awaited by callers — must not block navigation to the Telegram link.
 */
export function trackTelegramClick(label: string, path: string) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'telegram_click',
      telegram_click_label: label,
      telegram_click_path: path,
    });
  }

  fetch('/api/track/telegram', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event: 'telegram_click', label, path }),
  }).catch((e) => {
    // Fail silently - don't block the user.
    console.warn('Tracking failed', e);
  });
}
