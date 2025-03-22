import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// eslint-disable-next-line react/prop-types

/* ------------- ACA VIENEN POR PROPS DESDE SU COMPONENTE PADRE ------------- */

export function UserForm({ handleSubmit, handleChange, usuario }) {
    return (
        <>
            <Form
                onSubmit={handleSubmit} className='m-5 bg-text-body-tertiary'>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        placeholder="Ingresa el nombre"
                        // eslint-disable-next-line react/prop-types
                        value={usuario.nombre}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        name="apellido"
                        placeholder="Ingresa tu apellido"
                        value={usuario.apellido}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="G79@latam.com"
                        value={usuario.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Ingresa tu password"
                        value={usuario.password}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit" variant="outline-primary">Enviar</Button>
            </Form>
        </>
    );
}
