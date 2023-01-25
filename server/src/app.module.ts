import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MemberController } from './member.controller';
import { CommiteeController } from './committee.controller';
import { MemberOnCommitteeController } from './member_on_committee.controller';
import { CommitteeService } from './services/committee.service'
import { MemberService } from './services/member.service'


@Module({
  imports: [],
  controllers: [AppController, MemberController, CommiteeController, MemberOnCommitteeController],
  providers: [CommitteeService, MemberService],
})
export class AppModule {}
