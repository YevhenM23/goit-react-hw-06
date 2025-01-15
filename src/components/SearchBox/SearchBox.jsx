import { Field, Form, Formik } from "formik";
import s from './Search.module.css'

const SearchBox = ({ filter, onFilterChange }) => {
    const handleSearch = values => {
        onFilterChange(values.search)
    }

    return (
        <Formik initialValues={filter} onSubmit={handleSearch}>
            {() => (
                <Form>
                    <label className={s.searchInput}>
                        <span className={s.searchText}>Find contacts by name</span>
                    <Field
                            id='search'
                            name='search'
                            type='text'
                            onChange={(e) => onFilterChange(e.target.value)}
                    ></Field>
                    </label>
                    
                        
                </Form>
            
            )
            }

        </Formik>
    
    );
};

export default SearchBox;