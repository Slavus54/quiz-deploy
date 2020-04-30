import React from 'react';
import All from './All/All';
import Quiz from './Quiz/Quiz';
import Menu from './Menu/Menu';
import Second from './Second/Second';
import First from './First/First';

export default function App () {
	
  return (
      <All>
 	  <Menu>
 	  </Menu>
 	  <Second/>
 	  <First nameMe="Вячеслав"/>
      <Quiz name="дешёвка" val="!"/>
      </All>
  );
}