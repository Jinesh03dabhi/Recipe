import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Profile(){
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
     const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');

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

   {/* const filteredCards = recipes.filter(
    (recipes) =>
      (filter === 'All' || recipes.type === filter || recipes.cal === filter ) &&
      recipes.name.toLowerCase().includes(search.toLowerCase())
   );*/}


    if (!user) return null;

    return(
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
            
           
          </form>
          </div>
           </nav>

          <div className='container'>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-2'>
                    <img src='./Profile.png'  style={{width:'75%',height:'150px'}}></img>
                </div>
                <div className='col-md-3' style={{marginTop:'50px'}}><h3>{user.email}</h3></div>
                <div className='col-md-2'>
                <button className="btn btn-outline-danger btn-sm mt-5 ms-0 me-5" onClick={handleLogout}>Sign-Out</button>
            </div>
            </div>
        </div>
          

      </div>        
    );

}