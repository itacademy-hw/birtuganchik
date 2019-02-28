import React, {Component} from 'react';
import styled from 'styled-components';

let Facebook = styled.div`
    top: 5px;
    width: 35px;
    height:35px;
    border-radius: 20px;
    position: relative;
    background: url(https://i.mycdn.me/image?id=875371419423&t=52&plc=WEB&tkn=*O3away8KYJoIRpVSGCz3eqvFz9E)no-repeat;
    background-size: cover;
    display: inline-block;
    box-shadow: #00000066 0px 0px 4px 2px;
`;
let Twitter = styled.div`
    top: 5px;
    width: 35px;
    height:35px;
    border-radius: 20px;
    position: relative;
    background: url(https://i.mycdn.me/image?id=875371413535&t=52&plc=WEB&tkn=*IsVCLOrwR_G5yQkUzXqxJdHX2k8)no-repeat;
    background-size: cover;
    display: inline-block;
    box-shadow: #00000066 0px 0px 4px 2px;
    left: 12px;
`;
let Instagram = styled.div`
    top: 5px;
    width: 35px;
    height:35px;
    border-radius: 20px;
    position: relative;
    background: url(https://i.mycdn.me/image?id=875371417119&t=52&plc=WEB&tkn=*5jKeXFh0NF1ieq-TsOvGGWWxdsI)no-repeat;
    background-size: cover;
    display: inline-block;
    box-shadow: #00000066 0px 0px 4px 2px;
    left: 24px;
`;

class SocialN extends Component {
    state = {  }
    render() {
        return (
            <>
             <Facebook/>
             <Twitter/>
             <Instagram/>
            </>
        );
    }
}

export default SocialN;