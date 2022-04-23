import { Select } from 'antd';

const { Option } = Select;

function FilterMovies(props) {
    console.log(`props.filterMoviesClick`, props.filterMoviesClick);

    function handleChange(value) {
        console.log(`selected ${value}`);
        props.filterMoviesClick(value)
    }
    return (
        <>
            <div className="filter">
                <Select defaultValue="movies" className="select-filter" onChange={handleChange}>
                    <Option value="movies">Movies</Option>
                    <Option value="tv">TV</Option>
                    <Option value="person">Person</Option>
                </Select>
            </div>
        </>
    );
}

export default FilterMovies;