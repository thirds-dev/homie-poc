import random from "./random";

const joke = () => random();
joke.random = random;

export default joke;
