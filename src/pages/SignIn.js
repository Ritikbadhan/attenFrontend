import React from 'react';
// import { ArrowRight } from 'lucide-react';
const styles = {
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      '@media (min-width: 1024px)': {
        gridTemplateColumns: '1fr 1fr',
      },
    },
    formContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
    },
    formContent: {
      maxWidth: '400px',
      width: '100%',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#000',
    },
    subtitle: {
      fontSize: '14px',
      color: '#6B7280',
      marginTop: '10px',
    },
    link: {
      fontWeight: '600',
      color: '#000',
      textDecoration: 'none',
      transition: 'all 0.2s',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    form: {
      marginTop: '20px',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    inputWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#1F2937',
    },
    input: {
      height: '40px',
      width: '100%',
      borderRadius: '4px',
      border: '1px solid #D1D5DB',
      padding: '0 10px',
      fontSize: '14px',
      color: '#6B7280',
      ':focus': {
        outline: 'none',
        borderColor: '#4B5563',
      },
    },
    labelGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    linkSmall: {
      fontSize: '12px',
      fontWeight: '600',
      color: '#000',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    btnPrimary: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '40px',
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '4px',
      fontWeight: '600',
      transition: 'background-color 0.2s',
      ':hover': {
        backgroundColor: '#333',
      },
    },
    icon: {
      marginLeft: '8px',
    },
    socialLogin: {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    btnSecondary: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '40px',
      backgroundColor: '#fff',
      color: '#6B7280',
      borderRadius: '4px',
      border: '1px solid #D1D5DB',
      fontWeight: '600',
      transition: 'background-color 0.2s, color 0.2s',
      ':hover': {
        backgroundColor: '#F3F4F6',
        color: '#000',
      },
    },
    iconWrapper: {
      marginRight: '8px',
    },
    iconGoogle: {
      height: '24px',
      width: '24px',
      color: '#DB4437',
    },
    iconFacebook: {
      height: '24px',
      width: '24px',
      color: '#1877F2',
    },
    imageContainer: {
      width: '100%',
      height: '100%',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: '8px',
      objectFit: 'cover',
    },
  };
export function SignIn() {
  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        <div style={styles.formContainer}>
          <div style={styles.formContent}>
            <h2 style={styles.title}>Sign in</h2>
            <p style={styles.subtitle}>
              Don't have an account?{' '}
              <a href="#" title="" style={styles.link}>
                Create a free account
              </a>
            </p>
            <form action="#" method="POST" style={styles.form}>
              <div style={styles.inputGroup}>
                <div style={styles.inputWrapper}>
                  <label htmlFor="email" style={styles.label}>Email address</label>
                  <input
                    style={styles.input}
                    type="email"
                    placeholder="Email"
                    id="email"
                  />
                </div>
                <div style={styles.inputWrapper}>
                  <div style={styles.labelGroup}>
                    <label htmlFor="password" style={styles.label}>Password</label>
                    <a href="#" title="" style={styles.linkSmall}>Forgot password?</a>
                  </div>
                  <input
                    style={styles.input}
                    type="password"
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div style={styles.buttonGroup}>
                  <button type="button" style={styles.btnPrimary}>
                    Get started 
                    {/* <ArrowRight style={styles.icon} size={16}
                     /> */}
                  </button>
                </div>
              </div>
            </form>
            
          </div>
        </div>
       
      </div>
    </section>
  );
}


