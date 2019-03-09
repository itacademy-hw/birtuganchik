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
                    hus: 'Babushka Babushkovna',
                    wife: 'Dedushka Dedushka',
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
    width: 50,
    height: 50,
    borderRadius: '50%'
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
                    : nodeData.name
                }
                {
                    data && data.hus + '/' + data.wife
                }
          </div>

        )
    }
}
let Container = styled.div`
    width: 100%;
    min-height: 500px;
    p {
        margin: 0;
        text-align: left;
    }
    .rd3t-tree-container > svg {
        height: 1000px;
    }
    foreignObject {
    width: 200px;
    height: 200px;
    y: 0;
}
`;

class RootTree extends Component {
    render() {
        let family = [
            {
                id: 'fam1',
                name: 'Aydarbekovy',
                root: ['a1b1', 'a2b2'],
            },
            {
                id: 'fam2',
                name: 'Nemcovy',
                root: ['b2', 'b3'],
            },
        ];

        let members = [
            {
                id: 'a1b1',
                spouse: 'a2b2',
                name: 'Babushka Babushkovna',
                fio: 'Babu',
                address: 'Addres asas',
                age: 70,
                children: ['aa1', 'aa2'],
                familyId: 'fam1',
                root: true
            },
            {
                id: 'a2b2',
                spouse: 'a1b1',
                name: 'Dedushka Dedushka',
                fio: 'Dedu',
                address: 'Addres asas',
                children: ['aa1', 'aa2'],
                age: 70,
                familyId: 'fam1',
                root: true
            },
            {
                id: 'aa1',
                spouse: 'a1b1',
                name: 'Syn',
                fio: 'asas',
                address: 'Addres asas',
                age: 70,
                children: ['aa1', 'aa2'],
                familyId: 'fam1'
            },
            {
                id: 'aa2',
                spouse: 'a1b1',
                name: 'Doch',
                fio: 'asas',
                address: 'Addres asas',
                age: 70,
                children: ['aa1', 'aa2'],
                familyId: 'fam1'
            }
        ]
        return (
            <Container>
                <Tree
                    data={myTreeData}
                    orientation="vertical"
                    collapsible={true}
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
                            y: 24
                        }
                    }}
                />
            </Container>

        );
    }
}

export default RootTree;