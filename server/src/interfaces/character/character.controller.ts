import {Body, Controller, Get, Inject, Param, Post, Put, Res} from '@nestjs/common';
import {Response} from 'express';
import {CharacterService} from '../../application/character/usecase/chracter.service';
import {CharacterRepository} from '../../application/character/repository/character.repository';
import {CharacterEntity} from '../../domain/character/character.entity';

@Controller('api/character')
export class CharacterController {

  constructor(
    private readonly service: CharacterService,
    @Inject('CharacterRepository') private readonly repository: CharacterRepository
  ) {

  }

  @Get()
  public async getCharacterAll(@Res() response: Response) {
    const characterAll = await this.repository.fetchAllCharacter();
    response.send({result: characterAll});
  }

  @Get('/:characterId')
  public async getCharacterById(
    @Res()response: Response,
    @Param('characterId') characterId: string,
  ) {
    const character = await this.repository.fetchCharacterByCharacterId(characterId);
    response.send({result: this.service.characterDataFormatter(character)});
  }

  @Post()
  public async registerCharacter(
    @Res() response: Response,
    @Body() body: CharacterEntity
  ) {
    const character = await this.repository.registerCharacter(body);
    response.send({result: this.service.characterDataFormatter(character)});
  }

  @Put('/:characterId')
  public async updateCharacter(
    @Res() response: Response,
    @Param('characterId') characterId: string,
    @Body() body: CharacterEntity,
  ) {
    const character = await this.repository.updateCharacter(characterId, body);
    response.send({result: this.service.characterDataFormatter(character)});
  }
}
