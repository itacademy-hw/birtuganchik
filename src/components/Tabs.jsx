import React, { Component } from "react";
import styled from 'styled-components';

let TabBar = styled.div`
    width: 100%;
    height: 80px;
    background: lightblue;
    display: flex;
    justify-content: center;
    button {
        width: 100px;
        height: 100%;
        border: none;
        background: lightblue;
        cursor: pointer;
        margin-right: 30px;
        
    }
`

class Tabs extends Component {
    state = { 
        selected: null
     }
    render() {
        let { tabTitles , tabs } = this.props;
        let { selected } = this.state;
        return (
            <div>
                <TabBar>
                    <div className="title">{tabTitles.map((title) => <button onClick={() => this.setState({selected: title.tabId})}>{title.title}</button>)}</div>
                </TabBar>
                <div className="tabBody">{tabs.map((tab) => tab.id === selected && <div>{tab.tab}</div>)}</div>
            </div>
        );
    }
}

export default Tabs;