import React from 'react';
import styles from './SignUp.module.css';  // Importing the CSS module

const SignUp = () => {
  return (
   <div className={styles.card}>
    <div className={styles.signupContainer}>
      <h2 className={styles.signupHeader}>Sign Up</h2>
      <small>Already have an account?</small>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name</label>
          <input type="text" id="username" name="username" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
          <label  className={styles.label}>Email Id</label>
          <input type="email" id="email" name="email" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input type="password" id="password" name="password" className={styles.input} />
        </div>


        <button type="submit" className={styles.signupButton}>Submit</button>
    </div>
    </div>
  );
};

export default SignUp;