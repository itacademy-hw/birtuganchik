import React, { Component } from "react";
import styled from "styled-components";
import Tree from 'react-d3-tree';


let testImg = 'https://assets.lifesitenews.com/images/made/images/remote/https_www.lifesitenews.com/images/local/woman1_810_500_75_s_c1.jpg';


const myTreeData = [
    {
        name: 'Aydarbekovy',
        children: [
            {
                name: '1e pokolenie',
                attributes: {
                    hus: 'Babushka',
                    wife: 'Dedushka',
                    husImg: testImg,
                    wifeImg: testImg
                },
                children: [
                    {
                        name: '2e pokolenie',
                        attributes: {
                            hus: 'Dyadya',
                            wife: 'Tetya',
                            husImg: testImg,
                            wifeImg: testImg
                        },
                    },
                    {
                        name: '2e pokolenie',
                        attributes: {
                            hus: 'Dyadya',
                            wife: 'Tetya',
                            husImg: testImg,
                            wifeImg: testImg
                        },
                    },
                    {
                        name: '2e pokolenie',
                        attributes: {
                            hus: 'Dyadya',
                            wife: 'Tetya',
                            husImg: testImg,
                            wifeImg: testImg
                        },
                    },
                    {
                        name: '2e pokolenie',
                        attributes: {
                            hus: 'Dyadya',
                            wife: 'Tetya',
                            husImg: testImg,
                            wifeImg: testImg
                        },
                    },
                ],
            },
        ],
    },
];

let style = {
    width: 60,
    height: 60,
    borderRadius: '50%',
    position: "relative",
    top: -20,
    left: -45,
    border: "solid 3px black"
}
class NodeLabel extends React.PureComponent {
    render() {
        const { className, nodeData } = this.props
        let data = nodeData.attributes ? nodeData.attributes : false;
        console.log('nodeData', nodeData)
        return (
            <div>
                {data ? <>
                    <img
                    className={className}
                    style={style}
                    alt='as'
                    src={data.husImg} />
                    <img
                    className={className}
                    style={style}
                    alt='as'
                    src={data.wifeImg} />
                    </>
                    : <span style={{display: "block", position: "relative", top: "-25px", left: "-80px", textAlign: "center"}}>{nodeData.name}</span> 
                }
                <span style={{display: "block", position: "relative", top: "-25px", left: "-80px", textAlign: "center"}}>
                    {
                        data && data.hus + '/' + data.wife
                    }
                </span> 
          </div>

        )
    }
}
let Container = styled.div`
    display: inline-block;
    width: 100%;
    min-height: 500px;
    p {
        margin: 0;
        text-align: left;
    }
    .rd3t-tree-container > svg {
        min-height: 1000px;
    }
    foreignObject {
    width: 200px;
    height: 200px;
    y: -10;
    x: -21;
}
`;

class RootTree extends Component {
    render() {
        return (
            <Container>
                <Tree
                    data={myTreeData}
                    orientation="vertical"
                    collapsible={false}
                    circleRadius="1"
                    pathFunc="diagonal"
                    translate={{
                        x: 239, y: 200
                    }}
                    scaleExtent={{
                        min: 1,
                        max: 2
                    }}
                    allowForeignObjects
                    nodeLabelComponent={{
                        render: <NodeLabel className='myLabelComponentInSvg' />,
                        foreignObjectWrapper: {
                            y: 24,
                            overflow: "inherit"
                        }
                    }}
                />
            </Container>

        );
    }
}

export default RootTree;
