import React from 'react';
import { Component } from 'react';
import '../style/App.css';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';


export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
