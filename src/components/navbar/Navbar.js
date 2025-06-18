import LabeledIcon from '../labeledIcon/LabeledIcon';
import './Navbar.css';
import SearchBar from './SearchBar';
import SearchIcon from "@mui/icons-material/Search";


const Navbar = () => {
  return (
    <header className="">
      <nav className="navbar navbar-bg">
        <div className='first row'>
          <a href='/' id='brand'> Birbnb </a>
            <SearchBar displayClass='notInMobile'/>
          <a href="#" className='button'> <span>Log in</span></a>
        </div>
        <div className='row second '>
          <SearchBar displayClass='inMobile'/>
          <button className="searchModalDisplayer">
            <SearchIcon fontSize='small'/>
          <span> Empezá tu búsqueda </span>
        </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
