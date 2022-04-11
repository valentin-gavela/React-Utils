import React from 'react';
import { Merge } from './Merge';

export default ({ name }) => (
  <Merge text=":) Hello! {placeholder} {placeholder2} {placeholder3}. :)">
    <span onClick={() => alert('click!')} style={{ 'background-color': 'red' }}>
      Click
    </span>
    <span style={{ 'background-color': 'green' }}>my</span>
    <span style={{ 'background-color': 'blue' }}>day</span>
  </Merge>
);
