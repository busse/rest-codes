exports.code = function (status, width) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${ width.code }" height="18">
    <linearGradient id="smooth" x2="0" y2="100%">
      <stop offset="0"  stop-color="#fff" stop-opacity=".7"/>
      <stop offset=".1" stop-color="#aaa" stop-opacity=".1"/>
      <stop offset=".9" stop-color="#000" stop-opacity=".3"/>
      <stop offset="1"  stop-color="#000" stop-opacity=".5"/>
    </linearGradient>

    <clipPath id="round">
      <rect width="${ width.code }" height="18" rx="4" fill="#fff"/>
    </clipPath>

    <g clip-path="url(#round)">
      <rect width="${ width.code }" height="18" fill="${ status.color }"/>
      <rect width="${ width.code }" height="18" fill="url(#smooth)"/>
    </g>

    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${ width.code / 2 + 1 }" y="14" fill="#010101" fill-opacity=".3">${ status.code }</text>
      <text x="${ width.code / 2 + 1 }" y="13">${ status.code }</text>
    </g>
  </svg>`
}

exports.reason = function (status, width) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${ width.reason }" height="18">
    <linearGradient id="smooth" x2="0" y2="100%">
      <stop offset="0"  stop-color="#fff" stop-opacity=".7"/>
      <stop offset=".1" stop-color="#aaa" stop-opacity=".1"/>
      <stop offset=".9" stop-color="#000" stop-opacity=".3"/>
      <stop offset="1"  stop-color="#000" stop-opacity=".5"/>
    </linearGradient>

    <clipPath id="round">
      <rect width="${ width.reason }" height="18" rx="4" fill="#fff"/>
    </clipPath>

    <g clip-path="url(#round)">
      <rect width="${ width.reason }" height="18" fill="${ status.color }"/>
      <rect width="${ width.reason }" height="18" fill="url(#smooth)"/>
    </g>

    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${ width.reason / 2 + 1 }" y="14" fill="#010101" fill-opacity=".3">${ status.reason }</text>
      <text x="${ width.reason / 2 + 1 }" y="13">${ status.reason }</text>
    </g>
  </svg>`
}

exports.full = function (status, width, reverse = false) {
  const primary = reverse ? status.color : '#555'
  const secondary = reverse ? '#555' : status.color

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${ width.code + width.reason }" height="18">
    <linearGradient id="smooth" x2="0" y2="100%">
      <stop offset="0"  stop-color="#fff" stop-opacity=".7"/>
      <stop offset=".1" stop-color="#aaa" stop-opacity=".1"/>
      <stop offset=".9" stop-color="#000" stop-opacity=".3"/>
      <stop offset="1"  stop-color="#000" stop-opacity=".5"/>
    </linearGradient>

    <clipPath id="round">
      <rect width="${ width.code + width.reason }" height="18" rx="4" fill="#fff"/>
    </clipPath>

    <g clip-path="url(#round)">
      <rect width="${ width.code }" height="18" fill="${ primary }"/>
      <rect x="${ width.code }" width="${ width.reason }" height="18" fill="${ secondary }"/>
      <rect width="${ width.code + width.reason }" height="18" fill="url(#smooth)"/>
    </g>

    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
      <text x="${ width.code / 2 + 1 }" y="14" fill="#010101" fill-opacity=".3">${ status.code }</text>
      <text x="${ width.code / 2 + 1 }" y="13">${ status.code }</text>
      <text x="${ width.code + width.reason / 2 - 1 }" y="14" fill="#010101" fill-opacity=".3">${ status.reason }</text>
      <text x="${ width.code + width.reason / 2 - 1 }" y="13">${ status.reason }</text>
    </g>
  </svg>`
}
