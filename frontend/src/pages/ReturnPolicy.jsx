import React from "react";

const ReturnPolicy = () => {
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
      paddingBottom: "10px",
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
    highlight: {
      color: "#fbbf24",
      fontWeight: 700,
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
            <div style={styles.eyebrow}>Customer care</div>
            <h1 style={styles.title}>Return & Refund Policy</h1>
            <p style={styles.meta}>Last updated: October 31, 2026</p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>1. Overview</h2>
            <p style={styles.text}>
              At NexCart, we want every purchase to feel easy and reliable. If
              you are not completely satisfied with your order, we are happy to
              help with a return or refund in accordance with this policy.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>2. Eligibility for Returns</h2>
            <p style={styles.text}>
              To be eligible for a return, the item must meet the following
              conditions:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                The return request is made within <span style={styles.highlight}>30 days</span> of purchase.
              </li>
              <li style={styles.listItem}>
                The product is unused, unopened, and in the same condition it was received.
              </li>
              <li style={styles.listItem}>
                The item is in its original packaging, including accessories and tags where applicable.
              </li>
              <li style={styles.listItem}>
                A valid proof of purchase or order number is provided.
              </li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>3. Non-Returnable Items</h2>
            <p style={styles.text}>
              The following items are generally not eligible for return unless
              they are defective or damaged upon delivery:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Digital products and downloadable content.</li>
              <li style={styles.listItem}>Gift cards and promotional vouchers.</li>
              <li style={styles.listItem}>Items marked as final sale, clearance, or non-returnable.</li>
              <li style={styles.listItem}>Products that show signs of use, wear, or damage not caused during shipping.</li>
            </ul>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>4. Refunds</h2>
            <p style={styles.text}>
              Once your return is received and inspected, we will notify you by
              email regarding the approval or rejection of your refund request.
              If approved, the refund will be issued to the original payment
              method and may take several business days to appear, depending on
              your bank or card provider.
            </p>
            <p style={styles.text}>
              For eligible orders, the refunded amount will usually cover the
              original purchase price, excluding shipping and handling fees unless
              the return is due to a defect or incorrect item sent by NexCart.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>5. Shipping and Return Costs</h2>
            <p style={styles.text}>
              Customers are responsible for the cost of returning items unless
              the return is due to a NexCart error, damaged product, or a wrong
              item shipped. Original shipping charges are non-refundable unless
              stated otherwise.
            </p>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>6. How to Request a Return</h2>
            <p style={styles.text}>
              To start a return, please contact our support team with your order
              number and the item details. We will guide you through the return
              instructions and provide the appropriate return address or label if
              applicable.
            </p>
          </div>

          <div style={styles.contactBox}>
            <h2 style={styles.contactTitle}>Need help?</h2>
            <p style={styles.contactText}>
              If you have questions about a return, refund, or damaged item,
              contact us at <strong>support@nexcart.com</strong> and our team will be happy to assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
