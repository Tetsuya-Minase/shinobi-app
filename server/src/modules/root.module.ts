import {Module} from '@nestjs/common';
import {RootController} from '../root.controller';
import {CharacterModule} from './character.module';

@Module({
  imports: [CharacterModule],
  controllers: [RootController],
  providers: [],
})
export class RootModule {
}
