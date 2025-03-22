import { Validacion } from '../validacion/Validacion'; // Ruta al componente de validación
import Swal from 'sweetalert2';
import { UserForm } from "./UserForm";
import { useState } from 'react';

export function Formulario() {

    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setUsuario((copyUsuario) => ({
            ...copyUsuario,
            [name]: value
            // [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Validacion(usuario)) {
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Formulario enviado correctamente',
                confirmButtonText: 'Aceptar'
            });

            /* ------------- PARA  RESETEAR LOS ESTADOS ------------- */
            setUsuario({
                nombre: '',
                apellido: '',
                email: '',
                password: ''
            });
        }
    };

    return (
        <>

            {/* ACA SE ESTA UTILIZANDO LOS PROPS DINAMICAMENTE DESDE EL COMPONENTE PADRE */}

            < UserForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                usuario={usuario}
            />

        </>
    );
}
