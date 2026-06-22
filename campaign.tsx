import React, { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
//  JIMMY LIMA — West Covina City Council, District 5
//  Second Example · Design ref: zohranfornyc.com · Level L3
// ============================================================
//  PLACEHOLDERS:
//  Search "[PLACEHOLDER]" to find all content that needs
//  to be replaced with real information.
//  FORMS: wire handleSubmit to Formspree / Netlify Forms.
//  DONATE_URL: replace with real ActBlue / donation link.
// ============================================================

const DONATE_URL = "#donate"; // [PLACEHOLDER]
const CANDIDATE_PHOTO = "./wc-photo.webp";

// ── Color tokens ─────────────────────────────────────────────
const C = {
  canvas:       "#0B1F4F",
  canvasDeep:   "#060D24",
  canvasMid:    "#112660",
  gold:         "#F2B705",
  goldLight:    "#FFD04A",
  salmon:       "#FF7B7B",
  sky:          "#D6F3FF",
  skyMid:       "#2E78C7",
  electric:     "#2619D1",
  light:        "#F7F9FC",
  textLight:    "#FFFFFF",
  textDark:     "#0D1B2A",
  textMuted:    "rgba(255,255,255,0.62)",
  textDarkMuted:"#5A6A80",
  borderLight:  "rgba(255,255,255,0.12)",
  borderDark:   "#D8E1EE",
  glass:        "rgba(255,255,255,0.06)",
  glassBorder:  "rgba(255,255,255,0.10)",
};

// ── Global CSS injection ──────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0; padding: 0; overflow-x: hidden;
    background: ${C.canvas};
    color: ${C.textLight};
    font-family: 'IBM Plex Serif', Georgia, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button, input, select, textarea { font-family: inherit; }
  img { display: block; max-width: 100%; }
  a { color: ${C.sky}; }

  /* ── Keyframe animations ── */
  @keyframes word-rise {
    from { transform: translateY(110%); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
  @keyframes gradient-flow {
    0%   { background-position: 0% center; }
    50%  { background-position: 100% center; }
    100% { background-position: 0% center; }
  }
  @keyframes marquee-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes spark-burst {
    to { transform: rotate(var(--angle)) translateY(-38px); opacity: 0; scale: 0; }
  }
  @keyframes scroll-bob {
    0%, 100% { transform: translateY(0);  opacity: 0.7; }
    50%       { transform: translateY(8px); opacity: 0.3; }
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ── Scroll reveal ── */
  [data-reveal] {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1),
                transform 0.85s cubic-bezier(0.16,1,0.3,1);
  }
  [data-reveal="left"]  { transform: translateX(-40px); }
  [data-reveal="right"] { transform: translateX( 40px); }
  [data-reveal="scale"] { transform: scale(0.92); }
  [data-reveal].revealed { opacity: 1; transform: none; }

  /* ── BlurText reveal ── */
  [data-blur] {
    opacity: 0;
    filter: blur(14px);
    transform: translateY(20px);
    transition: opacity 1s ease, filter 1s ease, transform 1s ease;
  }
  [data-blur].revealed { opacity: 1; filter: blur(0); transform: none; }

  /* ── SpotlightCard hover glow ── */
  .card-spot::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(
      560px circle at var(--mx, 50%) var(--my, 50%),
      rgba(242,183,5,0.11), transparent 60%
    );
    opacity: 0;
    transition: opacity 300ms ease;
    pointer-events: none;
    border-radius: inherit;
  }
  .card-spot:hover::before { opacity: 1; }

  /* ── Spark ── */
  .spark {
    position: absolute; pointer-events: none;
    width: 6px; height: 6px; border-radius: 50%;
    background: ${C.gold};
    animation: spark-burst 0.55s ease forwards;
  }

  /* ── Nav glass state ── */
  .nav-scrolled {
    background: rgba(11,31,79,0.90) !important;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.10) !important;
  }

  /* ── Issues left-pin layout ── */
  .issues-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .issues-pin {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 48px 60px 40px;
    border-right: 1px solid rgba(255,255,255,0.10);
    background: ${C.canvasDeep};
  }
  .issues-scroll { /* right side — natural scroll */ }
  .issue-item {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 48px;
    opacity: 0.22;
    transition: opacity 0.5s ease;
  }
  .issue-item.is-active { opacity: 1; }

  /* ── prefers-reduced-motion ── */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      transition-duration: 0.001ms !important;
    }
    [data-reveal], [data-blur] { opacity: 1 !important; transform: none !important; filter: none !important; }
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .issues-grid { grid-template-columns: 1fr; }
    .issues-pin {
      position: static; height: auto;
      padding: 60px 24px 32px;
      border-right: none;
      border-bottom: 1px solid rgba(255,255,255,0.10);
    }
    .issue-item { min-height: auto; padding: 40px 24px; opacity: 1; }
    .hide-mobile { display: none !important; }
    .show-mobile { display: flex !important; }
  }
  @media (max-width: 600px) {
    .issues-pin { padding: 48px 20px 24px; }
    .issue-item { padding: 32px 20px; }
  }
