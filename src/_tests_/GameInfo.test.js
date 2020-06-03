import React from 'react';
import {cleanup, render} from '@testing-library/react';
import GameInfo from '../components/GameInfo';

afterEach(cleanup);

it('GameInfo Component Check Text in Div is Present', () => {
    const {getByTestId } = render(
      <GameInfo gameState="stale" labelOff="unkown" />,
    );
  
    expect(getByTestId(/player1/i).textContent).toBe("Player");

  });