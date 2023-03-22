import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../header';

function Layout() {
  return (
    <Container className="p-3">
        <Row>
            <Header></Header>
        </Row>
        <Row>      
            <div>
            <label htmlFor="search">Search</label>
            <input id="search" type="text" />
            </div>
        </Row>
        <Row>
        
        </Row>
    </Container>
  );
}

export default Layout;
