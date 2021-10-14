export const searchQueryBuilder = ({
    officeBranchName,
    officeCapacityGT,
    officeCapacityLT,
    officeType,
    page,
    size,
}) => {
    let queryParams = "";
    queryParams += page ? `page=${page}&` : ""
    queryParams += size ? `size=${size}&` : ""
    queryParams += officeBranchName ? `name=${officeBranchName}&` : ""
    queryParams += officeCapacityGT ? `office_capacity_gt=${officeCapacityGT}&` : ""
    queryParams += officeCapacityLT ? `office_capacity_gt=${officeCapacityLT}&` : ""
    queryParams += officeType ? `office_type=${officeType}&` : ""
    return queryParams
}
