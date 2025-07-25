import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ItalianCuisine() {

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');
    const [todaysPick, settodaysPick] = useState(null);

    
      
  const recipes = [
    { name: 'Spaghetti', pic: 'Italian/Spaghetti.png', tags: ['🥦 Veg', '🍔 High-Calorie'],disc:'Simple, high-quality ingredients with a focus on olive oil, pasta, and herbs.', type: 'Veg',cal:'High-Calorie' },
    { name: 'Pizza', pic: 'Italian/Pizza.png', tags: ['🥦 Veg', '🍔 High-Calorie', '👨‍👩‍👧Family Friendly'],disc:'Delicious recipes with rich spices and flavors.', type: 'Veg',cal:'High-Calorie' },
  ];

  const filteredCards = recipes.filter(
    (recipes) =>
      (filter === 'All' || recipes.type === filter || recipes.cal === filter ) &&
      recipes.name.toLowerCase().includes(search.toLowerCase())
  );

   useEffect(() => {
    const pick = recipes[Math.floor(Math.random() * recipes.length)];
    settodaysPick(pick);
  }, []);

   

  return (
    <div className="bg-dark text-white min-vh-100">
        <nav className={`navbar sticky-top shadow-lg rounded-2 text-light navbar-dark bg-dark`}>
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">Recipe.com</span>
          <form className="d-flex align-items-center" role="search">
            <input
              className={`form-control form-control-sm me-3 `}
              type="search"
              placeholder="🔍Search Recipe:"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className={`form-select form-select-sm me-3`}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
              <option value="Under 30 mins">Under 30 mins</option>
              <option value="Low Calorie">Low Calorie</option>
            </select>
            <Link href="/Addrecipe3" className={`btn btn-sm me-3 btn  rounded-circle`}>
             <img src='/addrecipe.png' style={{width:'40px',height:'40px'}}></img>
            </Link>
            <Link href="/sign-in" className={`btn btn-sm me-3 btn  rounded-circle`}>
             <img src='/login.png' style={{width:'40px',height:'40px'}}></img>
            </Link>
            <Link href="/Profile" className={`btn btn-sm me-3 btn  rounded-circle`}>
             <img src='/Profile.png' style={{width:'40px',height:'40px'}}></img>
            </Link>
           
          </form>
        </div>
      </nav>
      {/* Header */}
      <header className="text-center bg-dark text-light py-5 position-relative rounded-2" style={{ background:'#f8f9fa' }}>
        <img style={{width:'1000px',height:'200px',objectFit:'cover'}}
          src="/Italian/Italianback.png"
          alt="Fast Food"
          layout="fill"
          className="z-n1 opacity-50"
        ></img>
        <div style={{position:'relative',marginTop:'-150px',textShadow:'15px 15px 15px black'}} className="position-relative z-1">
          <h1 className="display-4 fw-bold">🇮🇹 Italian Recipe</h1>
          <p className="lead">Simple, high-quality ingredients with a focus on olive oil, pasta, and herbs.</p>
        </div>
      </header>

      {/* Today’s Pick Widget */}
      <section className={`py-4 rounded-2 bg-dark text-light'}`}>
        <div className="container text-center">
          <h2 className="fw-bold">🍳 Today’s Pick</h2>
           {todaysPick && (
           <p>{todaysPick.name} - {todaysPick.disc}</p>
           )}
        </div>
      </section>

      {/* Quick Picks Tags */}
      <section className={`py-2 rounded-2 text-center border-top bg-success text-light`}>
        <div className="container">
          <p className="mb-0">
            <span className="badge bg-danger me-2">🔥 Trending:</span>
             Pizza &nbsp;|&nbsp; 🍴 30-min Meals &nbsp;|&nbsp; 👨‍👩‍👧 Family Friendly &nbsp;|&nbsp; 🥗 Healthy Choices
          </p>
        </div>
      </section>

      {/* Recipe Cards */}
      <div className="container mt-5">
        <div className="row">
          {filteredCards.map((recipes, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card shadow-sm bg-light text-dark h-100">
                <img src={recipes.pic.toLowerCase()} className="card-img-top" alt={recipes.name} style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{recipes.name}</h5>
                  <p className="card-text">{recipes.disc}</p>
                  <p>{recipes.tags.join(' ')}</p>
                   <div className="d-flex justify-content-between align-items-center">
                    <span className="text-warning">⭐ 4.5</span>
                    <span className="small">⏱️ 30 mins</span>
                  </div>
                  <Link href="#" className="btn btn-success btn-sm mt-2">View Recipe</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-center py-3 mt-5">
        <small>© 2025 Recipe.com | Made with ❤️</small>
      </footer>
    </div>
  );
}
