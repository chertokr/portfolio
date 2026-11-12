/*
 * Chunky little diagrams, drawn to match the block style: thick strokes,
 * flat fills, no gradients. Where a number can be drawn honestly it is:
 * Donut draws its real percentage and Cut draws the real remainder.
 * Rise and Bars are directional illustrations of a trend, not plotted data.
 */

export function Rise({ stroke = '#0d0d0d' }) {
  return (
    <svg className="spark" viewBox="0 0 200 64" aria-hidden="true">
      <polyline
        points="4,54 36,50 68,56 100,44 132,34 164,20 194,8"
        fill="none" stroke={stroke} strokeWidth="5"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="194" cy="8" r="7" fill={stroke} />
    </svg>
  )
}

export function Bars({ fill = '#0d0d0d', heights = [40, 58, 34, 76, 52, 92, 64] }) {
  return (
    <svg className="spark" viewBox="0 0 200 64" aria-hidden="true">
      {heights.map((h, i) => (
        <rect
          key={i}
          x={4 + i * 28}
          y={62 - (h / 100) * 58}
          width="20"
          height={(h / 100) * 58}
          rx="4"
          fill={fill}
          opacity={h === Math.max(...heights) ? 1 : 0.55}
        />
      ))}
    </svg>
  )
}

/** Draws its real percentage as an arc. */
export function Donut({ pct = 30, stroke = '#0d0d0d', track = 'rgba(13,13,13,0.2)' }) {
  const r = 26
  const c = 2 * Math.PI * r
  return (
    <svg className="spark" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r={r} fill="none" stroke={track} strokeWidth="9" />
      <circle
        cx="32" cy="32" r={r} fill="none" stroke={stroke} strokeWidth="9"
        strokeDasharray={`${(pct / 100) * c} ${c}`}
        strokeLinecap="round"
        transform="rotate(-90 32 32)"
      />
    </svg>
  )
}

/** Before and after: the filled part is what is left after the cut. */
export function Cut({ left = 40, fill = '#0d0d0d' }) {
  return (
    <svg className="spark" viewBox="0 0 200 64" aria-hidden="true">
      <rect x="3" y="10" width="194" height="18" rx="9" fill="none" stroke={fill} strokeWidth="3" />
      <rect x="3" y="10" width="194" height="18" rx="9" fill={fill} opacity="0.25" />
      <rect x="3" y="38" width="194" height="18" rx="9" fill="none" stroke={fill} strokeWidth="3" />
      <rect x="3" y="38" width={(left / 100) * 194} height="18" rx="9" fill={fill} />
    </svg>
  )
}

/** Four lines climbing: one per cloud. */
export function Clouds({ stroke = '#0d0d0d' }) {
  const lines = [
    { d: '4,50 50,44 96,46 142,30 196,16', o: 1 },
    { d: '4,56 50,54 96,46 142,42 196,32', o: 0.7 },
    { d: '4,60 50,58 96,58 142,52 196,44', o: 0.45 },
  ]
  return (
    <svg className="spark" viewBox="0 0 200 64" aria-hidden="true">
      {lines.map((l, i) => (
        <polyline key={i} points={l.d} fill="none" stroke={stroke} strokeWidth="4"
          strokeLinecap="round" strokeLinejoin="round" opacity={l.o} />
      ))}
    </svg>
  )
}

/** Steadily growing blocks, for a club that kept shipping. */
export function Growth({ fill = '#0d0d0d' }) {
  return (
    <svg className="spark" viewBox="0 0 200 64" aria-hidden="true">
      {[26, 36, 44, 54, 62].map((h, i) => (
        <rect key={i} x={6 + i * 38} y={62 - h} width="28" height={h} rx="5"
          fill={fill} opacity={0.4 + i * 0.15} />
      ))}
    </svg>
  )
}
