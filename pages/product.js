import React, {Component} from 'react';
import NavMenuDesk from "../components/NavMenuDesk";
import ListUser from "../components/ListUser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import ListCategory from "../components/ListCategory";
import ListProduct from "../components/ListProduct";
export async function getStaticProps(){
    const data = [
        { id:1,name:"Laptop",code:"laptop101",category:"Laptop",price:50000,remarks:"hp",icon:"/laptop.PNG",},
        { id:2,name:"DeskTop",code:"azizul",category:"Laptop",price:50000,remarks:"hp",icon:"/laptop.PNG",},
        { id:3,name:"Mobile",code:"azizul",category:"Laptop",price:50000,remarks:"hp",icon:"/laptop.PNG",},
        { id:4,name:"HeadPhone",code:"azizul",category:"Laptop",price:50000,remarks:"hp",icon:"/laptop.PNG",},
        { id:5,name:"Azizul Hoque",code:"azizul",category:"Laptop",price:50000,remarks:"hp",icon:"/laptop.PNG",},
        { id:6,name:"Azizul",code:"xyz",category:"Laptop",price:50000,remarks:"hp",icon:"/laptop.PNG",},
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
class Product extends Component {


    render() {
        return (
            <div>
                <NavMenuDesk/>
                <ListProduct data={this.props.data} />
            </div>
        );
    }
}

export default Product;