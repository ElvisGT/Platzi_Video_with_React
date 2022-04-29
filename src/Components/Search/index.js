import React,{useRef} from 'react';
import './search.css';
import {connect} from 'react-redux';
import {SearchInput} from '../../actions/index';

const Search = (props) => {
    const inputRef = useRef();
    
    const handleInput = () => {
        props.SearchInput(inputRef.current.value)
    }

    return (
        <section className="main">
            <h2 className="main__title">Que quieres ver hoy?</h2>
            <input  className="search-input" 
                    type="text" 
                    placeholder="Buscar..."
                    onChange={handleInput}
                    ref={inputRef}
            />
        </section>
    );
};

const mapDispatchToProps = {
    SearchInput
};

export default connect(null,mapDispatchToProps)(Search);