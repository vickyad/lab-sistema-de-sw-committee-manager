import { Test, TestingModule } from "@nestjs/testing";
import { CommitteeService } from "./committee.service"
import { PrismaService } from "../database/prisma.service"
import { DataFactory } from "../database/data.factory"

describe("CommitteeService", () => {
    let committeeService: CommitteeService;
    let prismaService: PrismaService;

    const factory = new DataFactory();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CommitteeService, PrismaService],
        }).compile();

        committeeService = module.get<CommitteeService>(CommitteeService);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    describe("create", () => {
        it("should call prismaService.create", async () => {
            jest.spyOn(prismaService.committee, "create").mockImplementationOnce((): any => undefined);

            await committeeService.create(factory.newMockCommittee());

            expect(prismaService.committee.create).toBeCalled();
        });
    });

    describe("findById", () => {
        it("should call prismaService.findUnique", async () => {
            jest.spyOn(prismaService.committee, "findUnique").mockImplementationOnce(
                (): any => undefined,
            );

            await committeeService.committee({id: factory.newMockCommittee().id});

            expect(prismaService.committee.findUnique).toBeCalled();
        });
    });

    //TODO find ALL

    describe("update", () => {
        it("should call prismaService.update", async () => {
            jest.spyOn(prismaService.committee, "update").mockImplementationOnce((): any => undefined);

            await committeeService.update({ 
              where: { id: factory.newMockCommittee().id }, 
              data: { bond: "Updated bond" }}
            );

            expect(prismaService.committee.update).toBeCalled();
        });
    });

    describe("delete", () => {
        it("should call prismaService.delete", async () => {
            jest.spyOn(prismaService.committee, "delete").mockImplementationOnce((): any => undefined);

            await committeeService.delete({ id: factory.newMockCommittee().id });

            expect(prismaService.committee.delete).toBeCalled();
        });
    });
});
