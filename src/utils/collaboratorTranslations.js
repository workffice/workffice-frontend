export const ACCESS_TYPE_READ = "read"
export const ACCESS_TYPE_WRITE = "write"

export const getStatus = status => {
    switch (status) {
        case "PENDING": return "PENDIENTE"
        case "ACTIVE": return "ACTIVO"
        case "INACTIVE": return "INACTIVO"
    }
}

export const getErrorMessage = (error, accessType = ACCESS_TYPE_WRITE) => {
    switch (error) {
        case "COLLABORATOR_ALREADY_EXISTS": return "Ya existe un colaborador con el email especificado"
        case "OFFICE_BRANCH_FORBIDDEN": {
            if (accessType == ACCESS_TYPE_WRITE)
                return "No tienes acceso para crear colaboradores"
            else
                return "No tienes acceso para ver los colaboradores de esta sucursal"
        }
        case "COLLABORATOR_FORBIDDEN": return "No tienes acceso para editar colaboradores"
        case "INVALID_ROLEIDS": return "Debe elegir al menos un rol"
    }
}
