import { useState } from 'react'

const innerIcons = [
  { src: '/redhatlogo.png',           alt: 'Red Hat',      size: 44 },
  { src: '/icons/neu-seal.png',       alt: 'Northeastern', size: 40 },
  { src: '/icons/google-icon.jpg',    alt: 'Google',       size: 42 },
  { src: '/bevilogo.png',             alt: 'Bevi',         size: 42 },
  { src: '/OasisLogo.png',            alt: 'Oasis',        size: 42 },
  { src: '/icons/atlassian-icon.png', alt: 'Atlassian',    size: 40 },
]

const outerIcons = [
  { src: '/icons/notion-logo.png',                      alt: 'Notion',   size: 40 },
  { src: '/icons/Claude_AI_symbol.svg',                 alt: 'Claude',   size: 40 },
  { src: '/icons/Visual_Studio_Code_1.35_icon.svg.png', alt: 'VS Code',  size: 40 },
  { src: '/icons/chatgpt-icon.webp',                    alt: 'ChatGPT',  size: 40 },
  { src: '/icons/github-icon.png',                      alt: 'GitHub',   size: 40 },
  { src: '/icons/react-icon.png',                       alt: 'React',    size: 40 },
]

const INNER_R   = 300
const OUTER_R   = 460
const INNER_DUR = 14
const OUTER_DUR = 20

function OrbitRing({ icons, radius, duration, clockwise }) {
  return (
    <>
      {icons.map((ic, i) => {
        const delay = `-${((i / icons.length) * duration).toFixed(2)}s`
        return (
          <div
            key={ic.alt}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              marginTop: -ic.size / 2,
              marginLeft: -ic.size / 2,
              animationName: clockwise ? 'orbit-cw' : 'orbit-ccw',
              animationDuration: `${duration}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationDelay: delay,
              '--r': `${radius}px`,
            }}
          >
            <div className="splash-icon-wrap" style={{ animation: 'none' }}>
              <img src={ic.src} alt={ic.alt} width={ic.size} height={ic.size}
                style={{ objectFit: 'contain', display: 'block' }} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default function Splash({ onDone }) {
  const [hiding, setHiding] = useState(false)

  const dismiss = () => {
    if (hiding) return
    setHiding(true)
    setTimeout(onDone, 550)
  }

  const size = OUTER_R * 2 + 60

  return (
    <div className={`splash${hiding ? ' hiding' : ''}`} onClick={dismiss} style={{ cursor: 'pointer' }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <OrbitRing icons={innerIcons} radius={INNER_R} duration={INNER_DUR} clockwise={true} />
        <OrbitRing icons={outerIcons} radius={OUTER_R} duration={OUTER_DUR} clockwise={false} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          transform: 'translate(-50%, -50%)',
          width: '320px',
        }}>
          <div className="splash-hi">Hi! <span className="splash-wave">👋</span> I'm Rachel.</div>
          <div className="splash-sub">Aspiring Product Manager · Leader · Problem Solver</div>
        </div>
      </div>
      <div className="splash-cta">Click anywhere to continue</div>
    </div>
  )
}
