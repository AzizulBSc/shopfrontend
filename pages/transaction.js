import React, {Component} from 'react';
import NavMenuDesk from "../components/NavMenuDesk";
import ListTransaction from "../components/ListTransaction";

class Transaction extends Component {
    render() {
        return (
            <div>
                <NavMenuDesk/>
                <ListTransaction/>
            </div>
        );
    }
}

export default Transaction;