import { Test, TestingModule } from "@nestjs/testing";
import { MemberService } from "./member.service";
import { PrismaService } from "../database/prisma.service";
import { DataFactory } from "../database/data.factory";

describe("MemberService", () => {
  let memberService: MemberService;
  let prismaService: PrismaService;

  const factory = new DataFactory();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberService, PrismaService],
    }).compile();

    memberService = module.get<MemberService>(MemberService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe("create", () => {
    it("should call prismaService.create", async () => {
      jest
        .spyOn(prismaService.member, "create")
        .mockImplementationOnce((): any => undefined);

      await memberService.create(factory.newMockMemberWithId());

      expect(prismaService.member.create).toBeCalled();
    });

    it("should create and return member", async () => {
      //jest.spyOn(prismaService.member, "create").mockImplementationOnce((): any => undefined);

      const member = await memberService.create(factory.newMockMemberWithId());

      expect(member).toBeDefined();
    });

    it("should create and return member with is_Active default value", async () => {
      const mock = factory.newMockMember();
      mock.is_active = undefined;

      const member = await memberService.create(mock);

      expect(member.is_active).toBe(true);
    });
  });

  describe("findById", () => {
    it("should call prismaService.findUnique", async () => {
      jest
        .spyOn(prismaService.member, "findUnique")
        .mockImplementationOnce((): any => undefined);

      await memberService.member({
        where: { id: factory.newMockMemberWithId().id },
      });

      expect(prismaService.member.findUnique).toBeCalled();
    });
  });

  describe("update", () => {
    it("should call prismaService.update", async () => {
      jest
        .spyOn(prismaService.member, "update")
        .mockImplementationOnce((): any => undefined);

      await memberService.update({
        where: { id: factory.newMockMemberWithId().id },
        data: { name: "Updated Name" },
      });

      expect(prismaService.member.update).toBeCalled();
    });
  });

  describe("delete", () => {
    it("should call prismaService.delete", async () => {
      jest
        .spyOn(prismaService.member, "delete")
        .mockImplementationOnce((): any => undefined);

      await memberService.delete({ id: factory.newMockMemberWithId().id });

      expect(prismaService.member.delete).toBeCalled();
    });
  });
});
