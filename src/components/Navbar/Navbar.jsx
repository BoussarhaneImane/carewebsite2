import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import Button from "../Shared/Button";
import { MdEmojiNature } from "react-icons/md";

const Navbar = ({ handleOrderPopup }) => {
  const location = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [userName, setUserName] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [userName]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchHover = () => {
    setIsSearchHovered(!isSearchHovered);
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
  };

  return (
    <nav className="bg-indigo-950 shadow-sm" >
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center italic text-md ">
              <span className="mr-0 text-white ml-8" id="LOGOT">CareForU</span>
              <MdEmojiNature className="text-xl text-pink-900 ml-0 mr-0" size={40} />
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-5 mr-48">
            <Link to="/" className="text-white" id='nav-link'>Acceuil</Link>
            <Link to="/catalogue" className="text-white" id='nav-link'> Catalogue de produits</Link>
            <Link to="/shop" className="text-white" id='nav-link'>Fiche Produits </Link>
          
            <Link to="/compte" className="text-white" id='nav-link'>Espace client  </Link>

            {userName ? (
              <div className="flex items-center text-white" >
                <span className="mr-1">Welcome</span>
                <FaUser className="mr-1 text-pink-900" /> 
                <span className="text-white">{userName}</span>
                <Link to="/" onClick={handleLogout} className="text-white  ml-4" id='nav-link'>deconnexion</Link>
              </div>
            ) : (
              <>
                <Link to="/register" className="text-white" id='nav-link' >S'inscrire</Link>
                <Link to="/login" className="text-white" id='nav-link'>Connexion</Link>
              </>
            )}
            <Button
              text="contact"
              bgColor="bg-white"
              textColor="text-pink-800"
          
            />
          </div>
          <div className="flex lg:hidden ">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-pink-900 p-2">
              {isMobileMenuOpen ? <FaTimes className='text-white  ' /> : <FaBars />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="ml-10 flex flex-col space-y-2">
              <Link to="/" className="text-white" id='nav-link'>Acceuil</Link>
              <Link to="/about" className="text-white" id='nav-link'> Catalogue de produits</Link>
              <Link to="/shop" className="text-white" id='nav-link'>Fiche Produits </Link>
            
              <Link to="/compte" className="text-white" id='nav-link'>Espace client  </Link>
           
              {userName ? (
              <div className="flex items-center text-white" >
                <span className="mr-1">Welcome</span>
                <FaUser className="mr-1 text-pink-900" /> 
                <span className="text-white">{userName}</span>
             
                <Link to="/" onClick={handleLogout} className="text-white  ml-4" id='nav-link'>deconnexion</Link>
              </div>
            ) : (
              <>
                <Link to="/register" className="text-white" id='nav-link' >S'inscrire</Link>
                <Link to="/login" className="text-white" id='nav-link'>Connexion</Link>
              </>
            )}
         
        
         
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
