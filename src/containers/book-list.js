import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from  '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //what ever is return will show up as props inside of BookList
  //state contains the array of books and active books

  return {
    books: state.books
  };
}
//anything returned from this function will end up as a props on the BookList
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({
    selectBook: selectBook }, dispatch);
}
// promote BookList from a component to a container
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
