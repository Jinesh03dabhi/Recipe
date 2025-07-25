import Head from 'next/head';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function signin() {
  const [email, setEmail] = useState('');
  const [emailError,setemailError]=useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage('Please fill in all fields.');
    } else if (!validateEmail(email)){
      setemailError('Invalid email format');
    } else{
      // You can later integrate Firebase here
      localStorage.setItem('user', JSON.stringify({ email }));
      setMessage('✅ Logged in successfully!');
      router.replace('/');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  return (

     <div className="bg-dark text-white min-vh-100">
        <nav className={`navbar sticky-top shadow-lg rounded-2 text-light navbar-dark bg-dark`}>
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">Recipe.com</span>
          <form className="d-flex align-items-center" role="search">
            
            <Link href="/Addrecipe3" className={`btn btn-sm me-3 btn  rounded-circle`}>
             <img src='/addrecipe.png' style={{width:'40px',height:'40px'}}></img>
            </Link>
           
            <Link href="/Profile" className={`btn btn-sm me-3 btn  rounded-circle`}>
             <img src='/Profile.png' style={{width:'40px',height:'40px'}}></img>
            </Link>
           
          </form>
        </div>
      </nav>

       {/* form */}
    <div className={styles.container}>
    <div className="container py-5" style={{width:'50%'}}>
      <Head>
        <title>Login | Recipe.com</title>
      </Head>
      <h2 className="text-center mb-4">🔐 Sign-in to Recipe.com</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
           {emailError && <p style={{ color: 'red', marginTop: '5px' }}>{emailError}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark mb-3 w-100">Login</button>
        {message && <div className="alert alert-info mt-3">{message}</div>}

        <p>If don't have account? <a href='/sign-up'>Sign-Up</a></p>
      </form>
    </div>
    </div>
    </div>
  );
}