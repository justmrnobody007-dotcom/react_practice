import circleBase from '../assets/circle-base.png';
import heartBase from '../assets/heart-base.png';
import squareBase from '../assets/square-base.png';

import marinaraSauce from '../assets/marinara-sauce.png';
import bbqSauce from '../assets/bbq-sauce.png';
import whiteSauce from '../assets/white-sauce.png';
import pestoSauce from '../assets/pesto-sauce.png';

import capsicumImg from '../assets/capsicum.png';
import cornsImg from '../assets/corns.png';
import jalapenosImg from '../assets/jalapenos.png';
import mushroomsImg from '../assets/mushrooms.png';
import olivesImg from '../assets/olives.png';
import paneerImg from '../assets/paneer.png';

export const CRUST_OPTIONS = [
  { id: 'circle', name: 'Classic', price: 100, image: circleBase },
  { id: 'heart', name: 'Thin Crust', price: 120, image: heartBase },
  { id: 'square', name: 'Cheese Burst', price: 160, image: squareBase },
];

export const SAUCE_OPTIONS = [
  { id: 'marinara', name: 'Marinara', price: 30, image: marinaraSauce, tint: 'rgba(214, 40, 40, 0.35)' },
  { id: 'bbq', name: 'BBQ', price: 40, image: bbqSauce, tint: 'rgba(110, 42, 24, 0.4)' },
  { id: 'white', name: 'White Sauce', price: 40, image: whiteSauce, tint: 'rgba(255, 248, 225, 0.55)' },
  { id: 'pesto', name: 'Pesto', price: 50, image: pestoSauce, tint: 'rgba(72, 128, 42, 0.38)' },
];

export const TOPPING_OPTIONS = [
  { id: 'capsicum', name: 'Capsicum', price: 25, image: capsicumImg },
  { id: 'corns', name: 'Corns', price: 25, image: cornsImg },
  { id: 'jalapenos', name: 'Jalapenos', price: 30, image: jalapenosImg },
  { id: 'mushrooms', name: 'Mushrooms', price: 35, image: mushroomsImg },
  { id: 'olives', name: 'Olives', price: 35, image: olivesImg },
  { id: 'paneer', name: 'Paneer', price: 45, image: paneerImg },
];

