import React, {Component} from 'react';
import NavMenuDesk from "../components/NavMenuDesk";
import ListUser from "../components/ListUser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import ListReport from "../components/ListReport";
export async function getStaticProps(){

    return {
        props: {
           // data:data,
            // columns:columns,
        }
    }
}
class Report extends Component {


    render() {
        return (
            <div>
                <NavMenuDesk/>
                <ListReport />
            </div>
        );
    }
}

export default Report;