import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function NuevoProducto() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Agregar Producto</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Nombre</label>
                        <Input
                          defaultValue="torrito"
                          placeholder="Nombre"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label htmlFor="codigo">
                          Código
                        </label>
                        <Input placeholder="Código" value="" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="origen">
                          Origen
                        </label>
                        <Input placeholder="Origen" value="" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="2">
                      <FormGroup>
                        <label>Stock</label>
                        <Input
                          value="150"
                          placeholder="Stock"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="2">
                      <FormGroup>
                        <label>Precio</label>
                        <Input
                          defaultValue="1500.34"
                          placeholder="Precio"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="8">
                      <FormGroup >
                        <Input 
                          placeholder="Precio"
                          type="checkbox"
                        />
                        <label>Activo</label>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Descripción</label>
                        <Input
                          type="textarea"
                          placeholder="Descripción"
                          defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="success"
                        type="submit"
                      >
                        Guardar
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default NuevoProducto;
