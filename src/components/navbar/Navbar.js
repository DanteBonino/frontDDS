import { useState } from 'react';
import IconedButton from '../iconedButton/IconedButton';
import LabeledIcon from '../labeledIcon/LabeledIcon';
import BaseModal from '../Modals/BaseModal/BaseModal';
import FilterModal from '../Modals/FilterModal/FilterModal';
import './Navbar.css';
import SearchBar from './components/SearchBar';
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
import { useFilters } from '../../contexts/filterContext/FilterContext';
import MainSearchButton from './components/MainSearchButton';
import SearchModal from '../Modals/SearchModal/SearchModal';


const Navbar = () => {
  const { resetFiltersDesdeUrl } = useFilters();
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSearchModal, setShowSearchModal]  = useState(false);

  function handleOpenFilterModal () {
    handleOpenModal(setShowFilterModal);
  }

  function handleOpenSearchModal(){
    handleOpenModal(setShowSearchModal);
  }

  function handleOpenModal(someSetter){
    someSetter(prev => !prev);
    resetFiltersDesdeUrl();
  }

  return (
    <>
      <header className="">
        <nav className="navbar navbar-bg">
            <a href='/' id='brand'> Birbnb </a>
            <div className='searchFeaturesContainer'>
              <MainSearchButton onClick={handleOpenSearchModal}/>
              <IconedButton onClick={handleOpenFilterModal} icon={<TuneIcon fontSize='small'/>} label={"Filtros"} clase='filtersDisplayer'/>
            </div>
            <a href="#" className='button'> <span>Log in</span></a>
        </nav>
      </header>
      {
        showFilterModal &&
          <FilterModal onClose={() => setShowFilterModal(false)}/>
      }

      {
        showSearchModal && 
          <SearchModal onClose={() => setShowSearchModal(false)}/>
      }
    </>
  );
};

export default Navbar;


/*
<button className="searchModalDisplayer">
            <SearchIcon fontSize='small'/>
          <span> Empezá tu búsqueda </span>
</button>

<SearchBar displayClass=''/>


*/