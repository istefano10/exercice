import { IsNumber, IsString } from 'class-validator';

export class CreateJokeDto {
  
  @IsNumber()
  public id: number;

  @IsString()
  public type: string;

  @IsString()
  public setup: string;

  @IsString()
  public punchline: string;

}
