import { useState, useEffect } from 'react';

import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [articles, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([articles]);

  console.log('articles', articles);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6141efa40bdb463e8316d190cdbd913f')
      .then(res => res.json())
      .then(json => setProducts(json.articles))
  }, [])

  useEffect(() => {
    const newFilteredProducts = articles.filter((data) => {
      return data.author.toLowerCase().includes(searchField);
    })
    setFilteredProducts(newFilteredProducts);
  }, [articles, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className='App'>
        <h1 className='app-title'>News Api Final</h1>

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='Search Products'
          className={'search-box'}
        />

        <CardList filteredProducts={filteredProducts} />
      </div>
      
  );

}

export default App