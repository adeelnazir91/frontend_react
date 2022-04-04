import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';


function MedicSpotSearchBar() {

    const [searchData, setSearchData] = useState([])
    const [inputValue, setInputValue] = useState('')

    console.log(inputValue);

    const getsearchResult = async () => {
        const resp = await fetch(`http://localhost:50001/api/location?q=${inputValue}`)
        const data = await resp.json()
        //console.log("api response", data)
        setSearchData(data)
    }

    useEffect(() => {
        getsearchResult()
    }, [])

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

   // console.log(inputValue);


    return (
        <div className='main-wrapper' data-testid='medicspot-test'>
            {searchData ?
                <div className='searhBox px-2'>

                    <Autocomplete
                        id="custom-input-demo"
                        options={searchData}
                        getOptionLabel={(option) => option.name}
                        name="search"
                        noOptionsText={'No locations found'}
                        onInputChange={handleInputChange}
                        renderInput={(params) => (
                            <div ref={params.InputProps.ref}>
                                <input type="text" {...params.inputProps} className='form-control searchInput' placeholder="Searh locations..." />
                            </div>
                        )}
                    >
                    </Autocomplete>

                    <div className='searchIcon'>
                        <SearchIcon className='search-icon' />
                    </div>


                </div>
                : <div><p>Please wait...</p></div>
            }

        </div>
    );
}

export default MedicSpotSearchBar;