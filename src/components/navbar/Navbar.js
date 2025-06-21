import { useState } from 'react';
import IconedButton from '../iconedButton/IconedButton';
import LabeledIcon from '../labeledIcon/LabeledIcon';
import BaseModal from '../Modals/BaseModal/BaseModal';
import FilterModal from '../Modals/FilterModal/FilterModal';
import './Navbar.css';
import SearchBar from './SearchBar';
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
import { useFilters } from '../../contexts/filterContext/FilterContext';


const Navbar = () => {
  const { resetFiltersDesdeUrl } = useFilters();
  const [showFilterModal, setShowFilterModal] = useState(false);

  function handleOpenModal () {
    setShowFilterModal(prev => !prev);
    resetFiltersDesdeUrl();
  }

  return (
    <>
      <header className="">
        <nav className="navbar navbar-bg">
            <a href='/' id='brand'> Birbnb </a>
            <div className='searchFeaturesContainer'>
              <button className="searchModalDisplayer iconedButton">
                <SearchIcon fontSize='small'/>
                <span> Empezá tu búsqueda </span>
              </button>
              {/* Acá estaba la searchBar */}
              <IconedButton onClick={handleOpenModal} icon={<TuneIcon fontSize='small'/>} label={"Filtros"} clase='filtersDisplayer'/>
            </div>
            <a href="#" className='button'> <span>Log in</span></a>
        </nav>
      </header>
      {
        showFilterModal &&
          <BaseModal
            onClose = {() => setShowFilterModal(false)}
            title='Filtros'
          >
            <FilterModal/>
          </BaseModal>
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