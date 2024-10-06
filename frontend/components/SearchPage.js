import React, { useState } from 'react';
import SearchFilter from '../components/SearchFilter';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (searchData) => {
        const response = await fetch('/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(searchData),
        });

        const results = await response.json();
        setSearchResults(results);
    };

    return (
        <div>
            <h1>Search Users</h1>
            <SearchFilter onSearch={handleSearch} />
            
            <div>
                {searchResults.length > 0 ? (
                    searchResults.map(user => (
                        <div key={user._id}>
                            <p>{user.name}</p>
                            <p>Age: {user.age}</p>
                            <p>Interests: {user.interests.join(', ')}</p>
                        </div>
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
