import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MemberController } from './member.controller';
import { CommiteeController } from './committee.controller';
import { MemberOnCommitteeController } from './member_on_committee.controller';
import { PrismaService } from './database/prisma.service'
import { CommitteeService } from './services/committee.service'
import { MemberService } from './services/member.service'
import { MemberOnCommitteeService } from './services/member_on_committee.service'


@Module({
  imports: [],
  controllers: [AppController, MemberController, CommiteeController, MemberOnCommitteeController],
  providers: [PrismaService, CommitteeService, MemberService, MemberOnCommitteeService],
})
export class AppModule {}
