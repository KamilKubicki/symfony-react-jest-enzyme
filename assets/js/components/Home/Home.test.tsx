import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {describe, it} from "@jest/globals";

import Home from './Home';

describe('<Layout />', () => {
    it('renders without crashing', () => {
        // Without Enzyme
        // const div = document.createElement('div');
        // ReactDOM.render(<Home />, div);

        //Enzyme
        shallow(<Home />);
    });
});