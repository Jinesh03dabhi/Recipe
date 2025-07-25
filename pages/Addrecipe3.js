// pages/add-recipe.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function AddRecipe() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.replace('/sign-in');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.replace('/sign-in');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Recipe submitted (you can store this in Firebase later)');
    // Here you can save the image + recipe to Firebase or localStorage
  };

  if (!user) return null;

  return (

    
     <div className="bg-dark text-white min-vh-100">
        <nav className={`navbar sticky-top shadow-lg rounded-2 text-light navbar-dark bg-dark`}>
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">Recipe.com</span>
          <form className="d-flex align-items-center" role="search">
            
            
            <Link href="/sign-in" className={`btn btn-sm me-3 btn  rounded-circle`}>
             <img src='/login.png' style={{width:'40px',height:'40px'}}></img>
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
      
      <h2 className="text-center mb-4">➕ Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded bg-dark">
        <div className="mb-3 bg-dark">
          <label className="form-label">Recipe Title</label>
          <input type="text" className="form-control"  placeholder="e.g., Veg Biryani" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Recipe From</label>
          <select className="form-select" required>
            <option value="">Select Type</option>
            <option value="Veg">🇮🇳 Indian</option>
            <option value="Non-Veg">🇺🇸 American</option>
            <option value="Non-Veg">🇨🇳 Chinese</option>
            <option value="Non-Veg">🇯🇵 Japanese</option>
            <option value="Non-Veg">🇮🇹 Italian</option>
            <option value="Non-Veg">🇲🇽 Mexican</option>
            <option value="Non-Veg">🇫🇷 French</option>
            <option value="Non-Veg">🇹🇭 Thai</option>
            <option value="Non-Veg">Middle Eastern</option>
          
          </select>
        </div>
         <div className="mb-3">
          <label className="form-label">Veg/Non-Veg</label>
          <select className="form-select" required>
            <option value="">Veg/Non-Veg</option>
            <option value="Veg">🥦 Veg</option>
            <option value="Non-Veg">🍗 Non-Veg</option>
          </select>
        </div>
         <div className="mb-3">
          <label className="form-label">Calorie-Tags (Optional)</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="lowCalorie" />
            <label className="form-check-label" htmlFor="lowCalorie">🍃 Low-Calorie(e.g.,Approx around 300-400 calories.) </label>
          </div>
           <div className="form-check">
            <input className="form-check-input" type="checkbox" id="lowCalorie" />
            <label className="form-check-label" htmlFor="lowCalorie">🍽️ Moderate-Calorie(e.g.,Approx around 500-600 calories.)</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="familyFood" />
            <label className="form-check-label" htmlFor="familyFood">🍔 High-Calorie(e.g.,Approx 700 calories or more.)</label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Tags (Optional)</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="lowCalorie" />
            <label className="form-check-label" htmlFor="lowCalorie">🥗 Healthy Choices</label>
          </div>
           <div className="form-check">
            <input className="form-check-input" type="checkbox" id="lowCalorie" />
            <label className="form-check-label" htmlFor="lowCalorie">😋 Testy Choices</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="familyFood" />
            <label className="form-check-label" htmlFor="familyFood">👨‍👩‍👧Family Friendly</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="quickMeal" />
            <label className="form-check-label" htmlFor="quickMeal">⏱️Under 30 Minutes</label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <textarea className="form-control" rows="4" placeholder="e.g., Rice, Spices, Veggies..." required />
        </div>
        <div className="mb-3">
          <label className="form-label">Steps</label>
          <textarea className="form-control" rows="5" placeholder="Step-by-step instructions..." required />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
        </div>
        {preview && (
          <div className="text-center mb-3">
            <img src={preview} alt="Preview" style={{ maxWidth: '300px', borderRadius: '8px' }} />
          </div>
        )}
        <button type="submit" className="btn btn-success mb-3 w-100">Submit Recipe</button>

        <div className="d-flex justify-content-between align-items-center ms-5 mb-3 me-0">
        <h6>👋 Welcome, {user.email}</h6>
        <button className="btn btn-outline-danger btn-sm ms-0 me-5" onClick={handleLogout}>Sign-Out</button>
      </div>
      </form>
    </div>
    </div>
    </div>
  );
}
