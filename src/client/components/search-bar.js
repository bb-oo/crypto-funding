import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import faSearch from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import axios from 'axios';

const SearchBox = styled.input`
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  width: 100px;
  background: #f1f1f1;
  display: inline-block;
  margin-left: 20px;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  color: black;
  margin-left: 3px;

  &:hover {
    cursor: pointer;
  }
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {inputVal: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const data = await axios.get(`/search/campaigns/${this.state.inputVal}`);
    const result = await data.json();
    console.log(result)
  }

  handleChange(e) {
    this.setState((prevState, props) => {
      inputVal: e.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar onChange={ this.handleChange } type="text" value={ this.state.inputVal } placeholder="Search campaigns..."/><SearchIcon icon={ faSearch } onClick={ this.handleClick }/>
      </React.Fragment>
    );
  }
}

export default SearchBar;