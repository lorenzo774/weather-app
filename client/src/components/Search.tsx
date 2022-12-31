import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type SearchProps = {
    onSearch: (city: string, country: string) => void;
};

const Search = ({ onSearch }: SearchProps) => {
    const [city, setCity] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    const triggerSearch = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
        if (key === "Enter") {
            onSearch(city, country);
        }
    };

    return (
        <div className="search-bar">
            <div className="fields">
                <div className="field">
                    <label htmlFor="city">City</label>
                    <input
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={triggerSearch}
                        name="city"
                    />
                </div>
                <div className="field">
                    <label htmlFor="country">Country</label>
                    <input
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={triggerSearch}
                        name="country"
                    />
                </div>
            </div>
            <FontAwesomeIcon
                onClick={() => onSearch(city, country)}
                icon={faSearch}
            />
        </div>
    );
};

export default Search;
