import React from 'react';
import styled from 'styled-components';

let ProgressBar = styled.div`
    width: 100%;
    height: 24px;
    background: lightgray;
    .inner {
      width: 40%;
      height: 100%;
      text-align: center;
      ${
        props => props.width && `
            width: ${props.width}
        `
      }
      background: green;
    }
`

class Progress extends React.Component {

  render() {
    let {width} = this.props;
    return (
      <ProgressBar width={width}>
            <div className="inner">{width}</div>
      </ProgressBar>
    );
  }
}



export default Progress;
