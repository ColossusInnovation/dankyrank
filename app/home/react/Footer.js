import React, {Component} from 'react';
import styled from 'styled-components';
import {Container} from "reactstrap";

const DFooter = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const PFooter = styled.p`
  margin-bottom: .25rem;
`;

class Footer extends Component {

    render() {
        return (
            <DFooter className="text-muted">
                <Container>
                    <PFooter className="float-right">
                        <a href="#">Back to top</a>
                    </PFooter>
                    <PFooter>&copy; 2019 Colossus Innovation LLC</PFooter>
                </Container>
            </DFooter>
        );
    }
}

export default Footer;
