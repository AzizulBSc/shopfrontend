import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import DataTable from "react-data-table-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";

class ListUser extends Component {
    constructor() {
        super();
        this.state = {
            show :false,
            showEdit:false,
            deleteID:"",
            editID:""
        }
    }
    handleClose = ()=>{
        this.setState({show:false})
    };
    handleOpen = () => {
        this.setState({show:true})
    }
    handleCloseEdit = () =>{
        this.setState({showEdit:false})
    }
    handleOpenEdit = () =>{
        this.setState({showEdit:true})
    }
    deleteIconOnClick = (id) =>{
        alert(id)
    }
    editIconOnclick = (id) =>{

        this.handleOpenEdit()
        this.setState({editID:id});
    }
    render() {

        const  columns = [
            { name:'SN',selector:'id',sortable:true},
            { name:'Name',selector:'name',sortable:true},
            { name:'User Name',selector:'username',sortable:true},
            { name:'Role',selector:'role',sortable:true},
            { name:'Last Activity',selector:'last_activity',sortable:true},
            {name:'Delete',selector:'id',sortable: true,cell:row=> <button onClick={this.deleteIconOnClick.bind(this,row.id)}  className="btn text-danger"><FontAwesomeIcon icon={faTrash}/></button>},
            {name:'Edit',selector:'id',sortable: true,cell:row=> <button onClick={this.editIconOnclick.bind(this,row.id)} className="btn text-primary"><FontAwesomeIcon icon={faEdit} /></button>}
        ];
        return (
           <Fragment>
               <Container className="animated zoomIn">
                   <Row className="mt-2">
                           <Col sm={12} xs={12} md={12} lg={12}>
                               <Card>
                                   <Card.Body>
                                       <Container fluid={true}>
                                           <Row>
                                               <Col><h4 className="table-title">User List</h4></Col>
                                               <Col><button onClick={this.handleOpen} className="float-end bg-success circular-btn"><FontAwesomeIcon icon={faPlus}/></button></Col>
                                           </Row>
                                       </Container>
                                       <hr className="bg-secondary" />
                                       <Container fluid={true}>
                                           <Row>
                                               <Col sm={12} md={12} lg={12} xs={12}></Col>
                                           </Row>
                                           <DataTable
                                               paginationPerPage={5}
                                               pagination={true}
                                               noHeader={true}
                                               columns={columns}
                                               data={this.props.data}
                                           />
                                       </Container>
                                   </Card.Body>
                               </Card>
                           </Col>
                   </Row>
               </Container>
               <Container>
                   <Modal animation={false} className="animated zoomIn" show={this.state.show} onHide={this.handleClose}>
                       <Modal.Header>
                           <h6 >{this.state.editID} Add User</h6>
                       </Modal.Header>
                       <Modal.Body>
                           <label for="name" className="form-label">Full Name</label>
                           <input name="name" className="form-control" type="text" />
                           <label className="form-label">User Name</label>
                           <input name="username" className="form-control" type="text" />
                           <label className="form-label">Password</label>
                           <input name="password" className="form-control" type="password" />
                           <label className="form-label">Role</label>
                           <select className="form-control form-select">
                               <option className="form-control" value="admin">Admin</option>
                               <option className="form-control" value="user">Employee</option>
                           </select>
                       </Modal.Body>
                       <Modal.Footer>
                           <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                           <Button className="btn btn-site" onClick={this.handleClose}>Save Changes</Button>
                       </Modal.Footer>
                   </Modal>
                   <Modal animation={false} className="animated zoomIn" show={this.state.showEdit} onHide={this.handleCloseEdit}>
                       <Modal.Header>
                           <h6 >{this.state.editID} Update User</h6>
                       </Modal.Header>
                       <Modal.Body>
                           <label for="name" className="form-label">Full Name</label>
                           <input name="name" className="form-control" type="text" />
                           <label className="form-label">User Name</label>
                           <input name="username" className="form-control" type="text" />
                           <label className="form-label">Password</label>
                           <input name="password" className="form-control" type="password" />
                           <label className="form-label">Role</label>
                           <select className="form-control form-select">
                               <option className="form-control" value="admin">Admin</option>
                               <option className="form-control" value="user">Employee</option>
                           </select>
                       </Modal.Body>
                       <Modal.Footer>
                           <Button variant="secondary" onClick={this.handleCloseEdit}>Close</Button>
                           <Button className="btn btn-site" onClick={this.handleCloseEdit}>Save Changes</Button>
                       </Modal.Footer>
                   </Modal>
               </Container>
           </Fragment>
        );
    }
}

export default ListUser;