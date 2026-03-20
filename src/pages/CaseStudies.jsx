import React, { useState } from "react";

const cases = [
  {
    id: 1,
    tag: "Revenue Growth",
    tagColor: "#22c55e",
    title: "A Name Change That Generated $300K",
    subtitle: "Key Lime → Lime Rebranding",
    company: "Bevi",
    role: "Product Manager",
    duration: "Q3 2024",
    heroMetric: "$300K",
    heroLabel: "Incremental Revenue",
    sections: [
      {
        label: "Problem",
        icon: "⚡",
        content:
          "Bevi's 'Key Lime' flavor was chronically underperforming despite competing well on taste. User research and usage data revealed a perception gap — customers expected a classic lime seltzer but were thrown off by the 'Key Lime' label, associating it with a dessert-sweet profile. The result was low trial rates and high abandonment after first dispense.",
      },
      {
        label: "Insight",
        icon: "🔍",
        content:
          "Combining quantitative usage data with qualitative user interviews, I identified that the flavor name — not the formula — was creating a mismatch with customer expectations. Competitor analysis confirmed that simple, direct flavor names consistently outperformed descriptive ones in the sparkling water category. The fix was entirely in software: no reformulation needed.",
      },
      {
        label: "Solution",
        icon: "🛠",
        content:
          "Led a zero-cost, software-only rebrand from 'Key Lime' to 'Lime' across all Bevi machines. Coordinated cross-functionally with engineering to deploy the label update and with marketing to update collateral. Because the change required no physical product changes, the rollout was fast and risk-free.",
      },
      {
        label: "Impact",
        icon: "📈",
        content:
          "The rename drove $300K in incremental revenue by unlocking latent demand. Flavor usage climbed significantly post-rename as customers who had previously skipped the option began selecting it. This project became an internal case study for how naming strategy directly affects product adoption.",
      },
    ],
    skills: ["User Research", "Data Analysis", "Cross-functional Execution", "Revenue Strategy"],
  },
  {
    id: 2,
    tag: "Accessibility",
    tagColor: "#3b82f6",
    title: "Making Hydration Accessible for Everyone",
    subtitle: "Bevi Accessibility Program & Google Partnership",
    company: "Bevi",
    role: "Product Manager",
    duration: "2024–2025",
    heroMetric: "61M+",
    heroLabel: "U.S. Adults with Disabilities",
    sections: [
      {
        label: "Problem",
        icon: "⚡",
        content:
          "Bevi's smart water dispensers are deployed in thousands of workplaces — but users with visual impairments or mobility limitations had no way to independently operate the touchscreen-only interface. With enterprise clients like Google increasingly requiring ADA compliance in workplace amenities, this was both a product gap and a partnership risk.",
      },
      {
        label: "Insight",
        icon: "🔍",
        content:
          "User research and ADA compliance review revealed two distinct accessibility gaps: physical reach requirements for wheelchair users, and zero screen reader support for blind and low-vision users. Stakeholder interviews with Google's accessibility team surfaced that assistive technology compatibility — not just physical compliance — was the standard being applied at enterprise scale.",
      },
      {
        label: "Solution",
        icon: "🛠",
        content:
          "Developed a comprehensive accessibility roadmap spanning hardware and software tracks. On the software side: full iOS VoiceOver and Android TalkBack support with auditory cues for every selection, ingredient details, and pour status. On the hardware side: ISA-compliant button placement at 31.75\" height, Braille labels for QR code discovery, and a QR-based mobile dispensing flow as the primary accessible interface. Created the Google Summit presentation deck to deepen the enterprise partnership around this initiative.",
      },
      {
        label: "Impact",
        icon: "📈",
        content:
          "Delivered a full accessibility feature suite across Standup 2.0 and Countertop 1.5 machine lines. Presented the accessibility journey at the Google Summit, strengthening a key enterprise partnership. The mobile dispensing flow with screen reader support became a differentiating feature in Bevi's enterprise sales pitch, directly supporting deals with accessibility-conscious clients.",
      },
    ],
    skills: ["Accessibility (ADA/WCAG)", "Enterprise Partnerships", "Roadmap Planning", "User Research", "Executive Presentations"],
  },
  {
    id: 3,
    tag: "Product Strategy",
    tagColor: "#f59e0b",
    title: "Rethinking a Struggling Flavor Portfolio",
    subtitle: "Black Cherry & Blackberry Lime Discontinuation Strategy",
    company: "Bevi",
    role: "Product Manager",
    duration: "Q4 2024",
    heroMetric: "4",
    heroLabel: "Strategic Paths Evaluated",
    sections: [
      {
        label: "Problem",
        icon: "⚡",
        content:
          "Two flavors — Black Cherry and Blackberry Lime — were consistently underperforming on every key metric: usage rate, reorder frequency, and customer satisfaction scores. The launch of BeviPop (a new sweetened line) was expected to further cannibalize their already-low demand. Leaving them in the portfolio meant wasted inventory, diluted brand perception, and opportunity cost on better-performing SKUs.",
      },
      {
        label: "Insight",
        icon: "🔍",
        content:
          "Data analysis revealed that Black Cherry held ~10% of concentrate usage on sustaining machines where it was installed — a non-trivial share for a 'struggling' flavor. A key case study emerged: the Funnel office voted for Black Cherry through the flavor voting pilot, then requested a swap because it was 'too sweet.' This pointed toward a formula problem, not a category problem — and opened the door for a reformulation path rather than outright retirement.",
      },
      {
        label: "Solution",
        icon: "🛠",
        content:
          "Built a structured decision framework evaluating four paths: full retirement, restriction to sustaining machines only, reclassification into the BeviPop portfolio, or sugar-free reformulation. Each path was mapped against financial projections, operational complexity, partner inventory impact (up to 12 months of runway), and user sentiment data. Delivered a recommendation with supporting analysis to guide the portfolio decision.",
      },
      {
        label: "Impact",
        icon: "📈",
        content:
          "Produced a clear, data-backed strategic recommendation that removed ambiguity from a decision that had been debated internally. The analysis framework — balancing SKU complexity, brand consistency, and user retention — became reusable for future flavor portfolio reviews. This project demonstrated how rigorous product thinking can turn 'should we kill this?' into a structured, defensible business decision.",
      },
    ],
    skills: ["Portfolio Strategy", "Data Analysis", "Financial Modeling", "Stakeholder Communication", "Decision Frameworks"],
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(null);

  const selected = active !== null ? cases.find((c) => c.id === active) : null;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#0f0f13", minHeight: "100vh", color: "#e8e8f0", padding: "40px 24px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ color: "#6366f1", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
            Portfolio
          </p>
          <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0, lineHeight: 1.2 }}>Case Studies</h1>
          <p style={{ color: "#888", marginTop: 12, fontSize: 15 }}>
            Real product work from my time as a PM at Bevi.
          </p>
        </div>

        {!selected ? (
          /* Card Grid */
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {cases.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                style={{
                  background: "#16161e",
                  border: "1px solid #2a2a38",
                  borderRadius: 16,
                  padding: "28px 32px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "border-color 0.2s, transform 0.15s",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 24,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#6366f1";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a38";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ flex: 1 }}>
                  <span
                    style={{
                      display: "inline-block",
                      background: c.tagColor + "22",
                      color: c.tagColor,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "3px 10px",
                      borderRadius: 99,
                      marginBottom: 12,
                    }}
                  >
                    {c.tag}
                  </span>
                  <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 6px", color: "#f0f0f8" }}>{c.title}</h2>
                  <p style={{ margin: 0, color: "#888", fontSize: 14 }}>{c.subtitle}</p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: c.tagColor }}>{c.heroMetric}</div>
                  <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>{c.heroLabel}</div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          /* Detail View */
          <div>
            <button
              onClick={() => setActive(null)}
              style={{
                background: "none",
                border: "1px solid #2a2a38",
                color: "#aaa",
                cursor: "pointer",
                fontSize: 13,
                padding: "6px 14px",
                borderRadius: 8,
                marginBottom: 32,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              ← Back to all case studies
            </button>

            {/* Hero */}
            <div
              style={{
                background: "#16161e",
                border: "1px solid #2a2a38",
                borderRadius: 16,
                padding: "36px 40px",
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  background: selected.tagColor + "22",
                  color: selected.tagColor,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: 99,
                  marginBottom: 16,
                }}
              >
                {selected.tag}
              </span>
              <h1 style={{ fontSize: 30, fontWeight: 800, margin: "0 0 8px", color: "#f0f0f8" }}>{selected.title}</h1>
              <p style={{ color: "#888", margin: "0 0 24px", fontSize: 15 }}>{selected.subtitle}</p>
              <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                {[
                  { label: "Company", value: selected.company },
                  { label: "Role", value: selected.role },
                  { label: "Timeline", value: selected.duration },
                ].map((m) => (
                  <div key={m.label}>
                    <div style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{m.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#ccc" }}>{m.value}</div>
                  </div>
                ))}
                <div>
                  <div style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Key Result</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: selected.tagColor }}>
                    {selected.heroMetric} <span style={{ fontSize: 13, fontWeight: 500, color: "#888" }}>{selected.heroLabel}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {selected.sections.map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "#16161e",
                    border: "1px solid #2a2a38",
                    borderRadius: 14,
                    padding: "28px 32px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <span style={{ fontSize: 20 }}>{s.icon}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6366f1" }}>{s.label}</span>
                  </div>
                  <p style={{ margin: 0, lineHeight: 1.75, color: "#bbb", fontSize: 15 }}>{s.content}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div style={{ marginTop: 28, padding: "24px 32px", background: "#16161e", border: "1px solid #2a2a38", borderRadius: 14 }}>
              <p style={{ margin: "0 0 14px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#555" }}>
                Skills Demonstrated
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {selected.skills.map((sk) => (
                  <span
                    key={sk}
                    style={{
                      background: "#1f1f2e",
                      border: "1px solid #2a2a38",
                      color: "#aaa",
                      fontSize: 13,
                      padding: "5px 14px",
                      borderRadius: 99,
                    }}
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
