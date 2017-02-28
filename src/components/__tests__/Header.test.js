import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Header from '../Header';
import Logo from '../Logo';

const renderer = ReactTestUtils.createRenderer();
renderer.render(<Header/>);
const result = renderer.getRenderOutput();

it('renders a header', () => {
	expect(result.type).toBe('header');
});

const header = ReactTestUtils.renderIntoDocument(<Header logo='http://lorempixel.com/400/200' name="Waffle Fries"/>);

it('contains a logo container', () => {
	let logo = ReactTestUtils.findRenderedDOMComponentWithClass(header, 'logo-container');
});

it('contains a logo image', () => {
	let img = ReactTestUtils.findRenderedDOMComponentWithClass(header, 'logo');
});

it('contains a name h2', () => {
	let name = ReactTestUtils.findRenderedDOMComponentWithClass(header, 'name');
});