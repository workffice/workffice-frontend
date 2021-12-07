import { acquireMembership, getMembershipAcquisitions } from "../../infra/api/booking/membershipAcquisition"

export const acquireMembershipApi = membershipId => {
    return Promise.resolve(acquireMembership(membershipId))
}

export const getMembershipAcquisitionsApi = () => {
    return Promise.resolve(getMembershipAcquisitions())
}
