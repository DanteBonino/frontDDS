import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css"

const SearchBar = ({displayClass = ""}) =>{
    return (
        <search className= { `searchBarContainer ${displayClass}`}>
            <form className='searchBar'>
                <div className="searchFilter">
                    <label className='searchInputLabel'>Check-in</label>
                    <input className="searchInput" type="text" readOnly={true} autoComplete="off" placeholder="¿Cuándo?"></input>
                </div>
                <div className="searchFilter">
                    <label className='searchInputLabel'>Check-out</label>
                    <input className="searchInput" type="text" readOnly={true} autoComplete="off" placeholder="¿Cuándo?"></input>
                </div>
                <div className="searchButtonContainer">
                    <div className='searchFilter lastFilter'>
                        <label className='searchInputLabel'>Viajeros</label>
                        <input className="searchInput" type="text" readOnly={true} autoComplete="off" placeholder="¿Cuántos?"></input>
                    </div>
                    <button>
                        <SearchIcon fontSize="medium" style={{color:"white"}}></SearchIcon>
                    </button>
                </div>
            </form>
        </search>
    )
}

export default SearchBar