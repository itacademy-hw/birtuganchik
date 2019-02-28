import React, { Component } from 'react';
import './Sections.css';
import SocialN from '../socialNet/SocialN';

class Sections extends Component {
    state = {  }
    render() {
        return (
             <div className="parentDiv">
               <div id="top-left">
                <PadProps
                     title="Hallo World"
                     text="asdfg dfg sdfg sdfg fasfasdf sadfdfsaa"
                     images="fadsfasdfsad"
                     />
                 </div>
             <div id="top-right">
               <PadProps
                     title="Hallo Bishkek"
                     text="asdf sdfgfd dgss ss dd asfasdf sadfdfsaa"
                     images="fadsfasdfsad"
                     />
                </div>
             <div id="bottom-left">
               <PadProps
                     title="Hallo Osh"
                     text="dfasfasdf sadfdfsaa"
                     images="fadsfasdfsad"
                     />
                 </div>
             <div id="bottom-right">
               <PadProps
                     title="Hallo Yssyk-Kol"
                     text="sd s ds sfasdf sadfdfsaa"
                     images="fadsfasdfsad"
                     />
                 </div>
             </div>
        );
    }
}

class PadProps extends Component {

    render(){
  
      let {title, text, images} = this.props
      return(
        <>
        <div className="innerDivL">
          <h2>{this.props.title}</h2>
            <div className="text">
             {this.props.text}
                </div>
            <div className="btn"><button>click me</button></div>
         </div>
           <div className="innerDiv">
              {this.props.images}
              </div>
           <div className="socialNet">
           <SocialN/>
          </div>
       </>
      )
    }
  }

export default Sections;