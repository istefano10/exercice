import { Joke } from '@interfaces/jokes.interface';
const jokeModel = require('../models/joke');

class JokeService {

  public async findAllJoke() {
    const jokes: Joke[] = await jokeModel.listJokes();
    return jokes;
  }

  public async findJokeById(id: number) {
    const findJoke: Joke[] = await jokeModel.getJokeById(id);
    return findJoke;
  }

  public async getRandomJoke() {
    const jokes: Joke[] = await jokeModel.getRandomJoke();
    return jokes;
  }
}

export default JokeService;
