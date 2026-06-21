import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const modelDir = join(process.cwd(), "public", "models");
await mkdir(modelDir, { recursive: true });

const palettes = [
  ["#d7b94a", "#0f8f5f", "#f7f4e8"],
  ["#e8523f", "#111827", "#f4d35e"],
  ["#39a0ed", "#0b132b", "#f7f4e8"],
  ["#f28f3b", "#31572c", "#f7e9b0"],
  ["#c7efcf", "#134611", "#d7b94a"],
  ["#f7f4e8", "#be9a2e", "#101820"],
  ["#ffcad4", "#0d3b66", "#f4d35e"],
  ["#2ec4b6", "#011627", "#ff9f1c"],
  ["#a3cef1", "#274c77", "#f7f4e8"],
  ["#e0fbfc", "#293241", "#ee6c4d"],
  ["#9ef01a", "#132a13", "#f7f4e8"],
  ["#ffd166", "#073b4c", "#ef476f"],
  ["#f8f9fa", "#212529", "#d7b94a"],
  ["#80ed99", "#22577a", "#f7f4e8"],
  ["#f07167", "#264653", "#fed9b7"],
  ["#b8f2e6", "#283618", "#dda15e"],
  ["#fdfcdc", "#0081a7", "#f07167"],
  ["#dee2ff", "#240046", "#ffba08"],
  ["#caffbf", "#003049", "#f77f00"],
  ["#d9ed92", "#184e77", "#f7f4e8"],
];

const names = [
  "SFT Predator",
  "SFT River Flash",
  "SFT Deep Runner",
  "SFT Pike Line",
  "SFT Gold Minnow",
  "SFT Night Bite",
  "SFT Streamer",
  "SFT Zander Pro",
  "SFT Bass Wake",
  "SFT Silver Dot",
  "SFT Lake Scout",
  "SFT Fire Belly",
  "SFT Shadow",
  "SFT Greenback",
  "SFT Amber Tail",
  "SFT Cold Water",
  "SFT Red Gill",
  "SFT Violet Strike",
  "SFT Sunrise",
  "SFT Trophy",
];

for (let i = 0; i < names.length; i += 1) {
  const [primary, secondary, accent] = palettes[i];
  const file = join(modelDir, `model-${String(i + 1).padStart(2, "0")}.svg`);
  const scale = 1 + (i % 4) * 0.035;
  const spots = Array.from({ length: 6 }, (_, index) => {
    const x = 350 + index * 72;
    const y = 226 + Math.sin(index + i) * 30;
    return `<circle cx="${x}" cy="${y.toFixed(1)}" r="${index % 2 ? 10 : 14}" fill="${accent}" opacity="0.9"/>`;
  }).join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 720" role="img" aria-labelledby="title desc">
  <title id="title">${names[i]}</title>
  <desc id="desc">Dummy katalog slika ribolovne varalice.</desc>
  <defs>
    <radialGradient id="bg" cx="50%" cy="42%" r="70%">
      <stop offset="0%" stop-color="#1a4724"/>
      <stop offset="56%" stop-color="#0d2412"/>
      <stop offset="100%" stop-color="#061108"/>
    </radialGradient>
    <linearGradient id="body" x1="180" x2="820" y1="260" y2="260">
      <stop offset="0%" stop-color="${primary}"/>
      <stop offset="55%" stop-color="${secondary}"/>
      <stop offset="100%" stop-color="${primary}"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="28" stdDeviation="28" flood-color="#000" flood-opacity="0.45"/>
    </filter>
  </defs>
  <rect width="1000" height="720" fill="url(#bg)"/>
  <path d="M0 514 C170 455 288 563 464 506 C658 443 782 491 1000 430 L1000 720 L0 720 Z" fill="#0a1a0d" opacity="0.78"/>
  <g filter="url(#shadow)" transform="translate(0 14) scale(${scale}) translate(${(1 - scale) * 500} ${(1 - scale) * 330})">
    <path d="M164 262 C256 156 509 134 734 205 C796 224 868 255 906 282 C836 322 778 359 711 385 C503 466 270 414 164 306 C129 285 129 282 164 262 Z" fill="url(#body)"/>
    <path d="M172 266 C256 234 394 222 530 239 C652 254 766 288 870 283" fill="none" stroke="${accent}" stroke-width="18" stroke-linecap="round" opacity="0.88"/>
    <path d="M198 310 C314 358 516 394 720 340" fill="none" stroke="#f7f4e8" stroke-width="12" stroke-linecap="round" opacity="0.55"/>
    ${spots}
    <circle cx="760" cy="258" r="34" fill="#f7f4e8"/>
    <circle cx="772" cy="252" r="13" fill="#061108"/>
    <path d="M907 282 C950 242 973 236 991 247 C972 286 947 314 907 333 Z" fill="${accent}"/>
    <path d="M188 284 C133 245 91 237 50 251 C86 286 122 314 189 317 Z" fill="${secondary}"/>
    <path d="M452 396 C424 470 386 506 344 508" fill="none" stroke="#cbd5c0" stroke-width="9" stroke-linecap="round"/>
    <path d="M658 383 C641 454 608 493 570 503" fill="none" stroke="#cbd5c0" stroke-width="9" stroke-linecap="round"/>
    <circle cx="342" cy="508" r="19" fill="none" stroke="#cbd5c0" stroke-width="8"/>
    <circle cx="570" cy="503" r="19" fill="none" stroke="#cbd5c0" stroke-width="8"/>
  </g>
  <text x="62" y="642" fill="#d7b94a" font-family="Arial, sans-serif" font-size="21" font-weight="700" letter-spacing="4">${names[i].toUpperCase()}</text>
  <text x="62" y="674" fill="#b7c3a1" font-family="Arial, sans-serif" font-size="16">Dummy model varalice za SFT Fishing galeriju</text>
</svg>`;

  await writeFile(file, svg);
}
