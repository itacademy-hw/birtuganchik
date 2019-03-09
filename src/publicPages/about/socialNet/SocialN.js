import React, {Component} from 'react';
import styled from 'styled-components';
let SocLogo = styled.div`  
    border-radius: 15px;
    background: url('${(props => props.logo)}');
    background-size: cover;
    display: inline-flex;
    margin-left: 15px;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
`;

class SocialN extends Component {
    
    render() {
        let { logobg } = this.props;
        return (
            <SocLogo logo={logobg}/>
            
        );
    }
}

export default SocialN;
