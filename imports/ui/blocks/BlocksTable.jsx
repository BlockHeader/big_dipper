import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Table, Badge, Button } from 'reactstrap';
import HeaderRecord from '/imports/ui/components/HeaderRecord.jsx';
import Blocks from '/imports/ui/blocks/ListContainer.js'
import Sidebar from "react-sidebar";

class BlocksTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            limit: 30,
            sidebarOpen: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.showBlock = this.showBlock.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    showBlock(e){
        console.log("clicked");
        console.log(e.target.value);
        onSetSidebarOpen(true);
    }

    // TODO: update list
    updateLimit = () => {
        this.setState({
            limit: this.state.limit+10
        })
    }
 

    render(){
        return <div>
            <h1>Lastest blocks <Badge color="primary">{Meteor.settings.public.chainId}</Badge></h1>
            
                <Table id="block-table">
                    <HeaderRecord />
                    <tbody id="blocks"><Blocks limit={this.state.limit} onClick={this.showBlock}/></tbody>
                
            </Table>
            <Sidebar
                sidebar={<b>Block</b>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
                pullRight={true}
            >
                <b>Main content</b>
            </Sidebar>
            {/* <Button color="primary" onClick={this.updateLimit}>Load more</Button>{' '} */}
            {/* <div id="loading" className="loader"></div> */}
        </div>
    }
}

export default BlocksTable;