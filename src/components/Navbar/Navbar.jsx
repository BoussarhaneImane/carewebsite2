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
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center italic text-md text-amber-700">
              <span className="mr-0 text-green-800 ml-8" id="LOGOT">CareForU</span>
              <MdEmojiNature className="text-xl text-amber-600 mr-0" size={40} />
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-5">
            <Link to="/" className="text-green-800" id='nav-link'>Acceuil</Link>
            <Link to="/catalogue" className="text-green-800" id='nav-link'> Catalogue de produits</Link>
            <Link to="/shop" className="text-green-800" id='nav-link'>Fiche Produits </Link>
          
            <Link to="/compte" className="text-green-800" id='nav-link'>Espace client  </Link>

            {userName ? (
              <div className="flex items-center">
                <span className="mr-1">Welcome</span>
                <FaUser className="mr-1" /> 
                <span className="text-black">{userName}</span>
                <Link to="/" onClick={handleLogout} className="text-amber-600" id='nav-link'>Logout</Link>
              </div>
            ) : (
              <>
                <Link to="/register" className="text-amber-600 " id='nav-link'>Sign Up</Link>
                <Link to="/login" className="text-amber-600 " id='nav-link'>Log In</Link>
              </>
            )}
            <Button
              text="CareForU"
              bgColor="bg-amber-600"
              textColor="text-white"
          
            />
          </div>
          <div className="flex lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-amber-800">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="ml-10 flex flex-col space-y-2">
              <Link to="/" className="text-green-900" id='nav-link'>Acceuil</Link>
              <Link to="/about" className="text-green-900" id='nav-link'> Catalogue de produits</Link>
              <Link to="/shop" className="text-green-900" id='nav-link'>Fiche Produits </Link>
              <Link to="/panier" className="text-green-900" id='nav-link'> Panier </Link>
              <Link to="/compte" className="text-green-900" id='nav-link'>Espace client  </Link>
              <Button
                text="Contact Us"
                bgColor="bg-orange-600"
                textColor="text-stone-50"
                
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
