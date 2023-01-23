import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommitteeService } from './services/committee.service'
import { MemberService } from './services/member.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CommitteeService, MemberService],
})
export class AppModule {}
