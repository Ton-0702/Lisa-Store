import { styled } from "styled-components";
import search_icon from "../../assets/icon.svg"
const SearchInput = styled.div`
    width: 250px;
    height: 40px;
    position: relative;
    
    .search-Icon {
        font-size: 15px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0%, -50%);
    }
    .search-Input{
        width: 100%;
        height: 100%;
        border: none;
        text-indent: 40px;
        background-color: unset;
        outline: ${props => props.outlinesearch};
    }

    @media (max-width: 1400px) {
        
    }
    @media (max-width: 1200px) {
       
    }
    @media (max-width: 992px) {
        
    }   
    @media (max-width: 768px) {
    }   
    @media (max-width: 576px) {
        width:150px;
       
    }    

`

export const Search = ({imgpic, outlinesearch}) => {
    return (
        <SearchInput
        outlinesearch = {outlinesearch}
        >
            <input className="search-Input"></input>
            <img src={imgpic} alt="look" className="search-Icon" />
            
        </SearchInput>
    )
}

Search.defaultProps = {
    imgpic: search_icon,
    outlinesearch: "none",
}