export const getErrorMessage = error => {
    switch(error) {
        case("OFFICE_IS_NOT_AVAILABLE"): return "La oficina no se encuentra disponible en la fecha solicitada"
        default: return "Oops algo salio mal"
    }
}
