import React from 'react';
// import { ArrowLeft } from 'lucide-react';
const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    content: {
      maxWidth: '400px',
      textAlign: 'center',
    },
    error: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#000',
    },
    title: {
      marginTop: '10px',
      fontSize: '24px',
      fontWeight: '600',
      color: '#1F2937',
    },
    description: {
      marginTop: '20px',
      fontSize: '16px',
      color: '#6B7280',
    },
    buttons: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 20px',
      border: '1px solid #000',
      borderRadius: '4px',
      fontWeight: '600',
      color: '#000',
      textDecoration: 'none',
      transition: 'background-color 0.2s',
      ':hover': {
        backgroundColor: '#F3F4F6',
      },
    },
    arrow: {
      marginRight: '5px',
    },
    buttonContact: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 20px',
      backgroundColor: '#000',
      borderRadius: '4px',
      fontWeight: '600',
      color: '#fff',
      textDecoration: 'none',
      transition: 'background-color 0.2s',
      ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },
    },
  };
export function ErrorPage() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <p style={styles.error}>404 error</p>
        <h1 style={styles.title}>
          We can't find that page
        </h1>
        <p style={styles.description}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div style={styles.buttons}>
          <button type="button" style={styles.button}>
            {/* <ArrowLeft size={16} style={styles.arrow} /> */}
            Go back
          </button>
          <button type="button" style={styles.buttonContact}>
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}


