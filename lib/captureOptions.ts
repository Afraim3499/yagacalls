import * as htmlToImage from "html-to-image";

/**
 * Mobile-Safe Chart Card Capture Engine
 *
 * Uses the recursive retry pattern to handle Mobile Safari/Chrome's
 * GPU canvas buffer eviction. On each successive call to toPng(),
 * mobile WebKit renders progressively more content. We call it up to
 * 3 times until the output data URL size stabilizes.
 *
 * Also pre-warms canvas buffers by forcing a getImageData() read
 * before capture, which moves pixel data from GPU → CPU memory.
 *
 * Desktop PC is unaffected: uses pixelRatio 3, single-pass capture.
 */

function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Force all canvas elements inside a container to transfer their
 * GPU-resident pixel buffers into CPU-accessible memory.
 */
function prewarmCanvasBuffers(container: HTMLElement): void {
  const canvases = container.querySelectorAll("canvas");
  canvases.forEach((canvas) => {
    try {
      const ctx = canvas.getContext("2d");
      if (ctx && canvas.width > 0 && canvas.height > 0) {
        // Reading even 1 pixel forces the browser to make the buffer CPU-accessible
        ctx.getImageData(0, 0, 1, 1);
      }
    } catch {
      // Silently ignore — some canvases may be WebGL or cross-origin tainted
    }
  });
}

function buildOptions(element: HTMLElement, mobile: boolean) {
  return {
    quality: 0.95,
    pixelRatio: mobile ? 2 : 3,
    cacheBust: true,
    width: element.offsetWidth,
    height: element.offsetHeight,
    style: {
      transform: "none",
      maxWidth: "none",
      maxHeight: "none",
    },
  };
}

/**
 * Capture a card element as PNG (data URL) or Blob.
 *
 * - On PC: single high-res pass at 3x pixel ratio.
 * - On Mobile: pre-warms canvas buffers, then retries up to 3 times
 *   until the output data URL size stabilizes (recursive retry pattern).
 *
 * @param captureElement  The outer card div (ref={captureRef})
 * @param _chartInstance  Unused — kept for API compatibility
 * @param _chartContainer Unused — kept for API compatibility
 * @param type            "png" returns a data URL string, "blob" returns a Blob
 */
export async function captureCardWithChartScreenshot(
  captureElement: HTMLElement | null,
  _chartInstance: unknown,
  _chartContainer: unknown,
  type: "png" | "blob" = "png"
): Promise<any> {
  if (!captureElement) throw new Error("Capture container not found");

  const mobile = isMobileDevice();
  const options = buildOptions(captureElement, mobile);

  if (mobile) {
    // Step 1: Pre-warm all canvas buffers (GPU → CPU transfer)
    prewarmCanvasBuffers(captureElement);

    // Step 2: Short delay to let the browser finish the GPU → CPU transfer
    await new Promise((r) => setTimeout(r, 150));

    // Step 3: Recursive retry — call toPng multiple times until output stabilizes
    let lastSize = 0;
    let dataUrl = "";

    for (let attempt = 0; attempt < 3; attempt++) {
      dataUrl = await htmlToImage.toPng(captureElement, options);
      if (dataUrl.length <= lastSize) break; // output stabilized
      lastSize = dataUrl.length;
    }

    if (type === "blob") {
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      if (!blob) throw new Error("Failed to generate image blob");
      return blob;
    }
    return dataUrl;
  }

  // Desktop PC — single pass, full 3x resolution
  if (type === "blob") {
    const blob = await htmlToImage.toBlob(captureElement, options);
    if (!blob) throw new Error("Failed to generate image blob");
    return blob;
  }
  const dataUrl = await htmlToImage.toPng(captureElement, options);
  return dataUrl;
}
