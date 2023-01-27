import { Module } from '@nestjs/common';
import { MemberController } from './controllers/member.controller';
import { CommiteeController } from './controllers/committee.controller';
import { MemberOnCommitteeController } from './controllers/member_on_committee.controller';
import { PrismaService } from './database/prisma.service';
import { CommitteeService } from './services/committee.service';
import { MemberService } from './services/member.service';
import { MemberOnCommitteeService } from './services/member_on_committee.service';

@Module({
   imports: [],
   controllers: [MemberController, CommiteeController, MemberOnCommitteeController],
   providers: [PrismaService, CommitteeService, MemberService, MemberOnCommitteeService],
})
export class AppModule {}
