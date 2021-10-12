export const getErrorMessage = error => {
    switch (error) {
        case "COLLABORATOR_ALREADY_EXISTS": return "Ya existe un colaborador con el email especificado"
        case "OFFICE_BRANCH_FORBIDDEN": return "No tienes acceso para crear colaboradores"
        case "INVALID_ROLEIDS": return "Debe elegir al menos un rol"
        default : return "Oops algo salio mal, vuelva a intentarlo"
    }
}
