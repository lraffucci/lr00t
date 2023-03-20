import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Layout() {

  const title = 'LR/00/T';
  return (
    <Container className="p-3">
        <Row>
            <h1>{title}</h1>
        </Row>
        <Row>      
            <div>
            <label htmlFor="search">Search</label>
            <input id="search" type="text" />
            </div>
        </Row>
        <Row>
            <div>BODY</div>
        </Row>
    </Container>
  );
}

export default Layout;
