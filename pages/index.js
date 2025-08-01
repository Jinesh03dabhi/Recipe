import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
//import '../styles/globals.css';
import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function Home() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [todaysPick, settodaysPick] = useState(null);

 
  const cards = [
    { name: 'Indian', desc: 'Delicious Indian recipes with rich spices and flavors.', type:'OurChoice',type2:'Best-Recommend' },
    { name: 'American', desc: 'Classic American burgers, fries, and BBQ goodness.', type:'OurChoice',type2:'Best-Recommend' },
    { name: 'Italian', desc: 'Pasta, pizza, and everything Italian.',type:'Best-Recommend' },
    { name: 'Chinese', desc: 'Stir-fries, dumplings, and wok wonders.', type:'OurChoice',type2:'Best-Recommend' },
    { name: 'Mexican', desc: 'Stir-fries, dumplings, and wok wonders.'},
    { name: 'French', desc: ' Elegant, luxurious dishes with rich sauces and refined cooking techniques.'},
    { name: 'Thai', desc: 'Stir-fries, dumplings, and wok wonders.',type:'Majorly Non-Veg' },
    { name: 'Middle-Eastern', desc: 'Stir-fries, dumplings, and wok wonders.',type:'Best-Recommend' },
    { name: 'Japanese', desc: ' Sushi, Ramen, Bento ,Tempura and Mochi.',type:'Majorly Non-Veg' }
  ];

  const filteredCards = cards.filter(
    (card) =>
      (filter === 'All' || card.type === filter || card.type2 === filter) &&
      card.name.toLowerCase().includes(search.toLowerCase())
  );

   useEffect(() => {
    const pick = cards[Math.floor(Math.random() * cards.length)];
    settodaysPick(pick);
  }, []);

  if (!todaysPick) return null; 


  return (
    <div className={`min-vh-100 bg-dark text-light ${poppins.className}`}>
      <Head>
        <title>Recipe.com - Explore Fast Food Recipes</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Sticky Navbar */}
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
              <option value="OurChoice">OurChoice</option>
              <option value="Best-Recommend">Best-Recommend</option>
              <option value="Majorly Non-Veg">Majorly Non-Veg</option>
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

      {/* Hero Section */}
      <header className="text-center bg-dark text-light py-5 position-relative rounded-2" style={{ background:'#f8f9fa' }}>
        <img style={{width:'1000px',height:'200px',objectFit:'cover'}}
          src="/titleimg.png"
          alt="Fast Food"
          layout="fill"
          className="z-n1 opacity-10"
        ></img>
        <div style={{position:'relative',marginTop:'-150px',textShadow:'15px 15px 15px black'}} className="position-relative z-1">
          <h1 className="display-4 fw-bold">Recipe.com</h1>
          <p className="lead">Learn and add recipe from <strong>Recipe.com</strong></p>
        </div>
      </header>

      {/* Today’s Pick Widget */}
      <section className={`py-4 rounded-2 bg-dark text-light'}`}>
        <div className="container text-center">
          <h2 className="fw-bold">🍳 Today’s Pick</h2>
           {todaysPick && (
           <p>{todaysPick.name} - {todaysPick.desc}</p>
           )}
        </div>
      </section>

      {/* Cuisine Selector */}
      <section className={`rounded-2 text-light bg-dark py-4`}>
        <div className="container">
          <div className="row text-center g-3 justify-content-center">
            {["Indian", "Chinese", "American", "Italian", "French","Mexican", "Middle-Eastern", "Thai","Japanese"].map((cuisine, i) => (
              <div className="col-4 col-md-1" key={i}>
                <div className={`p-2 rounded-circle shadow 'bg-light'}`} style={{ transition: 'transform 0.3s ease' }}>
                 
                 <a href={`/${cuisine}`}> <img
                    src={`/images/${cuisine}.jpg`}
                    alt={cuisine}
                    className="rounded-circle img-fluid border"
                    style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                  /></a>
               
                </div>
                <p className={`mt-1 small fw-medium 'text-dark'}`}>{cuisine}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Picks Tags */}
      <section className={`py-2 rounded-2 text-center border-top bg-success text-light`}>
        <div className="container">
          <p className="mb-0">
            <span className="badge bg-danger me-2">🔥 Trending:</span>
            Butter Chicken, Tacos, Dosa &nbsp;|&nbsp; 🍴 30-min Meals &nbsp;|&nbsp; 👨‍👩‍👧 Family Friendly &nbsp;|&nbsp; 🥗 Healthy Choices
          </p>
        </div>
      </section>

      {/* Featured Cuisine Cards */}
      <section className="container py-5">
        <div className="row g-4">
          {filteredCards.map((card, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div
                className={`card h-100 border-0 'text-dark'}`}
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                }}
              >
               <a href={`/${card.name}`}> <img
                  src={`/images/${card.name}.jpg`}
                  className="card-img-top"
                  alt={card.name}
                  style={{ height: '180px', objectFit: 'cover' }}
                /></a>
                <div className="card-body" >
                  <h5 className="card-title fw-bold" style={{textShadow:'7px 7px 15px #c5c0bf '}}>{card.name}</h5>
                  <p className="card-text">{card.desc}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-warning">⭐ 4.5</span>
                    <span className="small">⏱️ 30 mins</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-dark text-light text-center py-3 rounded-2`}>
        <small>&copy; 2025 Recipe.com | Made with ❤️ for food lovers</small>
      </footer>
    </div>
  );
}