`;

// ── Shared types ──────────────────────────────────────────────
const PAGES = ["Home","About","Issues","Endorsements","Volunteer","Contact"] as const;
type Page = typeof PAGES[number];

// ── useReveal hook ────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not(.revealed), [data-blur]:not(.revealed)");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const delay = parseFloat((e.target as HTMLElement).dataset.delay ?? "0");
        setTimeout(() => e.target.classList.add("revealed"), delay * 1000);
        obs.unobserve(e.target);
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}

// ── StarRing (Jimmy's district motif) ────────────────────────
function StarRing({ size = 120, stars = 10, color = C.gold, opacity = 1 }: {
  size?: number; stars?: number; color?: string; opacity?: number;
}) {
  const cx = size / 2, cy = size / 2, r = size * 0.38;
  const pts = Array.from({ length: stars }, (_, i) => {
    const a = (i / stars) * Math.PI * 2 - Math.PI / 2;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as [number, number];
  });
  function Star({ x, y }: { x: number; y: number }) {
    const s = size * 0.052;
    const d = Array.from({ length: 10 }, (_, k) => {
      const rad = k % 2 === 0 ? s : s / 2.4;
      const ang = (k / 10) * Math.PI * 2 - Math.PI / 2;
      return `${x + rad * Math.cos(ang)},${y + rad * Math.sin(ang)}`;
    }).join(" ");
    return <polygon points={d} fill={color} />;
  }
  return (
    <svg width={size} height={size} style={{ opacity, display: "block" }}>
      {pts.map(([x, y], i) => <Star key={i} x={x} y={y} />)}
    </svg>
  );
}

// ── Marquee ───────────────────────────────────────────────────
function Marquee() {
  const items = "WEST COVINA  ·  DISTRICT 5  ·  AFFORDABLE HOUSING  ·  PUBLIC SAFETY  ·  BETTER SCHOOLS  ·  LOCAL JOBS  ·  JIMMY LIMA  ·  FOR THE COMMUNITY  ·  ";
  return (
    <div style={{ overflow: "hidden", background: C.gold, padding: "14px 0", userSelect: "none" }}>
      <div style={{
        display: "inline-flex", whiteSpace: "nowrap",
        animation: "marquee-scroll 32s linear infinite",
      }}>
        {[0, 1].map(n => (
          <span key={n} style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 20, fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "0.05em", color: C.canvasDeep, paddingRight: 0,
          }}>{items}</span>
        ))}
      </div>
    </div>
  );
}

// ── SpotlightCard ─────────────────────────────────────────────
function SpotCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const onMove = useCallback((e: React.MouseEvent) => {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
      ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  }, []);
  return (
    <div ref={ref} className="card-spot" onMouseMove={onMove}
      style={{
        position: "relative", overflow: "hidden",
        background: C.glass, border: `1px solid ${C.glassBorder}`,
        borderRadius: 16, padding: "28px 24px",
        transition: "border-color 250ms ease, transform 250ms ease, box-shadow 250ms ease",
        ...style,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(242,183,5,0.35)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.26)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = C.glassBorder;
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >{children}</div>
  );
}

// ── MagnetBtn ─────────────────────────────────────────────────
function MagnetBtn({ children, onClick, style, spark = false }: {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  spark?: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const raf = useRef(0);
  const hover = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!hover || !ref.current) return;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.30;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.30;
      ref.current.style.transform = `translate(${dx}px,${dy}px)`;
    });
  }, [hover]);

  const onLeave = useCallback(() => {
    cancelAnimationFrame(raf.current);
    if (ref.current) ref.current.style.transform = "";
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (spark && ref.current) {
      const r = ref.current.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      for (let i = 0; i < 12; i++) {
        const s = document.createElement("span");
        s.className = "spark";
        s.style.cssText = `left:${x}px;top:${y}px;--angle:${i * 30}deg`;
        ref.current.appendChild(s);
        s.addEventListener("animationend", () => s.remove(), { once: true });
      }
    }
    onClick?.();
  }, [spark, onClick]);

  const handleLeave = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    onLeave();
    (e.currentTarget as HTMLElement).style.background = (style?.background as string) ?? C.gold;
    (e.currentTarget as HTMLElement).style.boxShadow = "";
  }, [onLeave, style]);

  return (
    <button ref={ref} onMouseMove={onMove} onMouseLeave={handleLeave} onClick={handleClick}
      style={{
        position: "relative", overflow: "hidden",
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 15, fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.06em",
        background: C.gold, color: C.canvasDeep,
        padding: "14px 32px", borderRadius: 999, border: "none",
        cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8,
        transition: "background 200ms ease, box-shadow 200ms ease",
        ...style,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = C.goldLight;
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(242,183,5,0.40)";
      }}
    >{children}</button>
  );
}

// ── GhostBtn ──────────────────────────────────────────────────
function GhostBtn({ children, onClick, style }: {
  children: React.ReactNode; onClick?: () => void; style?: React.CSSProperties;
}) {
  return (
    <button onClick={onClick} style={{
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: 15, fontWeight: 700,
      textTransform: "uppercase", letterSpacing: "0.06em",
      background: "transparent", color: C.textLight,
      padding: "13px 28px", borderRadius: 999,
      border: `2px solid rgba(255,255,255,0.40)`,
      cursor: "pointer",
      transition: "border-color 200ms ease, color 200ms ease",
      ...style,
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = C.gold;
        (e.currentTarget as HTMLElement).style.color = C.gold;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.40)";
        (e.currentTarget as HTMLElement).style.color = C.textLight;
      }}
    >{children}</button>
  );
}

// ── Section heading ───────────────────────────────────────────
function SHead({ eyebrow, title, light = false, center = false }: {
  eyebrow: string; title: string; light?: boolean; center?: boolean;
}) {
  return (
    <div style={{ marginBottom: 48, textAlign: center ? "center" : "left" }}>
      <p style={{
        fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600,
        textTransform: "uppercase", letterSpacing: "0.10em",
        color: C.gold, margin: "0 0 10px",
      }}>{eyebrow}</p>
      <div style={{
        width: 60, height: 4, background: C.gold, borderRadius: 2,
        margin: center ? "0 auto 18px" : "0 0 18px",
      }} />
      <h2 data-blur style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "clamp(28px,4vw,54px)", fontWeight: 800,
        textTransform: "uppercase", letterSpacing: "0.01em",
        lineHeight: 1, margin: 0,
        color: light ? C.textDark : C.textLight,
      }}>{title}</h2>
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────
function Nav({ page, go }: { page: Page; go: (p: Page) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = (p: Page) => { setOpen(false); go(p); };

  const linkStyle = (p: Page): React.CSSProperties => ({
    background: "none", border: "none", cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
    fontSize: 12, fontWeight: 600, textTransform: "uppercase",
    letterSpacing: "0.08em", padding: "4px 0",
    color: page === p ? C.gold : "rgba(255,255,255,0.72)",
    borderBottom: page === p ? `1.5px solid ${C.gold}` : "1.5px solid transparent",
    transition: "color 180ms, border-color 180ms",
  });

  return (
    <>
      <nav className={scrolled ? "nav-scrolled" : ""} style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "18px clamp(20px,5vw,60px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "background 300ms ease",
      }}>
        {/* Logo */}
        <button onClick={() => nav("Home")} style={{
          background: "none", border: "none", cursor: "pointer", padding: 0,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 22, fontWeight: 900, textTransform: "uppercase",
          letterSpacing: "0.04em", color: C.textLight, lineHeight: 1,
        }}>
          JIMMY <span style={{ color: C.gold }}>LIMA</span>
        </button>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {(["About","Issues","Endorsements","Volunteer","Contact"] as Page[]).map(p => (
            <button key={p} onClick={() => nav(p)} style={linkStyle(p)}
              onMouseEnter={e => { if (page !== p) (e.target as HTMLElement).style.color = C.gold; }}
              onMouseLeave={e => { if (page !== p) (e.target as HTMLElement).style.color = "rgba(255,255,255,0.72)"; }}
            >{p}</button>
          ))}
          <a href={DONATE_URL} style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 14, fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.06em", background: C.gold, color: C.canvasDeep,
            padding: "10px 22px", borderRadius: 999,
            textDecoration: "none", transition: "background 200ms, transform 200ms, box-shadow 200ms",
          }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.background = C.goldLight;
              (e.target as HTMLElement).style.transform = "translateY(-1px)";
              (e.target as HTMLElement).style.boxShadow = "0 6px 20px rgba(242,183,5,0.40)";
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.background = C.gold;
              (e.target as HTMLElement).style.transform = "";
              (e.target as HTMLElement).style.boxShadow = "";
            }}
          >Donate</a>
        </div>

        {/* Burger */}
        <button className="show-mobile" onClick={() => setOpen(o => !o)}
          style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", padding: 8, alignItems: "center", justifyContent: "center",
          }}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
            {open ? <>
              <line x1="2" y1="2" x2="22" y2="16" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="22" y1="2" x2="2" y2="16" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </> : <>
              <line x1="0" y1="2"  x2="24" y2="2"  stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="0" y1="9"  x2="24" y2="9"  stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="0" y1="16" x2="24" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </>}
          </svg>
        </button>
      </nav>

      {/* Full-screen overlay */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 190,
          background: `linear-gradient(150deg, ${C.canvasDeep} 0%, ${C.canvas} 100%)`,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 4,
        }}>
          {PAGES.map((p, i) => (
            <button key={p} onClick={() => nav(p)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(44px,11vw,80px)", fontWeight: 800,
              textTransform: "uppercase", letterSpacing: "0.02em",
              color: page === p ? C.gold : C.textLight,
              lineHeight: 1.1, padding: "4px 16px",
              animation: `word-rise 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 55}ms both`,
              transition: "color 180ms",
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = C.gold; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = page === p ? C.gold : C.textLight; }}
            >{p}</button>
          ))}
        </div>
      )}
    </>
  );
}

// ── Hero (Three.js particle constellation) ────────────────────
function Hero({ go }: { go: (p: Page) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const THREE = (window as any).THREE;
    if (!canvas || !THREE || window.innerWidth < 600) return;

    const W = window.innerWidth, H = window.innerHeight;
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    cam.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(W, H);

    const COUNT = window.innerWidth < 1024 ? 400 : 900;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT * 3; i++) pos[i] = (Math.random() - 0.5) * 14;
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0xF2B705, size: 0.042, transparent: true, opacity: 0 });
    const pts = new THREE.Points(geo, mat);
    scene.add(pts);

    // Fade in slowly after hero text appears
    let opacity = 0;
    const fadeTimer = setInterval(() => {
      opacity = Math.min(opacity + 0.015, 0.70);
      mat.opacity = opacity;
      if (opacity >= 0.70) clearInterval(fadeTimer);
    }, 32);

    let rafId = 0, paused = false;
    const tick = () => {
      if (paused) return;
      rafId = requestAnimationFrame(tick);
      pts.rotation.y += 0.00045;
      pts.rotation.x += 0.00018;
      renderer.render(scene, cam);
    };
    tick();

    // Pause off-screen
    const heroEl = canvas.parentElement!;
    const obs = new IntersectionObserver(([e]) => {
      paused = !e.isIntersecting;
      if (!paused) tick();
    }, { threshold: 0 });
    obs.observe(heroEl);

    const onResize = () => {
      cam.aspect = window.innerWidth / window.innerHeight;
      cam.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(fadeTimer);
      obs.disconnect();
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, []);

  return (
    <section style={{
      position: "relative", minHeight: "100svh",
      background: `
        radial-gradient(ellipse at 38% 52%, rgba(38,25,209,0.38) 0%, transparent 62%),
        radial-gradient(ellipse at 80% 20%, rgba(46,120,199,0.20) 0%, transparent 50%),
        linear-gradient(160deg, ${C.canvasDeep} 0%, ${C.canvas} 55%, ${C.canvasMid} 100%)
      `,
      display: "flex", alignItems: "center", overflow: "hidden",
    }}>
      {/* Three.js canvas */}
      <canvas ref={canvasRef} style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2, width: "100%",
        maxWidth: 1280, margin: "0 auto",
        padding: "clamp(108px,14vh,170px) clamp(20px,5vw,80px) clamp(70px,10vh,110px)",
      }}>
        {/* Eyebrow */}
        <div data-reveal style={{
          display: "flex", alignItems: "center", gap: 12,
          marginBottom: 24,
        }}>
          <StarRing size={32} />
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.10em", color: C.gold,
          }}>West Covina City Council · District 5</span>
        </div>

        {/* JIMMY LIMA — word-rise + gradient flow */}
        <h1 style={{ margin: "0 0 20px", lineHeight: 0.88 }}>
          {["JIMMY", "LIMA"].map((word, i) => (
            <span key={word} style={{ display: "block", overflow: "hidden", lineHeight: 0.92 }}>
              <span style={{
                display: "block",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(80px,16vw,182px)",
                fontWeight: 900, textTransform: "uppercase",
                letterSpacing: "-0.02em",
                background: `linear-gradient(135deg, ${C.gold} 0%, #E08A3C 52%, ${C.gold} 100%)`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: `word-rise 0.95s cubic-bezier(0.16,1,0.3,1) ${1.5 + i * 0.28}s both,
                             gradient-flow 5s ease ${2.6}s infinite`,
              }}>{word}</span>
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p data-reveal data-delay="2.2" style={{
          fontFamily: "'IBM Plex Serif', serif",
          fontSize: "clamp(17px,2.2vw,24px)", fontStyle: "italic",
          color: "rgba(255,255,255,0.78)", maxWidth: 520,
          margin: "0 0 40px", lineHeight: 1.60,
        }}>
          Fighting for every family in West Covina — because our community deserves better.
        </p>

        {/* CTAs */}
        <div data-reveal data-delay="2.5" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <MagnetBtn spark style={{ fontSize: 16, padding: "16px 36px" }} onClick={() => go("Volunteer")}>
            Join the Campaign
          </MagnetBtn>
          <GhostBtn onClick={() => go("Issues")}>See the Platform →</GhostBtn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        animation: "fade-in 0.8s ease 3.4s both",
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.14em",
          color: "rgba(255,255,255,0.35)", margin: 0,
        }}>Scroll</p>
        <div style={{
          width: 20, height: 28, border: "1.5px solid rgba(255,255,255,0.30)",
          borderRadius: 10, position: "relative", overflow: "hidden",
        }}>
          <div style={{
            width: 4, height: 4, borderRadius: "50%", background: C.gold,
            position: "absolute", left: "50%", top: 5, transform: "translateX(-50%)",
            animation: "scroll-bob 1.8s ease-in-out infinite",
          }} />
        </div>
      </div>
    </section>
  );
}

// ── Home page ─────────────────────────────────────────────────
const ISSUES_PREVIEW = [
  { tag: "Housing",   title: "Affordable Housing",  body: "Pushing for zoning reform and community-benefit agreements to keep long-time West Covina residents in their homes." },
  { tag: "Education", title: "Better Schools",       body: "Investing in after-school programs, mental health counselors, and modernizing aging school facilities across District 5." },
  { tag: "Safety",    title: "Public Safety",        body: "Community-centered safety that builds real trust between residents and first responders — not just more enforcement." },
];

const ENDORSEMENTS_HOME = [
  { name: "Maria Gonzalez", role: "Parent & PTA President",  quote: "Jimmy actually listens. He came to our school meeting and stayed two hours answering questions. That's the councilmember we need." },
  { name: "Ray Torres",     role: "Small Business Owner",    quote: "Finally someone who understands what it takes to run a business in West Covina. Jimmy has my vote and my sign." },
  { name: "Dr. Angela Kim", role: "Family Physician, WC",    quote: "Healthcare access in District 5 is a crisis. Jimmy's the only candidate with a real plan to address it." },
];

function Home({ go }: { go: (p: Page) => void }) {
  useReveal();
  return (
    <>
      <Hero go={go} />
      <Marquee />

      {/* ── Issues preview ── */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,5vw,80px)", background: C.canvas }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SHead eyebrow="Platform" title="What Jimmy Stands For" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20, marginBottom: 36 }}>
            {ISSUES_PREVIEW.map((item, i) => (
              <SpotCard key={item.title}>
                <div data-reveal data-delay={`${i * 0.10}`}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.10em",
                    color: C.gold, background: "rgba(242,183,5,0.14)",
                    border: "1px solid rgba(242,183,5,0.28)",
                    padding: "3px 10px", borderRadius: 999,
                    display: "inline-block", marginBottom: 18,
                  }}>{item.tag}</span>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 28, fontWeight: 800, textTransform: "uppercase",
                    color: C.textLight, margin: "0 0 12px", letterSpacing: "0.01em",
                  }}>{item.title}</h3>
                  <p style={{
                    fontFamily: "'IBM Plex Serif', serif",
                    fontSize: 16, lineHeight: 1.70, color: C.textMuted, margin: 0,
                  }}>{item.body}</p>
                </div>
              </SpotCard>
            ))}
          </div>
          <button onClick={() => go("Issues")} style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 14, fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.06em", background: "transparent",
            color: C.gold, border: `1.5px solid ${C.gold}`,
            padding: "11px 26px", borderRadius: 999, cursor: "pointer",
            transition: "background 200ms",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(242,183,5,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >Full Platform →</button>
        </div>
      </section>

      {/* ── About teaser ── */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,5vw,80px)", background: C.light }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.10em", color: C.canvas, margin: "0 0 10px",
            }}>About Jimmy</p>
            <div style={{ width: 60, height: 4, background: C.gold, borderRadius: 2, marginBottom: 18 }} />
            <h2 data-blur style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(34px,5vw,64px)", fontWeight: 800,
              textTransform: "uppercase", color: C.textDark,
              lineHeight: 1, margin: "0 0 24px",
            }}>Rooted in West Covina</h2>
            <p data-reveal style={{
              fontFamily: "'IBM Plex Serif', serif",
              fontSize: 18, lineHeight: 1.74, color: "#3A4A5C", margin: "0 0 16px",
            }}>
              Jimmy Lima was born and raised in West Covina. He knows the streets, the schools, and the families that make our city strong. [PLACEHOLDER — add Jimmy's real bio here.]
            </p>
            <p data-reveal data-delay="0.12" style={{
              fontFamily: "'IBM Plex Serif', serif",
              fontSize: 18, lineHeight: 1.74, color: "#3A4A5C", margin: "0 0 36px",
            }}>
              With deep roots in community organizing and a commitment to District 5, Jimmy is ready to be the voice our neighborhood needs at City Hall.
            </p>
            <button onClick={() => go("About")} style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 15, fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.06em", background: C.canvas, color: C.textLight,
              padding: "14px 30px", borderRadius: 999, border: "none", cursor: "pointer",
              transition: "background 200ms",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.canvasMid; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.canvas; }}
            >Meet Jimmy →</button>
          </div>
          <div data-reveal="scale" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 80px rgba(11,31,79,0.16)", aspectRatio: "4/5" }}>
            <img src={CANDIDATE_PHOTO} alt="Jimmy Lima"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={e => {
                const el = e.target as HTMLImageElement;
                el.style.background = `linear-gradient(135deg, ${C.canvas}, ${C.canvasMid})`;
                el.style.minHeight = "400px";
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Endorsements teaser ── */}
      <section style={{ padding: "clamp(80px,10vw,140px) clamp(20px,5vw,80px)", background: C.canvasMid }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SHead eyebrow="Community" title="Standing With Jimmy" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20, marginBottom: 36 }}>
            {ENDORSEMENTS_HOME.map((e, i) => (
              <div key={e.name} data-reveal data-delay={`${i * 0.10}`} style={{
                background: C.glass, border: `1px solid ${C.glassBorder}`,
                borderRadius: 18, padding: "28px 26px", position: "relative", overflow: "hidden",
                transition: "border-color 250ms",
              }}
                onMouseEnter={el => el.currentTarget.style.borderColor = "rgba(242,183,5,0.35)"}
                onMouseLeave={el => el.currentTarget.style.borderColor = C.glassBorder}
              >
                <p style={{
                  fontFamily: "'IBM Plex Serif', serif", fontStyle: "italic",
                  fontSize: 16, lineHeight: 1.70, color: "rgba(255,255,255,0.82)", margin: "0 0 22px",
                }}>"{e.quote}"</p>
                <p style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 17, fontWeight: 700, textTransform: "uppercase",
                  color: C.gold, margin: "0 0 3px",
                }}>{e.name}</p>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 12,
                  color: "rgba(255,255,255,0.45)", margin: 0,
                }}>{e.role}</p>
                <span style={{
                  position: "absolute", top: 14, right: 20,
                  fontFamily: "Georgia", fontSize: 64, lineHeight: 1,
                  color: "rgba(242,183,5,0.12)",
                }}>"</span>
              </div>
            ))}
          </div>
          <button onClick={() => go("Endorsements")} style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 14, fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.06em", background: "transparent",
            color: C.gold, border: `1.5px solid ${C.gold}`,
            padding: "11px 26px", borderRadius: 999, cursor: "pointer",
            transition: "background 200ms",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(242,183,5,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >All Endorsements →</button>
        </div>
      </section>

      {/* ── Volunteer CTA ── */}
      <section style={{
        padding: "clamp(80px,10vw,140px) clamp(20px,5vw,80px)",
        background: C.canvas, textAlign: "center",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <StarRing size={60} />
          </div>
          <h2 data-blur style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(44px,8vw,88px)", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "-0.01em",
            color: C.textLight, lineHeight: 1, margin: "0 0 16px",
          }}>Together,<br/>We Win</h2>
          <p data-reveal style={{
            fontFamily: "'IBM Plex Serif', serif", fontStyle: "italic",
            fontSize: 20, lineHeight: 1.60, color: "rgba(255,255,255,0.70)",
            margin: "0 0 40px",
          }}>
            Every door knocked, every call made, every sign planted — it adds up. Join the movement for a better West Covina.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <MagnetBtn spark style={{ background: C.salmon, color: "#fff", fontSize: 16, padding: "16px 36px" }} onClick={() => go("Volunteer")}>
              Volunteer Now
            </MagnetBtn>
            <GhostBtn onClick={() => go("Contact")}>Get in Touch</GhostBtn>
          </div>
        </div>
      </section>
    </>
  );
}

// ── PageShell (inner pages) ───────────────────────────────────
function PageShell({ eyebrow, title, children, lightBody = false }: {
  eyebrow: string; title: string; children: React.ReactNode; lightBody?: boolean;
}) {
  return (
    <>
      <section style={{
        background: C.canvas,
        padding: "clamp(106px,14vh,168px) clamp(20px,5vw,80px) clamp(60px,8vh,80px)",
        borderBottom: `1px solid ${C.glassBorder}`,
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.10em",
            color: C.gold, margin: "0 0 10px",
          }}>{eyebrow}</p>
          <div style={{ width: 60, height: 4, background: C.gold, borderRadius: 2, marginBottom: 20 }} />
          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(48px,8vw,100px)", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "-0.01em",
            lineHeight: 0.90, color: C.textLight, margin: 0,
            animation: "word-rise 0.95s cubic-bezier(0.16,1,0.3,1) 0.08s both",
          }}>{title}</h1>
        </div>
      </section>
      <section style={{
        background: lightBody ? C.light : C.canvas,
        padding: "clamp(60px,8vh,100px) clamp(20px,5vw,80px)",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>{children}</div>
      </section>
    </>
  );
}

// ── About ─────────────────────────────────────────────────────
function About() {
  useReveal();
  return (
    <PageShell eyebrow="About" title="Meet Jimmy Lima" lightBody>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "start", marginBottom: 80 }}>
        <div>
          <h2 data-blur style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800,
            textTransform: "uppercase", color: C.textDark,
            lineHeight: 1.1, margin: "0 0 28px",
          }}>A Lifelong West Covina Resident</h2>
          {[
            "Jimmy Lima grew up in District 5, attending local schools and watching the neighborhood he loves face growing challenges around housing affordability, school funding, and public safety. [PLACEHOLDER — add Jimmy's real story here.]",
            "After years of community organizing — leading neighborhood clean-ups, attending City Council meetings, and connecting families with city resources — Jimmy decided the time had come to take that dedication into the council chamber itself.",
            "His campaign is powered entirely by small donors and neighborhood volunteers. No PAC money. No developer donations. Just the people of West Covina standing up for their community.",
          ].map((p, i) => (
            <p key={i} data-reveal data-delay={`${i * 0.12}`} style={{
              fontFamily: "'IBM Plex Serif', serif",
              fontSize: 18, lineHeight: 1.76, color: "#3A4A5C", margin: "0 0 20px",
            }}>{p}</p>
          ))}
        </div>
        <div data-reveal="scale" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 24px 80px rgba(11,31,79,0.14)", aspectRatio: "3/4" }}>
          <img src={CANDIDATE_PHOTO} alt="Jimmy Lima" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Values on dark card */}
      <div style={{ background: C.canvas, borderRadius: 24, padding: "clamp(36px,5vw,60px)" }}>
        <SHead eyebrow="Values" title="What Drives Jimmy" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
          {[
            { label: "Community First",    text: "Every decision at City Hall will be guided by one question: does this make life better for the families of District 5?" },
            { label: "Honest Government",  text: "Full transparency in city contracts, open town halls, and a council office that returns every call within 24 hours." },
            { label: "Roots Over Resume",  text: "Jimmy isn't a politician. He's a neighbor who's tired of waiting for change and decided to be that change himself." },
          ].map((v, i) => (
            <SpotCard key={v.label}>
              <div data-reveal data-delay={`${i * 0.12}`}>
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 24, fontWeight: 800, textTransform: "uppercase",
                  color: C.gold, margin: "0 0 12px",
                }}>{v.label}</h3>
                <p style={{
                  fontFamily: "'IBM Plex Serif', serif",
                  fontSize: 16, lineHeight: 1.72, color: C.textMuted, margin: 0,
                }}>{v.text}</p>
              </div>
            </SpotCard>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// ── Issues (left-pin / right-swap) ────────────────────────────
const ISSUES_ALL = [
  {
    num: "01", title: "Affordable Housing", tag: "Housing", tagColor: C.gold,
    stat: { n: "40%", label: "Rent increase in 5 years" },
    paras: [
      "The housing crisis is pricing out the families who built West Covina. Rents have increased 40% in five years while wages have barely kept pace.",
      "Jimmy will push for community benefit agreements on new developments, expand the city's affordable housing trust fund, and fight against displacement of long-term residents.",
      "He supports renter protections, first-time buyer assistance programs, and transparent zoning processes that actually include community input. [PLACEHOLDER]",
    ],
  },
  {
    num: "02", title: "Better Schools", tag: "Education", tagColor: C.sky,
    stat: { n: "1 in 3", label: "Students qualify for free lunch" },
    paras: [
      "West Covina's schools deserve more than aging buildings and underpaid educators. Every child in District 5 deserves a world-class education — full stop.",
      "Jimmy will prioritize city funding for after-school programs, mental health counselors in every school, and modernizing facilities that haven't been updated in decades.",
      "He'll work with WCUSD to ensure our schools reflect the diversity of our community and that no child is left behind due to zip code. [PLACEHOLDER]",
    ],
  },
  {
    num: "03", title: "Public Safety", tag: "Safety", tagColor: C.salmon,
    stat: { n: "28%", label: "Rise in property crime since 2020" },
    paras: [
      "Safety is a right, not a privilege. Every family in District 5 should feel secure in their home, on their streets, and in their parks.",
      "Jimmy believes in community-centered public safety — investing in mental health crisis response, neighborhood watch coordination, and youth programming.",
      "He will ensure our first responders have the resources they need while building the trust between law enforcement and residents that makes communities truly safe. [PLACEHOLDER]",
    ],
  },
  {
    num: "04", title: "Local Economy", tag: "Economy", tagColor: "#9FE870",
    stat: { n: "2,400+", label: "Small businesses in West Covina" },
    paras: [
      "West Covina's small businesses are the backbone of District 5. They employ our neighbors, serve our community, and define the character of our streets.",
      "Jimmy will fight for streamlined permitting, a dedicated small business liaison at City Hall, and local hiring preferences on city contracts.",
      "He also supports workforce development programs that connect residents with living-wage careers in the trades, healthcare, and tech. [PLACEHOLDER]",
    ],
  },
  {
    num: "05", title: "Clean Environment", tag: "Environment", tagColor: "#5FF0CC",
    stat: { n: "18", label: "Parks in District 5 needing upgrades" },
    paras: [
      "Our parks, air quality, and green spaces matter — especially in communities closest to industrial corridors.",
      "Jimmy will champion tree-planting programs, push for expanded EV charging infrastructure, and fight to clean up contaminated sites that have been ignored for too long.",
      "A greener West Covina is a healthier West Covina. Environmental justice will be part of every land-use decision made in District 5. [PLACEHOLDER]",
    ],
  },
];

function Issues() {
  const [activeIdx, setActiveIdx] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setActiveIdx(i);
      }, { threshold: 0.45, rootMargin: "-15% 0px -15% 0px" });
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach(o => o.disconnect());
  }, []);

  const active = ISSUES_ALL[activeIdx];

  return (
    <>
      {/* Header */}
      <section style={{
        background: C.canvas,
        padding: "clamp(106px,14vh,168px) clamp(20px,5vw,80px) clamp(60px,8vh,80px)",
        borderBottom: `1px solid ${C.glassBorder}`,
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.10em", color: C.gold, margin: "0 0 10px",
          }}>Issues / Platform</p>
          <div style={{ width: 60, height: 4, background: C.gold, borderRadius: 2, marginBottom: 20 }} />
          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(48px,8vw,100px)", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "-0.01em",
            lineHeight: 0.90, color: C.textLight, margin: 0,
            animation: "word-rise 0.95s cubic-bezier(0.16,1,0.3,1) 0.08s both",
          }}>Where Jimmy Stands</h1>
        </div>
      </section>

      {/* Left-pin / Right-swap */}
      <div className="issues-grid">
        {/* Left — sticky */}
        <div className="issues-pin">
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.35)", margin: "0 0 20px",
          }}>Scroll to explore</p>

          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(64px,9vw,116px)", fontWeight: 900, lineHeight: 1,
            background: `linear-gradient(135deg, ${C.gold}, #E08A3C)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", display: "block",
            transition: "all 0.45s ease",
          }}>{active.num}</span>

          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(28px,3.5vw,50px)", fontWeight: 800,
            textTransform: "uppercase", color: C.textLight,
            lineHeight: 1, margin: "6px 0 20px",
            transition: "all 0.45s ease",
          }}>{active.title}</h2>

          <div style={{ width: 40, height: 3, background: C.gold, borderRadius: 2, marginBottom: 22 }} />

          <div style={{
            background: "rgba(242,183,5,0.10)", border: "1px solid rgba(242,183,5,0.25)",
            borderRadius: 12, padding: "14px 18px",
            transition: "all 0.45s ease",
          }}>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 34, fontWeight: 800, color: C.gold, lineHeight: 1, margin: "0 0 4px",
            }}>{active.stat.n}</p>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: 11,
              color: "rgba(255,255,255,0.50)", margin: 0,
            }}>{active.stat.label}</p>
          </div>

          {/* Dot nav */}
          <div style={{ display: "flex", gap: 8, marginTop: 28 }}>
            {ISSUES_ALL.map((_, i) => (
              <div key={i} onClick={() => itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                style={{
                  width: i === activeIdx ? 24 : 8, height: 8, borderRadius: 999,
                  background: i === activeIdx ? C.gold : "rgba(255,255,255,0.22)",
                  transition: "all 0.3s ease", cursor: "pointer",
                }} />
            ))}
          </div>
        </div>

        {/* Right — scrollable */}
        <div className="issues-scroll" style={{ background: C.canvas }}>
          {ISSUES_ALL.map((issue, i) => (
            <div
              key={issue.num}
              ref={el => { itemRefs.current[i] = el; }}
              className={`issue-item${i === activeIdx ? " is-active" : ""}`}
            >
              <span style={{
                fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.10em",
                color: issue.tagColor, background: `${issue.tagColor}22`,
                border: `1px solid ${issue.tagColor}44`,
                padding: "3px 10px", borderRadius: 999,
                display: "inline-block", marginBottom: 20,
              }}>{issue.tag}</span>
              {issue.paras.map((p, j) => (
                <p key={j} style={{
                  fontFamily: "'IBM Plex Serif', serif",
                  fontSize: 18, lineHeight: 1.78,
                  color: "rgba(255,255,255,0.82)", margin: "0 0 20px",
                }}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Endorsements ──────────────────────────────────────────────
const ALL_ENDORSEMENTS = [
  { name: "Maria Gonzalez",    role: "Parent & PTA President",     quote: "Jimmy actually listens. He came to our school meeting and stayed two hours answering questions. That's the councilmember we need." },
  { name: "Ray Torres",        role: "Small Business Owner",        quote: "Finally someone who understands what it takes to run a business in West Covina. Jimmy has my vote and my sign." },
  { name: "Dr. Angela Kim",    role: "Family Physician, WC",        quote: "Healthcare access in District 5 is a crisis. Jimmy's the only candidate with a real plan to address it." },
  { name: "Pastor James W.",   role: "First Baptist Church, WC",    quote: "A man of character and integrity. West Covina needs Jimmy Lima on the City Council. [PLACEHOLDER]" },
  { name: "Sofia Martinez",    role: "Retired School Teacher",      quote: "After 30 years in the classroom, I know which candidates actually care about kids. Jimmy does. [PLACEHOLDER]" },
  { name: "Carlos Reyes",      role: "IBEW Local 11",               quote: "Jimmy stands with working families. He's earned the support of our local and our members. [PLACEHOLDER]" },
];

const ORGS = [
  "West Covina Teachers Association [PLACEHOLDER]",
  "San Gabriel Valley Young Democrats [PLACEHOLDER]",
  "WC Small Business Alliance [PLACEHOLDER]",
  "District 5 Neighborhood Watch [PLACEHOLDER]",
];

function Endorsements() {
  useReveal();
  return (
    <PageShell eyebrow="Endorsements & Community" title="Standing With Jimmy">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20, marginBottom: 64 }}>
        {ALL_ENDORSEMENTS.map((e, i) => (
          <div key={e.name} data-reveal data-delay={`${i * 0.08}`}
            style={{
              background: C.glass, border: `1px solid ${C.glassBorder}`,
              borderRadius: 18, padding: "28px 26px", position: "relative", overflow: "hidden",
              transition: "border-color 250ms ease",
            }}
            onMouseEnter={el => el.currentTarget.style.borderColor = "rgba(242,183,5,0.35)"}
            onMouseLeave={el => el.currentTarget.style.borderColor = C.glassBorder}
          >
            <p style={{
              fontFamily: "'IBM Plex Serif', serif", fontStyle: "italic",
              fontSize: 16, lineHeight: 1.70, color: "rgba(255,255,255,0.82)", margin: "0 0 22px",
            }}>"{e.quote}"</p>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 17, fontWeight: 700, textTransform: "uppercase",
              color: C.gold, margin: "0 0 3px",
            }}>{e.name}</p>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: 12,
              color: "rgba(255,255,255,0.45)", margin: 0,
            }}>{e.role}</p>
            <span style={{
              position: "absolute", top: 14, right: 20,
              fontFamily: "Georgia", fontSize: 60, lineHeight: 1,
              color: "rgba(242,183,5,0.12)",
            }}>"</span>
          </div>
        ))}
      </div>

      <div style={{ background: C.canvasMid, borderRadius: 20, padding: "clamp(32px,5vw,52px)" }}>
        <h3 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 28, fontWeight: 800, textTransform: "uppercase",
          color: C.gold, margin: "0 0 22px",
        }}>Organizational Endorsements</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 12 }}>
          {ORGS.map(org => (
            <div key={org} style={{
              display: "flex", alignItems: "center", gap: 12,
              background: C.glass, border: `1px solid ${C.glassBorder}`,
              borderRadius: 10, padding: "13px 16px",
            }}>
              <span style={{ color: C.gold, fontSize: 14, lineHeight: 1 }}>★</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{org}</span>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// ── Volunteer ─────────────────────────────────────────────────
function Volunteer() {
  const [done, setDone] = useState(false);
  const [vals, setVals] = useState({ name: "", email: "", phone: "", zip: "", interest: "Knock on doors" });
  useReveal();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // [PLACEHOLDER — wire to Formspree / Netlify Forms]
    setDone(true);
  };

  if (done) return (
    <PageShell eyebrow="Volunteer" title="Thank You!">
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}><StarRing size={72} /></div>
        <p style={{ fontFamily: "'IBM Plex Serif', serif", fontStyle: "italic", fontSize: 22, color: C.textMuted, maxWidth: 440, margin: "0 auto", lineHeight: 1.65 }}>
          Welcome to the campaign. We'll be in touch soon. Thank you for fighting for West Covina.
        </p>
      </div>
    </PageShell>
  );

  const fld: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif", fontSize: 15,
    background: "rgba(255,255,255,0.08)", border: `1.5px solid ${C.glassBorder}`,
    color: C.textLight, padding: "12px 16px", borderRadius: 8,
    width: "100%", outline: "none",
    transition: "border-color 200ms, box-shadow 200ms",
  };
  const lbl: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600,
    textTransform: "uppercase", letterSpacing: "0.10em",
    color: "rgba(255,255,255,0.50)", display: "block", marginBottom: 6,
  };
  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    (e.target as HTMLElement).style.borderColor = C.gold;
    (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(242,183,5,0.18)";
  };
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    (e.target as HTMLElement).style.borderColor = C.glassBorder;
    (e.target as HTMLElement).style.boxShadow = "";
  };

  return (
    <PageShell eyebrow="Volunteer / Get Involved" title="Join the Campaign">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64 }}>
        <form onSubmit={submit} data-reveal style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={lbl}>Name *</label>
              <input required value={vals.name} onChange={e => setVals(v => ({ ...v, name: e.target.value }))}
                placeholder="Your name" style={fld} onFocus={focus} onBlur={blur} />
            </div>
            <div>
              <label style={lbl}>Zip Code</label>
              <input value={vals.zip} onChange={e => setVals(v => ({ ...v, zip: e.target.value }))}
                placeholder="91790" style={fld} onFocus={focus} onBlur={blur} />
            </div>
          </div>
          <div>
            <label style={lbl}>Email *</label>
            <input required type="email" value={vals.email} onChange={e => setVals(v => ({ ...v, email: e.target.value }))}
              placeholder="you@example.com" style={fld} onFocus={focus} onBlur={blur} />
          </div>
          <div>
            <label style={lbl}>Phone (optional)</label>
            <input type="tel" value={vals.phone} onChange={e => setVals(v => ({ ...v, phone: e.target.value }))}
              placeholder="(626) 555-0100" style={fld} onFocus={focus} onBlur={blur} />
          </div>
          <div>
            <label style={lbl}>How would you like to help?</label>
            <select value={vals.interest} onChange={e => setVals(v => ({ ...v, interest: e.target.value }))}
              style={{ ...fld, cursor: "pointer" }} onFocus={focus} onBlur={blur}>
              {["Knock on doors","Make phone calls","Host a house party","Put up yard signs","Donate","Other"].map(o => (
                <option key={o} style={{ background: C.canvas }}>{o}</option>
              ))}
            </select>
          </div>
          <MagnetBtn spark style={{ alignSelf: "flex-start", fontSize: 16, padding: "16px 34px" }}>
            Count Me In →
          </MagnetBtn>
        </form>

        <div data-reveal="right">
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 26, fontWeight: 800, textTransform: "uppercase",
            color: C.gold, margin: "0 0 24px",
          }}>Ways to Help</h3>
          {[
            { title: "Knock Doors",    text: "Join weekend canvasses and meet your neighbors across District 5. Training provided." },
            { title: "Phone Bank",     text: "Call voters from home. Thursdays 6–8 pm via Zoom. [PLACEHOLDER — add link]" },
            { title: "Donate",         text: "Small donations fund yard signs, mailers, and events. Every dollar stays in West Covina." },
            { title: "Spread the Word",text: "Share on social media. Tag #JimmyLima and #WestCovina." },
          ].map(item => (
            <div key={item.title} style={{ borderLeft: `3px solid ${C.gold}`, paddingLeft: 20, marginBottom: 26 }}>
              <h4 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 19, fontWeight: 700, textTransform: "uppercase",
                color: C.textLight, margin: "0 0 5px",
              }}>{item.title}</h4>
              <p style={{
                fontFamily: "'IBM Plex Serif', serif",
                fontSize: 15, lineHeight: 1.68, color: "rgba(255,255,255,0.65)", margin: 0,
              }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// ── Contact ───────────────────────────────────────────────────
function Contact() {
  const [done, setDone] = useState(false);
  const [vals, setVals] = useState({ name: "", email: "", message: "" });
  useReveal();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // [PLACEHOLDER — wire to Formspree / Netlify Forms]
    setDone(true);
  };

  if (done) return (
    <PageShell eyebrow="Contact" title="Message Sent">
      <p style={{ fontFamily: "'IBM Plex Serif', serif", fontStyle: "italic", fontSize: 22, color: C.textMuted, lineHeight: 1.65, maxWidth: 480 }}>
        Thanks for reaching out. The campaign will get back to you within 1 business day.
      </p>
    </PageShell>
  );

  const fld: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif", fontSize: 15,
    background: "rgba(255,255,255,0.08)", border: `1.5px solid ${C.glassBorder}`,
    color: C.textLight, padding: "12px 16px", borderRadius: 8,
    width: "100%", outline: "none",
    transition: "border-color 200ms, box-shadow 200ms",
  };
  const lbl: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600,
    textTransform: "uppercase", letterSpacing: "0.10em",
    color: "rgba(255,255,255,0.50)", display: "block", marginBottom: 6,
  };
  const focus = (e: React.FocusEvent<any>) => {
    e.target.style.borderColor = C.gold;
    e.target.style.boxShadow = "0 0 0 3px rgba(242,183,5,0.18)";
  };
  const blur = (e: React.FocusEvent<any>) => {
    e.target.style.borderColor = C.glassBorder;
    e.target.style.boxShadow = "";
  };

  return (
    <PageShell eyebrow="Contact" title="Get in Touch">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64 }}>
        <form onSubmit={submit} data-reveal style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={lbl}>Your Name *</label>
            <input required value={vals.name} onChange={e => setVals(v => ({ ...v, name: e.target.value }))}
              placeholder="Full name" style={fld} onFocus={focus} onBlur={blur} />
          </div>
          <div>
            <label style={lbl}>Email Address *</label>
            <input required type="email" value={vals.email} onChange={e => setVals(v => ({ ...v, email: e.target.value }))}
              placeholder="you@example.com" style={fld} onFocus={focus} onBlur={blur} />
          </div>
          <div>
            <label style={lbl}>Message *</label>
            <textarea required value={vals.message} onChange={e => setVals(v => ({ ...v, message: e.target.value }))}
              placeholder="How can we help?" rows={5}
              style={{ ...fld, resize: "vertical", minHeight: 120 }}
              onFocus={focus} onBlur={blur} />
          </div>
          <MagnetBtn spark style={{ alignSelf: "flex-start", fontSize: 16, padding: "16px 34px" }}>
            Send Message →
          </MagnetBtn>
        </form>

        <div data-reveal="right">
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 26, fontWeight: 800, textTransform: "uppercase",
            color: C.gold, margin: "0 0 28px",
          }}>Campaign Info</h3>
          {[
            { label: "Email",    value: "hello@jimmylima.com [PLACEHOLDER]" },
            { label: "Phone",    value: "(626) 555-0100 [PLACEHOLDER]" },
            { label: "District", value: "West Covina City Council, District 5" },
          ].map(item => (
            <div key={item.label} style={{ marginBottom: 22 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.10em", color: "rgba(255,255,255,0.40)", margin: "0 0 4px" }}>{item.label}</p>
              <p style={{ fontFamily: "'IBM Plex Serif', serif", fontSize: 17, color: C.textLight, margin: 0 }}>{item.value}</p>
            </div>
          ))}
          <div style={{ marginTop: 36 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.10em", color: "rgba(255,255,255,0.40)", margin: "0 0 14px" }}>Follow Along</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["Instagram","Facebook","Twitter/X","TikTok"].map(s => (
                <span key={s} style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600,
                  color: C.gold, border: `1px solid rgba(242,183,5,0.35)`,
                  padding: "6px 13px", borderRadius: 999, cursor: "pointer",
                }}>@jimmylima · {s} [PH]</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// ── Footer ────────────────────────────────────────────────────
function Footer({ go }: { go: (p: Page) => void }) {
  return (
    <footer style={{
      background: C.canvasDeep, borderTop: `1px solid ${C.glassBorder}`,
      padding: "clamp(40px,6vw,64px) clamp(20px,5vw,80px)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 40 }}>
        <div>
          <button onClick={() => go("Home")} style={{
            background: "none", border: "none", cursor: "pointer", padding: 0,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 26, fontWeight: 900, textTransform: "uppercase",
            color: C.textLight, marginBottom: 6, display: "block",
          }}>JIMMY <span style={{ color: C.gold }}>LIMA</span></button>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.40)", margin: "0 0 20px" }}>
            West Covina City Council · District 5
          </p>
          <StarRing size={44} />
        </div>
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.10em", color: "rgba(255,255,255,0.35)", margin: "0 0 14px" }}>Navigate</p>
          {PAGES.map(p => (
            <button key={p} onClick={() => go(p)} style={{
              background: "none", border: "none", cursor: "pointer", padding: "4px 0", display: "block",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 18, fontWeight: 600, textTransform: "uppercase",
              color: "rgba(255,255,255,0.58)",
              transition: "color 180ms",
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = C.gold; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.58)"; }}
            >{p}</button>
          ))}
        </div>
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.30)", lineHeight: 1.75, margin: 0 }}>
            Paid for by Jimmy Lima for West Covina City Council, District 5.
            Treasurer: [PLACEHOLDER — name & address]. Not authorized by any candidate or candidate's committee.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.18)", margin: "16px 0 0" }}>
            Motion effects derived from{" "}
            <a href="https://github.com/DavidHDev/vue-bits" style={{ color: "rgba(255,255,255,0.28)" }}>vue-bits</a>{" "}
            by DavidHDev (MIT)
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── App root ──────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("Home");

  const go = useCallback((p: Page) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setPage(p);
  }, []);

  useEffect(() => {
    document.title = page === "Home"
      ? "Jimmy Lima — West Covina City Council, District 5"
      : `${page} — Jimmy Lima`;
  }, [page]);

  const Pages: Record<Page, React.ComponentType<any>> = {
    Home, About, Issues, Endorsements, Volunteer, Contact,
  };
  const Body = Pages[page];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
      <Nav page={page} go={go} />
      <main><Body go={go} /></main>
      <Footer go={go} />
    </>
  );
}
