export const getErrorMessage = error => {
    switch(error) {
        case "OFFICE_BRANCH_FORBIDDEN": return "No tienes acceso para ver los colaboradores de esta sucursal"
    }
}