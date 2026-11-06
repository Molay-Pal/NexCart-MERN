import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "25K+", label: "Happy shoppers" },
  { value: "4.9/5", label: "Customer rating" },
  { value: "1200+", label: "Products delivered" },
  { value: "48h", label: "Fast dispatch" },
];

const highlights = [
  {
    title: "Smart Shopping",
    text: "Curated products, quick discovery, and a seamless experience from browsing to checkout.",
  },
  {
    title: "Trusted Quality",
    text: "Every item is selected with care to ensure value, reliability, and satisfaction.",
  },
  {
    title: "Customer First",
    text: "We focus on convenience, support, and hassle-free service for every order.",
  },
];

const values = [
  "Premium product selection",
  "Secure and reliable checkout",
  "Fast shipping and easy tracking",
  "Simple returns and support",
  "Modern user experience",
  "Transparent pricing",
];

const About = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at top, rgba(249,115,22,0.12), transparent 28%), #09090b",
      color: "#f4f4f5",
      padding: "40px 20px 80px",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    hero: {
      textAlign: "center",
      padding: "50px 0 30px",
    },
    badge: {
      display: "inline-block",
      padding: "8px 18px",
      borderRadius: "999px",
      background: "rgba(249, 115, 22, 0.12)",
      border: "1px solid rgba(249,115,22,0.35)",
      color: "#fbbf24",
      letterSpacing: "0.08em",
      fontSize: "0.72rem",
      textTransform: "uppercase",
      fontWeight: 700,
      marginBottom: "18px",
    },
    title: {
      fontSize: "clamp(2.5rem, 5vw, 4.4rem)",
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: "-0.05em",
      marginBottom: "18px",
      background: "linear-gradient(90deg, #ffffff, #fbbf24 40%, #f97316 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      maxWidth: "760px",
      margin: "0 auto",
      fontSize: "1.08rem",
      lineHeight: "1.8",
      color: "#a1a1aa",
    },
    actions: {
      marginTop: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
      flexWrap: "wrap",
    },
    primaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "14px 28px",
      background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
      color: "#fff",
      borderRadius: "10px",
      fontWeight: 700,
      boxShadow: "0 12px 28px rgba(249, 115, 22, 0.28)",
      transition: "all 0.25s ease",
    },
    secondaryButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "14px 28px",
      border: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(255,255,255,0.02)",
      color: "#f4f4f5",
      borderRadius: "10px",
      fontWeight: 600,
    },
    statsSection: {
      padding: "20px 0 10px",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "18px",
      marginTop: "10px",
    },
    statCard: {
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "18px",
      padding: "26px 16px",
      textAlign: "center",
      backdropFilter: "blur(6px)",
    },
    statValue: {
      fontSize: "2rem",
      fontWeight: 800,
      color: "#f97316",
      marginBottom: "6px",
    },
    statLabel: {
      color: "#a1a1aa",
      fontSize: "0.95rem",
    },
    storySection: {
      padding: "80px 0 30px",
    },
    storyLayout: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "28px",
      alignItems: "stretch",
    },
    storyCard: {
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "22px",
      padding: "30px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
    },
    sectionTitle: {
      fontSize: "clamp(1.8rem, 3vw, 2.7rem)",
      fontWeight: 800,
      marginBottom: "18px",
      color: "#ffffff",
    },
    text: {
      color: "#d4d4d8",
      lineHeight: 1.8,
      fontSize: "1.02rem",
      marginBottom: "14px",
    },
    featureList: {
      display: "grid",
      gap: "16px",
      marginTop: "10px",
    },
    featureItem: {
      padding: "18px 18px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.08)",
    },
    featureTitle: {
      fontSize: "1.1rem",
      fontWeight: 700,
      color: "#fff",
      marginBottom: "8px",
    },
    featureText: {
      color: "#a1a1aa",
      fontSize: "0.96rem",
      lineHeight: 1.7,
    },
    valuesSection: {
      padding: "40px 0 30px",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "18px",
      marginTop: "30px",
    },
    valueCard: {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "18px",
      padding: "20px",
      color: "#f4f4f5",
    },
    valueText: {
      color: "#d4d4d8",
      fontSize: "0.98rem",
      lineHeight: 1.7,
    },
    ctaSection: {
      padding: "50px 0 0",
    },
    ctaBox: {
      background:
        "linear-gradient(135deg, rgba(249,115,22,0.18), rgba(255,255,255,0.03))",
      border: "1px solid rgba(249,115,22,0.26)",
      borderRadius: "22px",
      padding: "30px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "18px",
      flexWrap: "wrap",
    },
    ctaTitle: {
      fontSize: "1.8rem",
      fontWeight: 800,
      color: "#fff",
      marginBottom: "6px",
    },
    ctaText: {
      color: "#d4d4d8",
      fontSize: "1rem",
    },
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.badge}>Premium shopping, reimagined</div>
          <h1 style={styles.title}>About NexCart</h1>
          <p style={styles.subtitle}>
            NexCart is a modern e-commerce experience built for shoppers who
            want value, speed, and trust in one place. We bring together quality
            products, reliable service, and a streamlined buying journey that
            feels effortless from the first click to final delivery.
          </p>

          <div style={styles.actions}>
            <Link to="/" style={styles.primaryButton}>
              Shop Now
            </Link>
            <Link to="/return" style={styles.secondaryButton}>
              Return Policy
            </Link>
          </div>
        </div>
      </section>

      <section style={styles.statsSection}>
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            {stats.map((item) => (
              <div key={item.label} style={styles.statCard}>
                <div style={styles.statValue}>{item.value}</div>
                <div style={styles.statLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.storySection}>
        <div style={styles.container}>
          <div style={styles.storyLayout}>
            <div style={styles.storyCard}>
              <h2 style={styles.sectionTitle}>Our story</h2>
              <p style={styles.text}>
                NexCart began with a simple idea: online shopping should feel as
                premium as it looks. We wanted to create a platform where
                customers can discover thoughtfully selected products, enjoy a
                smooth buying process, and shop with complete confidence.
              </p>
              <p style={styles.text}>
                From everyday essentials to standout finds, we focus on offering
                products that combine quality, affordability, and convenience in
                one place.
              </p>
            </div>

            <div style={styles.storyCard}>
              <h2 style={styles.sectionTitle}>Why shoppers choose us</h2>
              <div style={styles.featureList}>
                {highlights.map((item) => (
                  <div key={item.title} style={styles.featureItem}>
                    <div style={styles.featureTitle}>{item.title}</div>
                    <div style={styles.featureText}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.valuesSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>What makes NexCart different</h2>

          <div style={styles.cardGrid}>
            {values.map((item) => (
              <div key={item} style={styles.valueCard}>
                <div style={styles.valueText}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={styles.ctaBox}>
            <div>
              <div style={styles.ctaTitle}>Ready to shop smarter?</div>
              <div style={styles.ctaText}>
                Explore premium products designed around convenience and value.
              </div>
            </div>

            <Link to="/" style={styles.primaryButton}>
              Explore Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
