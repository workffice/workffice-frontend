export const getAccessLabel = access => {
  switch (access) {
    case "WRITE": return "LECTURA / ESCRITURA"
    case "READ": return "LECTURA"
    default: return "N/A"
  }
}

export const getResourceLabel = resource => {
  switch (resource) {
    case "OFFICE": return "Oficina"
    case "MEMBERSHIP": return "Membresia"
    case "ROLE": return "Rol"
    case "COLLABORATOR": return "Colaborador"
    default: return "N/A"
  }
}

export const getErrorMessage = error => {
  switch (error) {
    case "OFFICE_BRANCH_FORBIDDEN": return "No tienes acceso para crear roles"
    default: return "Oops algo salio mal, vuelva a intentarlo"
  }
}
