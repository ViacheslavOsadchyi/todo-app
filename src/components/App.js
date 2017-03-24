import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import  testStore from '../test-store.js';
import AddTodo from './AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './presentationals/Footer';

function App ( props ){
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

testStore();

export default App;
