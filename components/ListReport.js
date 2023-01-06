import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import DataTable from "react-data-table-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPrint} from "@fortawesome/free-solid-svg-icons";

class ListReport extends Component {
    printInvoice = ()=>{
        alert("I am Printing Please Wait....");
    };
    render() {

        const  columns = [
            { name:'SN',selector:'id',sortable:true},
            { name:'Invoice No',selector:'invoice_no',sortable:true},
            { name:'Invoice Date',selector:'date',sortable:true},
            { name:'Product Name',selector:'prod_name',sortable:true},
            // { name:'Product Category',selector:'category',sortable:true},
            { name:'Product Code',selector:'quantity',sortable:true},
            // { name:'Unit Price',selector:'unit_price',sortable:true},
            { name:'Total Price',selector:'total_price',sortable:true},
            // { name:'Discount',selector:'discount',sortable:true},
            { name:'Seller Name',selector:'seller',sortable:true},
            {name:'Print Invoice',selector:'id',sortable: true,cell:row=> <button onClick={this.printInvoice.bind(this,row.id)}  className="btn text-primary"><FontAwesomeIcon icon={faPrint}/></button>},
            ];
        const data = [
            { id:1,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:2,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:3,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:4,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:5,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:6,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:7,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:8,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:9,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:10,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:11,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:12,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:13,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:14,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:15,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:16,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},
            { id:17,invoice_no:1,prod_name:"Hp laptop 16GBR,10000GBHDD",category:"azizul",quantity:5,unit_price:500,discount:500,total_price:2000,seller:"Azizul",date:'12/01/2021'},

        ];
        return (
            <Fragment>
                <Container className="animated zoomIn">
                    <Row className="mt-2">
                        <Col sm={12} xs={12} md={12} lg={12}>
                            <Card>
                                <Card.Body>
                                    <Container fluid={true}>
                                        <Row md={6}>
                                            <div className="input-group" >
                                            <Col><h4 className="table-title mr-2">Report List</h4></Col>
                                            <input className="form-control mx-2" type="date" name="date_from"/>
                                            <input type="date" className="form-control mx-2" name="date_to"/>
                                            <button className="btn btn-primary mx-2" type="submit">Search</button>
                                            </div>
                                        </Row>
                                    </Container>
                                    <hr className="bg-secondary" />
                                    <Container fluid={true}>
                                        <Row>
                                            <Col sm={12} md={12} lg={12} xs={12}></Col>
                                        </Row>
                                        <DataTable
                                            paginationPerPage={10}
                                            pagination={true}
                                            noHeader={true}
                                            columns={columns}
                                            data={data}
                                        />
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ListReport;