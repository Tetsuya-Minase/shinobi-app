import {HttpModule, Module} from '@nestjs/common';
import {CharacterController} from '../interfaces/character/character.controller';
import {CharacterService} from '../application/character/usecase/chracter.service';
import {CharacterRepository} from '../application/character/repository/character.repository';
import {CharacterRepositoryImpl} from '../interfaces/character/character.repository-impl';
import {ConnectDb} from '../infrastructure/connect-db';
import {HttpRequest} from '../infrastructure/http-request';

@Module({
  imports: [HttpModule],
  controllers: [CharacterController],
  providers: [
    CharacterService,
    {
      provide: 'CharacterRepository',
      useClass: CharacterRepositoryImpl,
    },
    ConnectDb,
    HttpRequest
  ],
})
export class CharacterModule {
}
