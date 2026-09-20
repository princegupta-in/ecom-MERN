import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  const socialBtnStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    background: '#27272a',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ fontSize: '1.5rem', color: '#f97316', marginBottom: '15px' }}>ShopVerse</h3>

      <p style={{ color: '#a1a1aa', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 30px auto' }}>Welcome to our online store, where quality meets convenience. We are dedicated to providing a simple and enjoyable shopping experience with a wide range of products at affordable prices.

Our goal is to make online shopping easy, reliable, and accessible for everyone. From browsing products to placing an order, we focus on delivering a smooth and user-friendly experience.

We believe in offering quality products, great value, and customer satisfaction. Thank you for choosing us and being a part of our journey!
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
      </div>
    </div>
  );
};

export default About;
