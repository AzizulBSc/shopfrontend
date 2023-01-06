import React, {Component} from 'react';
import NavMenuDesk from "../components/NavMenuDesk";
import ListUser from "../components/ListUser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import ListCategory from "../components/ListCategory";
export async function getStaticProps(){
    const data = [
        { id:1,name:"Laptop",code:"laptop101",icon:"/laptop.PNG",},
        { id:2,name:"DeskTop",code:"azizul",icon:"/laptop.PNG",},
        { id:3,name:"Mobile",code:"azizul",icon:"/laptop.PNG",},
        { id:4,name:"HeadPhone",code:"azizul",icon:"/laptop.PNG",},
        { id:5,name:"Azizul Hoque",code:"azizul",icon:"/laptop.PNG",},
        { id:6,name:"Azizul",code:"xyz",icon:"/laptop.PNG",},
    ];
    // const  columns = [
    //     { name:'SN',selector:'id',sortable:true},
    //     { name:'Name',selector:'name',sortable:true},
    //     { name:'User Name',selector:'code',sortable:true},
    //     { name:'User Name',selector:'code',sortable:true},
    //     { name:'icon',selector:'icon',sortable:true},
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
class Category extends Component {


    render() {
        return (
            <div>
                <NavMenuDesk/>
                <ListCategory data={this.props.data} />
            </div>
        );
    }
}

export default Category;