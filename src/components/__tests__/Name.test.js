import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Name from '../Name';

const renderer = ReactTestUtils.createRenderer();
renderer.render(<Name name="Kia's House"/>);
const result = renderer.getRenderOutput();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Name/> , div);
});

it('renders an h2 with the given text', () => {
	expect(result.type).toBe('h2');
	expect(result.props.children).toBe("Kia's House");
});