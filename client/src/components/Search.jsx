import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }

  onChangeHandler(e) {
    this.setState({
      input: e.target.value
    })
  }


  render() {
    return (
      <form className="searchBar">
        <input type="text" placeholder='Search...' onChange={this.onChangeHandler.bind(this)} />
        <button type="button" onClick={() => this.props.searchClickHandler(this.state.input)} >Go!</button>
      </form>
    )
  }
}

export default Search;