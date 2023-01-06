import React, {Component} from 'react';
import NavMenuDesk from "../components/NavMenuDesk";
import ListUser from "../components/ListUser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
export async function getStaticProps(){
    const data = [
        { id:1,name:"Azizul Hoque",username:"azizul",role:"admin",last_activity:'12/01/2021'},
        { id:2,name:"Azizul Hoque",username:"azizul",role:"admin",last_activity:'12/01/2021'},
        { id:3,name:"Azizul Hoque",username:"azizul",role:"admin",last_activity:'12/01/2021'},
        { id:4,name:"Azizul Hoque",username:"azizul",role:"admin",last_activity:'12/01/2021'},
        { id:5,name:"Azizul Hoque",username:"azizul",role:"admin",last_activity:'12/01/2021'},
        { id:6,name:"Azizul",username:"xyz",role:"Employee",last_activity:'12/01/2021'},
    ];
    // const  columns = [
    //     { name:'SN',selector:'id',sortable:true},
    //     { name:'Name',selector:'name',sortable:true},
    //     { name:'User Name',selector:'username',sortable:true},
    //     { name:'User Name',selector:'username',sortable:true},
    //     { name:'Role',selector:'role',sortable:true},
    //     { name:'Last Activity',selector:'last_activity',sortable:true},
    //     {name:'Delete',selector:'id',sortable: true,cell:row=> <button onlClick={this.editIconOnclick.bind(this,row.id)}  className="btn text-danger"><FontAwesomeIcon icon={faTrash}/>Delete</button>},
    //     {name:'Edit',selector:'id',sortable: true,cell:row=> <button onlClick={this.editIconOnclick.bind(this,row.id)} className="btn text-primary"><FontAwesomeIcon icon={faEdit} /> Edit</button>}
    // ];
    return {
        props: {
            data:data,
            // columns:columns,
        }
    }
}
class User extends Component {


    render() {
        return (
            <div>
             <NavMenuDesk/>
                <ListUser data={this.props.data} />
            </div>
        );
    }
}

export default User;