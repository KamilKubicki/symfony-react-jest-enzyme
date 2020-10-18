import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {describe, it} from "@jest/globals";

import App from './App';

describe('<App \ />', () => {
    it('renders without crashing', () => {
        // Without Enzyme
        // const div = document.createElement('div');
        // ReactDOM.render(<App />, div);

        //Enzyme
        shallow(<App />);
    });
});