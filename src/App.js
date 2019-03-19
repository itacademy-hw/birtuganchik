import React, { Component } from "react";
import Tabs from "./components/Tabs"
import Progress from "./components/Progress"
import Select from "./components/Select"
import Checkbox from "./components/Checkbox"
import Header from "./components/Header"
import RootTree from "./pages/Tree"



export default class App extends Component {

    render() {
            let tabTitles = [
                {title: 'Tab 1', tabId: 'tab1'},
                {title: 'Tab 2', tabId: 'tab2'},
                {title: 'Tab 3', tabId: 'tab3'}
            ]
            let tabs = [
                {id: 'tab1', tab: <div>This is 1st tab</div>},
                {id: 'tab2', tab: <div>This is 2nd tab</div>},
                {id: 'tab3', tab: <div>This is 3rd tab</div>},
            ]
            let options = [
                '1st',
                '2nd',
                '3rd'
            ]
        return (
            <div id="root">
            <Header />
                <Tabs tabTitles={tabTitles} tabs={tabs}/>
                <Select option={options}/>
                {/* <UiCard image="" header="Title" footer="FOOTER">
                    awawhfbwafawCHILDREN
                </UiCard> */}
                <Checkbox />
                <Progress width="10%"/>
                <RootTree />
            </div>
        );
    }
}