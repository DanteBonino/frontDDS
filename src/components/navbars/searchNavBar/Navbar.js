import { useState } from 'react';
import IconedButton from '../../iconedButton/IconedButton';
import LabeledIcon from '../../labeledIcon/LabeledIcon';
import BaseModal from '../../Modals/BaseModal/BaseModal';
import FilterModal from '../../Modals/FilterModal/FilterModal';
import './Navbar.css';
import SearchBar from './components/SearchBar';
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from '@mui/icons-material/Tune';
import { useFilters } from '../../../contexts/filterContext/FilterContext';
import MainSearchButton from './components/MainSearchButton';
import SearchModal from '../../Modals/SearchModal/SearchModal';
import { createCssClass } from '../../../utils/utils';
import BrandedNavbar from '../genericNavbar/genericNavbar';
import { useModal } from '../../../contexts/modalContext/ModalContext';


const SearchNavBar = () => {
  const { resetFiltersDesdeUrl } = useFilters();
  const {openModal, closeModal} = useModal();

  function handleOpenFilterModal () {
    openModal(<FilterModal closeModal={closeModal}/>)
  }

  function handleOpenSearchModal(){
    openModal(<SearchModal closeModal={closeModal}/>);
  }

  function handleOpenModal(someSetter){
    someSetter(prev => !prev);
    resetFiltersDesdeUrl();
  }

  return (
    <>
      <BrandedNavbar pageClassname='homePage'>
        <div className='searchFeaturesContainer'>
          <MainSearchButton onClick={handleOpenSearchModal}/>
          <IconedButton onClick={handleOpenFilterModal} icon={<TuneIcon fontSize='small'/>} label={"Filtros"} clase='filtersDisplayer'/>
        </div>
      </BrandedNavbar>
      {/*
        showFilterModal &&
          <FilterModal onClose={() => setShowFilterModal(false)}/>
      */
      }

      {/*
        showSearchModal && 
          <SearchModal onClose={() => setShowSearchModal(false)}/>
      */}
    </>
  );
};

export default SearchNavBar;


/*
<button className="searchModalDisplayer">
            <SearchIcon fontSize='small'/>
          <span> Empezá tu búsqueda </span>
</button>

<SearchBar displayClass=''/>


*/