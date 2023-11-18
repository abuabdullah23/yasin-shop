
const Search = ({ setPerPage, searchValue, setSearchValue }) => {
    return (
        <div className='flex justify-between items-center'>
            {/* <select
                onChange={(e) => setPerPage(parseInt(e.target.value))}
                className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none bg-[#283046] rounded-md text-slate-700'>
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="25">25</option>
            </select> */}
            <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className='px-4 py-2 border border-slate-700 focus:border-indigo-500 outline-none rounded-md text-slate-700' type="text" placeholder='search' />
        </div>
    );
};

export default Search;