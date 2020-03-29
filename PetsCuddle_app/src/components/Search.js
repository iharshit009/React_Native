import React, { Component } from 'react';
import {Item, Input} from 'native-base';
import CustomHeader from '../components/CustomHeader';

export default class Search extends Component {
  render() {
    return (
         <Input
         placeholder='Search'
         />
    );
  }
}