/// <reference types="cypress" />
import {mount} from 'cypress/react';
import {Button} from './Button';

describe('Button.cy.tsx', () => {
  it('button component renders text properly', () => {
    mount(<Button text="Button Text" />);
    cy.contains("Button Text");
  })
  it('onClick handler of button is callable', () => {
    const onButtonClickSpy = cy.spy().as('onButtonClickSpy');
    mount(<Button text="Button Text" onClick={onButtonClickSpy}/>);
    cy.contains("Button Text").click();
    cy.get('@onButtonClickSpy').should('have.been.calledOnce');
  })
})