/// <reference types="cypress" />

import {Button} from './Button';

describe('Button.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<Button text="Button Text" />)
  })
})