import React from 'react';

import { Merge } from './components/Merge';
import { Raw } from './components/RawHtml';

const htmlString = "<p> I'm a purified html string </p>";

export const Hello = () => (
  <div>
    <Merge text=":) Hello! {placeholder} {placeholder2} {placeholder3}. :)">
      <span
        onClick={() => alert('click!')}
        style={{ 'background-color': 'red' }}
      >
        Click
      </span>
      <span style={{ 'background-color': 'green', color: 'white' }}>my</span>
      <span style={{ 'background-color': 'blue', color: 'yellow' }}>day</span>
    </Merge>

    <Raw>{htmlString}</Raw>
  </div>
);
