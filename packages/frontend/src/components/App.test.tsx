import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {env} from '../../../../scripts/env';

describe('App Component', () => {
  const div = document.createElement('div');

  it('renders without crashing', () => {
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
