import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Logo from '../Logo';

const renderer = ReactTestUtils.createRenderer();
renderer.render(<Logo/>);
const result = renderer.getRenderOutput();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Logo/> , div);
});

it('renders a div with class logo-container', () => {
	expect(result.type).toBe('div');
	expect(result.props.className).toBe('logo-container');
});

const logo = result.props.children;

test('logo is an img with class logo', () => {
	expect(logo.type).toBe('img');
	expect(logo.props.className).toBe('logo');
});
