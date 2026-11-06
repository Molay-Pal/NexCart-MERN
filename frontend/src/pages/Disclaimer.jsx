import React from "react";

const Disclaimer = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at top, rgba(249,115,22,0.12), transparent 30%), #09090b",
      color: "#f4f4f5",
      padding: "40px 20px 80px",
    },
    container: {
      maxWidth: "980px",
      margin: "0 auto",
    },
    card: {
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "22px",
      padding: "40px 32px",
      boxShadow: "0 20px 50px rgba(0,0,0,0.28)",
    },
    header: {
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      paddingBottom: "22px",
      marginBottom: "28px",
    },
    eyebrow: {
      display: "inline-block",
      padding: "7px 16px",
      borderRadius: "999px",
      background: "rgba(249,115,22,0.12)",
      border: "1px solid rgba(249,115,22,0.35)",
      color: "#fbbf24",
      fontSize: "0.72rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      fontWeight: 700,
      marginBottom: "12px",
    },
    title: {
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: 800,
      marginBottom: "8px",
      color: "#ffffff",
      lineHeight: 1.2,
    },
    meta: {
      fontSize: "0.92rem",
      color: "#a1a1aa",
    },
    section: {
      marginBottom: "28px",
    },
    sectionTitle: {
      fontSize: "1.35rem",
      fontWeight: 700,
      color: "#fff",
      marginBottom: "12px",
    },
    text: {
      color: "#d4d4d8",
      fontSize: "1rem",
      lineHeight: 1.8,
      marginBottom: "12px",
    },
    list: {
      margin: "10px 0 0 18px",
      color: "#d4d4d8",
      paddingLeft: "16px",
    },
    listItem: {
      marginBottom: "10px",
      lineHeight: 1.7,
    },
    contactBox: {
      background: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(255,255,255,0.02))",
      border: "1px solid rgba(249,115,22,0.22)",
      borderRadius: "18px",
      padding: "22px 20px",
      marginTop: "22px",
    },
    contactTitle: {
      fontSize: "1.3rem",
      fontWeight: 700,
      color: "#fff",
      marginBottom: "8px",
    },
    contactText: {
      margin: 0,
      color: "#e4e4e7",
      lineHeight: 1.7,
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <div style={styles.eyebrow}>Legal notice</div>
            <h1 style={styles.title}>Disclaimer</h1>
            <p style={styles.meta}>Last updated: October 31, 2026</p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>1. General Information</h2>
            <p style={styles.text}>
              The content and services available on NexCart are provided for
              general informational and shopping purposes only. While we strive
              to keep all information accurate and up to date, we do not guarantee
              that the information on our platform is complete, error-free, or
              always current.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>2. Product Information</h2>
            <p style={styles.text}>
              Product descriptions, pricing, availability, and promotional offers
              may change without notice. We make every effort to present the most
              accurate product details available at the time of listing, but
              images, features, and specifications may vary based on the product
              manufacturer, supplier, or stock conditions.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>3. Professional or Legal Advice</h2>
            <p style={styles.text}>
              The information provided on this platform should not be interpreted
              as professional legal, financial, medical, or technical advice.
              For any matter requiring expert guidance, we strongly recommend
              consulting a qualified professional before acting on the information
              presented here.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>4. External Links</h2>
            <p style={styles.text}>
              NexCart may include links to third-party websites, services, or
              product pages that are not owned or controlled by us. We are not
              responsible for the content, policies, security, or practices of any
              external site, and we do not endorse or guarantee the accuracy or
              reliability of third-party information.
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>We do not assume responsibility for third-party content or transactions.</li>
              <li style={styles.listItem}>Accessing linked services is done at your own discretion and risk.</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>5. Limitation of Liability</h2>
            <p style={styles.text}>
              NexCart shall not be held liable for any direct, indirect,
              incidental, consequential, or special damages arising from the use
              or inability to use our platform, including loss of data, business
              interruption, or reliance on information presented herein.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>6. Changes to This Disclaimer</h2>
            <p style={styles.text}>
              We reserve the right to update or revise this disclaimer at any
              time without prior notice. Continued use of the website after any
              modification indicates your acceptance of the revised terms.
            </p>
          </div>

          <div style={styles.contactBox}>
            <h2 style={styles.contactTitle}>Questions?</h2>
            <p style={styles.contactText}>
              If you have questions about this disclaimer, please contact our
              support team at <strong>support@nexcart.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
