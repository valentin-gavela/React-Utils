import React from 'react';

import { Merge } from './components/Merge';

export const Hello = () => (
  <Merge text=":) Hello! {placeholder} {placeholder2} {placeholder3}. :)">
    <span onClick={() => alert('click!')} style={{ 'background-color': 'red' }}>
      Click
    </span>
    <span style={{ 'background-color': 'green', color: 'white' }}>my</span>
    <span style={{ 'background-color': 'blue', color: 'yellow' }}>day</span>
  </Merge>
);
