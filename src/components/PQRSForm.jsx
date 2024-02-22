// PQRSForm.js
import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PQRSForm = () => {
  // Estados para cada campo del formulario
    const [formData, setFormData] = useState({
        requestType: "",
        identificationType: "",
        name: "",
        email: "",
        phone: "",
        productType: "",
        facturaInfo: "",
        productInfo: "",
        description: "",
        file: null,
    });

    // Manejador del envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    // Manejador para cambios en los campos del formulario
    const handleChange = (event) => {
        const { name, value, files, type, checked } = event.target;

        // Manejo de checkboxes
        if (type === "checkbox") {
        // Ajuste para checkboxes individuales o para manejar múltiples selecciones si es necesario
        setFormData((prevState) => ({
            ...prevState,
            [name]: checked, // Para checkboxes individuales
            // Para checkboxes que permiten múltiples selecciones, se necesitaría una lógica diferente
        }));
        } else {
        // Manejo de inputs de texto, selects y files
        setFormData((prevState) => ({
            ...prevState,
            [name]: files ? files[0] : value,
        }));
        }
    };

    return (
        <Container>
        <Row className="justify-content-md-center">
            <Col xs={12}>
            <h1>PQRS - Destilería Cerro Azul</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                <Form.Label>Tipo de Solicitud</Form.Label>
                <Form.Select
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                >
                    <option value="">Seleccione una opción</option>
                    <option value="queja">Queja</option>
                    <option value="reclamo">Reclamo</option>
                    <option value="peticion">Petición</option>
                    {/* Otras opciones */}
                    <option value="sugerencia">Sugerencias</option>
                </Form.Select>
                </Form.Group>

                {/* Tipo de Queja */}
                {["queja", "reclamo"].includes(formData.requestType) && (
                <Form.Group className="mb-3">
                    <Form.Label>Tipo de Queja</Form.Label>
                    <Form.Select
                    name="complaintType"
                    value={formData.complaintType}
                    onChange={handleChange}
                    >
                    <option value="">Seleccione un tipo</option>
                    <option value="servicio">Servicio</option>
                    <option value="producto">Producto</option>
                    <option value="entrega">Entrega</option>
                    <option value="otro">Otro</option>
                    </Form.Select>
                </Form.Group>
                )}

                {/* Reclamos Comunes solo para Reclamo o Queja */}
                {["queja", "reclamo"].includes(formData.requestType) && (
                <Form.Group className="mb-3">
                    <Form.Label>Reclamos Comunes</Form.Label>
                    <Form.Select
                    name="commonComplaint"
                    value={formData.commonComplaint}
                    onChange={handleChange}
                    >
                    <option value="">Seleccione un reclamo</option>
                    <option value="unidadesIncompletas">
                        Unidades no completas
                    </option>
                    <option value="productoDefectuoso">
                        Producto con defecto
                    </option>
                    <option value="faltanteVolumen">
                        Faltante en volumen del producto
                    </option>
                    <option value="embalajeMalEstado">
                        Embalaje del producto en mal estado
                    </option>
                    <option value="retrasoEntrega">
                        Retraso o falla en entrega
                    </option>
                    </Form.Select>
                </Form.Group>
                )}

                {/* Detalle del Defecto solo si el reclamo común es 'productoDefectuoso' */}
                {formData.commonComplaint === "productoDefectuoso" && (
                <Form.Group className="mb-3">
                    <Form.Label>Detalle del Defecto</Form.Label>
                    <Form.Select
                    name="detalleDefecto"
                    value={formData.detalleDefecto}
                    onChange={handleChange}
                    >
                    <option value="">Seleccione el detalle</option>
                    <option value="tapaDanada">Tapa dañada</option>
                    <option value="etiquetaDanada">Etiqueta dañada</option>
                    <option value="fechaLoteNoLegible">
                        Fecha y lote no legible
                    </option>
                    <option value="envaseDanado">Envase dañado</option>
                    <option value="liquidoDerramado">
                        Envase con líquido derramado
                    </option>
                    <option value="mangaDanada">Manga dañada</option>
                    {/* Completa aquí otras subcategorías según sea necesario */}
                    </Form.Select>
                </Form.Group>
                )}

                {formData.requestType === "suggestion" && (
                <Form.Group className="mb-3">
                    {/* Campos específicos para sugerencias */}
                </Form.Group>
                )}

                {/* Información de Contacto */}
                <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre completo"
                />
                </Form.Group>

                {/* Tipo de Identificación */}
                <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nombre@ejemplo.com"
                />
                </Form.Group>

                {/* Número de Identificación */}
                <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ingresa tu número de teléfono"
                />
                </Form.Group>

                {/* Nombre del ejecutivo de ventas */}
                <Form.Group className="mb-3">
                <Form.Label>Nombre del ejecutivo de ventas:</Form.Label>
                <Form.Control
                    type="text"
                    name="salesExecutiveName"
                    value={formData.salesExecutiveName}
                    onChange={handleChange}
                    placeholder="Nombre del ejecutivo"
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Teléfono del ejecutivo de ventas:</Form.Label>
                <Form.Control
                    type="text"
                    name="salesExecutivePhone"
                    value={formData.salesExecutivePhone}
                    onChange={handleChange}
                    placeholder="Teléfono del ejecutivo"
                />
                </Form.Group>

                {/* Detalles del Producto */}
                <Form.Group className="mb-3">
                <Form.Label>Tipo de Producto</Form.Label>
                <Form.Select
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                >
                    <option value="">Seleccione una opción</option>
                    {/* Añade opciones de productos aquí */}
                    <option value="whiskey">Whiskey</option>
                    <option value="ron">Ron</option>
                    <option value="vodka">Vodka</option>
                    <option value="tequila">Tequila</option>
                    <option value="gin">Gin</option>
                    <option value="brandy">Brandy</option>
                    <option value="licor">Licor</option>
                </Form.Select>
                </Form.Group>

                {/* Información de la Factura o Orden de Compra */}
                <Form.Group className="mb-3">
                <Form.Label>Orden de Compra o Factura</Form.Label>
                <Form.Control
                    type="text"
                    name="facturaInfo"
                    value={formData.facturaInfo}
                    onChange={handleChange}
                    placeholder="Número de orden o factura"
                />
                </Form.Group>

                {/* Información del Producto */}
                <Form.Group className="mb-3">
                <Form.Label>Descripción del Problema</Form.Label>
                <Form.Control
                    as="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe el problema o la razón de tu solicitud"
                    rows={3}
                />
                </Form.Group>

                {/* Adjuntar Imagen */}
                <Form.Group className="mb-3">
                <Form.Label>Adjuntar Imagen</Form.Label>
                <Form.Control type="file" name="file" onChange={handleChange} />
                </Form.Group>

                {/* Términos y Condiciones */}
                <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    label="Acepto los términos y condiciones"
                    name="termsAndConditions"
                    checked={formData.termsAndConditions}
                    onChange={handleChange}
                />
                </Form.Group>

                {/* Botón de Envío */}
                <Button variant="primary" type="submit">
                Enviar Solicitud
                </Button>
            </Form>
            </Col>
        </Row>
        </Container>
    );
};

export default PQRSForm;
