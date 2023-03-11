import { Module } from '@nestjs/common';
import { MemberController } from './controllers/member.controller';
import { CommitteeController } from './controllers/committee.controller';
import { MemberOnCommitteeController } from './controllers/member_on_committee.controller';
import { PrismaService } from './database/prisma.service';
import { CommitteeService } from './services/committee.service';
import { MemberService } from './services/member.service';
import { MemberOnCommitteeService } from './services/member_on_committee.service';
import { CommitteeTemplateController } from './controllers/committee_template.controller';
import { CommitteeTemplateService } from './services/committee_template.service';

@Module({
   imports: [],
   controllers: [
      MemberController,
      CommitteeController,
      MemberOnCommitteeController,
      CommitteeTemplateController,
   ],
   providers: [
      PrismaService,
      CommitteeService,
      MemberService,
      MemberOnCommitteeService,
      CommitteeTemplateService,
   ],
})
export class AppModule {}
