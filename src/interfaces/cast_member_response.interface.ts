import CastMember from "./cast_member.interface";

export default interface CastMemberResponse {
    id: number;
    cast: CastMember[];
}