export const getErrorMessage = error => {
    if (error === "OFFICE_BRANCH_FORBIDDEN")
        return "No tienes permisos para editar la sucursal"
}