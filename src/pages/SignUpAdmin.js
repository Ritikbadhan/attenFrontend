import React from 'react';

// Inline CSS as JavaScript object
const styles = {
  container: {
    display: 'flex',
    width:"100%"
  },
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    width:"100%"
  },
  formContent: {
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  subtitle: {
    marginTop: '10px',
    fontSize: '16px',
    color: 'gray',
    textAlign: 'left',
  },
  link: {
    color: 'black',
    fontWeight: 'medium',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
  form: {
    marginTop: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'medium',
    color: 'gray',
    textAlign: 'left',
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid gray',
    borderRadius: '4px',
    outline: 'none',
  },
  inputFocus: {
    borderColor: 'black',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#333',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '50%',
    height: '100%',
    objectFit: 'cover',
  },
};

// React Component
const SignUpAdmin = () => {
  return (
    <section>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <div style={styles.formContent}>
            <h2 style={styles.title}>Sign up admin</h2>
            <p style={styles.subtitle}>
              Already have an account?{' '}
              <a href="#" style={styles.link} onMouseOver={(e) => e.currentTarget.style.textDecoration = styles.linkHover.textDecoration} onMouseOut={(e) => e.currentTarget.style.textDecoration = styles.link.textDecoration}>
                Sign In
              </a>
            </p>
            <form action="#" method="POST" style={styles.form}>
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>
                  Full Name
                </label>
                <input
                  style={styles.input}
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  onFocus={(e) => e.currentTarget.style.borderColor = styles.inputFocus.borderColor}
                  onBlur={(e) => e.currentTarget.style.borderColor = styles.input.borderColor}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>
                  Email address
                </label>
                <input
                  style={styles.input}
                  type="email"
                  placeholder="Email"
                  id="email"
                  onFocus={(e) => e.currentTarget.style.borderColor = styles.inputFocus.borderColor}
                  onBlur={(e) => e.currentTarget.style.borderColor = styles.input.borderColor}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="password" style={styles.label}>
                  Password
                </label>
                <input
                  style={styles.input}
                  type="password"
                  placeholder="Password"
                  id="password"
                  onFocus={(e) => e.currentTarget.style.borderColor = styles.inputFocus.borderColor}
                  onBlur={(e) => e.currentTarget.style.borderColor = styles.input.borderColor}
                />
              </div>
              <div style={styles.formGroup}>
                <button
                  type="button"
                  style={styles.button}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpAdmin;
