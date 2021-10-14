export const getStatus = status => {
    switch (status) {
        case "PENDING": return "PENDIENTE"
        case "ACTIVE": return "ACTIVO"
        case "INACTIVE": return "INACTIVO"
      }
}

export const getErrorMessage = error => {
    switch (error) {
        case "COLLABORATOR_ALREADY_EXISTS": return "Ya existe un colaborador con el email especificado"
        case "OFFICE_BRANCH_FORBIDDEN": return "No tienes acceso para crear colaboradores"
        case "OFFICE_BRANCH_FORBIDDEN_READ": return "No tienes acceso para ver los colaboradores de esta sucursal"
        case "COLLABORATOR_FORBIDDEN": return "No tienes acceso para editar colaboradores"
        case "INVALID_ROLEIDS": return "Debe elegir al menos un rol"
    }
}
