import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {describe, it, expect} from "@jest/globals";

import Home from './Home';

describe('<Home />', () => {
    it('renders without crashing', () => {
        // Without Enzyme
        // const div = document.createElement('div');
        // ReactDOM.render(<Home />, div);

        //Enzyme
        shallow(<Home />);
    });

    //Dummy test
    it('dummy test', () => {
        expect(1).toBe(1);
    });
});