
import React, { useState } from "react";

export default function ProfileCard() {
  const [following, setFollowing] = useState(false);

  return (
    <main style={styles.container}>
      {/* Background Effects */}
      <div style={styles.blueGlow} />
      <div style={styles.roseGlow} />

      {/* Profile Card */}
      <section style={styles.card}>
        {/* Top Accent */}
        <div style={styles.topAccent} />

        {/* Header */}
        <div style={styles.header}>
          <span style={styles.badge}>
            <span style={styles.statusDot} />
            DEVELOPER PROFILE
          </span>

          <span style={styles.yearBadge}>2026</span>
        </div>

        {/* Profile Image */}
        <div style={styles.imageWrapper}>
          <div style={styles.imageRing}>
            <img
              src={`${process.env.PUBLIC_URL}/img/jaz.jpeg`}
              alt="Pravin Jasper"
              style={styles.image}
            />
          </div>

          <span style={styles.onlineBadge} title="Developer profile">
            ✓
          </span>
        </div>

        {/* Name and Role */}
        <div style={styles.identity}>
          <p style={styles.eyebrow}>HELLO, I'M</p>

          <h1 style={styles.name}>
            PRAVIN <span style={styles.roseText}>JASPER</span>
          </h1>

          <p style={styles.role}>
            Python Full Stack Developer
          </p>

          <p style={styles.specialization}>
            with <span style={styles.blueText}>Generative AI</span>
          </p>
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Bio */}
        <div style={styles.bioSection}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.blueText}>//</span> ABOUT ME
          </h2>

          <p style={styles.bio}>
            Full Stack Python Developer with Generative AI expertise,
            skilled in building scalable web applications, developing
            REST APIs, and integrating AI-powered solutions using
            Python, React, and modern AI technologies.
          </p>
        </div>

        {/* Skills */}
        <div style={styles.skills}>
          {["Python", "React", "REST APIs", "GenAI"].map((skill, index) => (
            <span
              key={skill}
              style={{
                ...styles.skill,
                ...(index === 1 || index === 3
                  ? styles.roseSkill
                  : {}),
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Statistics */}
        <div style={styles.stats}>
          <div style={styles.statItem}>
            <h3 style={styles.statNumber}>03</h3>
            <span style={styles.statLabel}>PROJECTS</span>
          </div>

          <div style={styles.statDivider} />

          <div style={styles.statItem}>
            <h3 style={styles.statNumber}>10</h3>
            <span style={styles.statLabel}>LANGUAGES</span>
          </div>

          <div style={styles.statDivider} />

          <div style={styles.statItem}>
            <h3 style={{ ...styles.statNumber, ...styles.roseText }}>
              2026
            </h3>
            <span style={styles.statLabel}>PASSOUT</span>
          </div>
        </div>

        {/* Follow Button */}
        <button
          type="button"
          style={{
            ...styles.button,
            ...(following ? styles.followingButton : {}),
          }}
          onClick={() => setFollowing(!following)}
        >
          <span>
            {following ? "✓ Following" : "＋ Follow Me"}
          </span>

          {!following && <span style={styles.buttonArrow}>→</span>}
        </button>

        <p style={styles.footerText}>
          DESIGNED WITH <span style={styles.roseText}>♥</span> & CODE
        </p>
      </section>
    </main>
  );
}

const styles = {
  container: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 16px",
    boxSizing: "border-box",
    overflow: "hidden",
    background: "#050608",
    fontFamily:
      "'Inter', 'Segoe UI', Arial, sans-serif",
    color: "#f8fafc",
  },

  blueGlow: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "rgba(56, 189, 248, 0.13)",
    filter: "blur(100px)",
    top: "5%",
    left: "-100px",
    pointerEvents: "none",
  },

  roseGlow: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "rgba(251, 113, 133, 0.12)",
    filter: "blur(100px)",
    bottom: "0",
    right: "-100px",
    pointerEvents: "none",
  },

  card: {
    position: "relative",
    width: "100%",
    maxWidth: "440px",
    padding: "30px",
    boxSizing: "border-box",
    borderRadius: "28px",
    border: "1px solid rgba(56, 189, 248, 0.22)",
    background:
      "linear-gradient(160deg, #11151b 0%, #0a0c10 55%, #130c12 100%)",
    boxShadow:
      "0 25px 80px rgba(0, 0, 0, 0.55), 0 0 40px rgba(56, 189, 248, 0.04)",
    textAlign: "center",
    animation: "profileEntrance 0.7s ease-out both",
    zIndex: 1,
  },

  topAccent: {
    position: "absolute",
    top: 0,
    left: "20%",
    width: "60%",
    height: "2px",
    borderRadius: "10px",
    background:
      "linear-gradient(90deg, transparent, #38bdf8, #fb7185, transparent)",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    marginBottom: "28px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#7dd3fc",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "1.5px",
  },

  statusDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#38bdf8",
    boxShadow: "0 0 10px rgba(56, 189, 248, 0.8)",
  },

  yearBadge: {
    padding: "6px 10px",
    borderRadius: "8px",
    background: "rgba(251, 113, 133, 0.08)",
    border: "1px solid rgba(251, 113, 133, 0.2)",
    color: "#fb7185",
    fontSize: "11px",
    fontWeight: "700",
  },

  imageWrapper: {
    position: "relative",
    display: "inline-flex",
    marginBottom: "20px",
  },

  imageRing: {
    width: "132px",
    height: "132px",
    padding: "5px",
    boxSizing: "border-box",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, #38bdf8, #0b1018 48%, #fb7185)",
    boxShadow:
      "0 0 30px rgba(56, 189, 248, 0.14), 0 0 30px rgba(251, 113, 133, 0.08)",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
  },

  image: {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #0b0e12",
    boxSizing: "border-box",
  },

  onlineBadge: {
    position: "absolute",
    bottom: "5px",
    right: "4px",
    width: "27px",
    height: "27px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "4px solid #101319",
    background: "#38bdf8",
    color: "#050608",
    fontWeight: "900",
    fontSize: "13px",
  },

  identity: {
    marginBottom: "22px",
  },

  eyebrow: {
    margin: "0 0 8px",
    color: "#737b88",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "3px",
  },

  name: {
    margin: "0",
    fontSize: "clamp(25px, 7vw, 32px)",
    lineHeight: 1.3,
    fontWeight: "900",
    letterSpacing: "0.5px",
    color: "#f8fafc",
  },

  roseText: {
    color: "#fb7185",
  },

  blueText: {
    color: "#38bdf8",
  },

  role: {
    margin: "12px 0 0",
    color: "#e2e8f0",
    fontSize: "14px",
    fontWeight: "700",
  },

  specialization: {
    margin: "5px 0 0",
    color: "#8b95a5",
    fontSize: "13px",
  },

  divider: {
    height: "1px",
    width: "100%",
    margin: "24px 0",
    background:
      "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.35), rgba(251, 113, 133, 0.35), transparent)",
  },

  bioSection: {
    textAlign: "left",
  },

  sectionTitle: {
    margin: "0 0 12px",
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "1.8px",
    color: "#e2e8f0",
  },

  bio: {
    margin: 0,
    color: "#9ca3af",
    fontSize: "13px",
    lineHeight: 1.9,
  },

  skills: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "8px",
    marginTop: "20px",
  },

  skill: {
    padding: "7px 11px",
    borderRadius: "8px",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    background: "rgba(56, 189, 248, 0.06)",
    color: "#7dd3fc",
    fontSize: "11px",
    fontWeight: "700",
    transition: "all 0.3s ease",
  },

  roseSkill: {
    border: "1px solid rgba(251, 113, 133, 0.2)",
    background: "rgba(251, 113, 133, 0.06)",
    color: "#fda4af",
  },

  stats: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "26px 0",
    padding: "20px 4px",
    borderTop: "1px solid rgba(255, 255, 255, 0.07)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
    background: "rgba(255, 255, 255, 0.015)",
    borderRadius: "12px",
  },

  statItem: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: "7px",
    minWidth: 0,
  },

  statNumber: {
    margin: 0,
    color: "#38bdf8",
    fontSize: "24px",
    fontWeight: "900",
  },

  statLabel: {
    color: "#7b8491",
    fontSize: "9px",
    fontWeight: "800",
    letterSpacing: "0.8px",
    textAlign: "center",
  },

  statDivider: {
    height: "34px",
    width: "1px",
    background: "rgba(255, 255, 255, 0.1)",
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    width: "100%",
    padding: "14px 20px",
    borderRadius: "12px",
    border: "1px solid rgba(56, 189, 248, 0.5)",
    background: "linear-gradient(100deg, #38bdf8, #67e8f9)",
    color: "#050608",
    fontSize: "14px",
    fontWeight: "900",
    cursor: "pointer",
    boxShadow: "0 6px 24px rgba(56, 189, 248, 0.12)",
    transition:
      "transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
  },

  followingButton: {
    background: "#131a20",
    color: "#7dd3fc",
    border: "1px solid rgba(56, 189, 248, 0.3)",
    boxShadow: "none",
  },

  buttonArrow: {
    fontSize: "18px",
    transition: "transform 0.3s ease",
  },

  footerText: {
    margin: "24px 0 0",
    color: "#626b78",
    fontSize: "9px",
    fontWeight: "800",
    letterSpacing: "2px",
  },
};
