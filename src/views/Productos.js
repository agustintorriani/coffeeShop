import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";

function Productos() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/admin/agregar-producto`; 
    navigate(path);
  }

  return (
    <>
      <div className="content">
        <Row>
        <Col md="12">
          <div className="update ml-auto mr-auto">
            <Button
              className="btn-round"
              color="primary"
              type="submit"
              onClick={routeChange}
            >
              Agregar Producto
            </Button>
          </div>
        </Col>
          <Col md="12">
            <Card className="card-plain">
              {/* <CardHeader>
                <CardTitle tag="h4">Productos</CardTitle>
              </CardHeader> */}
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th></th>
                      <th>Nombre</th>
                      <th>Código</th>
                      <th>Stock</th>
                      <th>Activo</th>
                      <th className="text-right">Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><ReactCountryFlag countryCode="JM" svg style={{fontSize: '1.5em'}} /></td>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>67</td>
                      <td><input type="checkbox" disabled="true" checked="true"></input></td>
                      <td className="text-right">$36.738</td>
                    </tr>
                    <tr>
                      <td><ReactCountryFlag countryCode="CO" svg style={{fontSize: '1.5em'}} /></td>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>54</td>
                      <td ><input type="checkbox" disabled="true"></input></td>
                      <td className="text-right">$23.789</td>
                    </tr>
                    <tr>
                      <td><ReactCountryFlag countryCode="BR" svg style={{fontSize: '1.5em'}} /></td>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>124</td>
                      <td><input type="checkbox" disabled="true" checked="false"></input></td>
                      <td className="text-right">$56.142</td>
                    </tr>
                    <tr>
                      <td><ReactCountryFlag countryCode="ID" svg style={{fontSize: '1.5em'}} /></td>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>44</td>
                      <td><input type="checkbox" disabled="true"></input></td>
                      <td className="text-right">$38.735</td>
                    </tr>
                    <tr>
                      <td><ReactCountryFlag countryCode="AR" svg style={{fontSize: '1.5em'}} /></td>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>35</td>
                      <td><input type="checkbox" disabled="true"></input></td>
                      <td className="text-right">$63.542</td>
                    </tr>
                    <tr>
                      <td><ReactCountryFlag countryCode="GT" svg style={{fontSize: '1.5em'}} /></td>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>15</td>
                      <td><input type="checkbox" disabled="true" checked="false"></input></td>
                      <td className="text-right">$78.615</td>
                    </tr>
                    <tr>
                      <td><ReactCountryFlag countryCode="VE" svg style={{fontSize: '1.5em'}} /></td>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>22</td>
                      <td><input type="checkbox" disabled="true"></input></td>
                      <td className="text-right">$98.615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Productos;
