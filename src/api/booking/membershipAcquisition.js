import { acquireMembership } from "../../infra/api/booking/membershipAcquisition"

export const acquireMembershipApi = membershipId => {
    return Promise.resolve(acquireMembership(membershipId))
}
