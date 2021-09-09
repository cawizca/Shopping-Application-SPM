import {UilSearch} from "@iconscout/react-unicons";

export default function SearchIcon() {
    return(
        <div className="search-box">
            <input type="text" name="" className="search-txt" placeholder="Serach..."/>
            <a className="search-button">
                <UilSearch color="#B7B6B6"/>
            </a>
        </div>
    );
}