import Swal from 'sweetalert2';

export const Validacion = (usuario) => {
    const { nombre, apellido, email, password } = usuario;


    /* ---------------- ACA PUEDEN COLOCAR LAS DEMAS VALIDACIONES 
                                POR EJEMPLO: DE APELLIDO DE EMAIL--------------- */

    if (!nombre || !apellido || !email || !password) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios',
            confirmButtonText: 'Aceptar',
        });
        return
    }


    if (password.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe tener al menos 6 caracteres',
            confirmButtonText: 'Aceptar',
        });
        return
    }

    return true;
};
