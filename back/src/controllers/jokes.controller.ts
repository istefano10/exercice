import { Controller, Param, Get,  } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Joke } from '@interfaces/jokes.interface';
import jokeService from '@services/jokes.service';

@Controller()
export class JokesController {
  public jokeService = new jokeService();

  @Get('/jokes')
  async getJokes() {
    const findAllJokesData: Joke[] = await this.jokeService.findAllJoke();
    return { data: findAllJokesData, message: 'findAll' };
  }

  @Get('/jokes/:id')
  async getJokeById(@Param('id') id: number) {
    const findOneJokeData: Joke[] = await this.jokeService.findJokeById(id);
    return { data: findOneJokeData[0], message: 'ok' };
  }

  @Get('/random')
  async getRandomJoke() {
    console.info('/random called')
    const findAllJokesData: Joke[] = await this.jokeService.getRandomJoke();
    return { data: findAllJokesData[0], message: 'find random joke ok' };
  }
}
