import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../database/prisma.service"
import { DataFactory } from "../database/data.factory"
import { MemberOnCommitteeService } from "./member_on_committee.service"

describe("MemberOnCommitteeService", () => {
    let memberOnCommitteeService: MemberOnCommitteeService;
    let prismaService: PrismaService;

    const factory = new DataFactory();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MemberOnCommitteeService, PrismaService],
        }).compile();

        memberOnCommitteeService = module.get<MemberOnCommitteeService>(MemberOnCommitteeService);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    describe("create", () => {
        it("should call prismaService.create", async () => {
            jest.spyOn(prismaService.memberOnCommittee, "create").mockImplementationOnce((): any => undefined);

            const memberOnCommittee = factory.newMockMemberOnCommitteeWithId();

            await memberOnCommitteeService.create({
                ...memberOnCommittee,
                member: { connect: { id: memberOnCommittee.member_id }},
                committee: { connect: { id: memberOnCommittee.committee_id }},
              }
            );

            expect(prismaService.memberOnCommittee.create).toBeCalled();
        });
    });

    describe("findById", () => {
        it("should call prismaService.findUnique", async () => {
            jest.spyOn(prismaService.memberOnCommittee, "findUnique").mockImplementationOnce(
                (): any => undefined,
            );

            const memberOnCommittee = factory.newMockMemberOnCommitteeWithId();

            await memberOnCommitteeService.memberOnCommittee(
              memberOnCommittee.member_id,
              memberOnCommittee.committee_id
            );

            expect(prismaService.memberOnCommittee.findUnique).toBeCalled();
        });
    });

    describe("update", () => {
        it("should call prismaService.update", async () => {
            jest.spyOn(prismaService.memberOnCommittee, "update").mockImplementationOnce((): any => undefined);
            
            const memberOnCommittee = factory.newMockMemberOnCommitteeWithId();

            await memberOnCommitteeService.update({ 
              where: { 
                member_id_committee_id: {
                  member_id: memberOnCommittee.member_id,
                  committee_id: memberOnCommittee.committee_id
                }
              },
              data: { observations: "Updated observations" }}
            );

            expect(prismaService.memberOnCommittee.update).toBeCalled();
        });
    });

    describe("delete", () => {
        it("should call prismaService.delete", async () => {
            jest.spyOn(prismaService.memberOnCommittee, "delete").mockImplementationOnce((): any => undefined);
            
            const memberOnCommittee = factory.newMockMemberOnCommitteeWithId();

            await memberOnCommitteeService.delete({
                member_id_committee_id: {
                  member_id: memberOnCommittee.member_id,
                  committee_id: memberOnCommittee.committee_id
                }
              }
            );

            expect(prismaService.memberOnCommittee.delete).toBeCalled();
        });
    });
});
