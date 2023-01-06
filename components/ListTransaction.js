import React, {Component, Fragment} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faMinus, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
export default class ListTransaction extends Component {
    next=()=>{
        this.slider.slickNext();
    }
    previous=()=>{
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows:false,
            autoplaySpeed:3000,
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide:0,
            responsive:[
                {
                    breakpoint: 1024,
                    settings: {
                        infinite: true,
                        slidesToShow: 6,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
            ]
        };
        const CategoryList = [
            {name:'Rice'},
            {name:'Laptop'},
            {name:'DeskTop'},
            {name:'Mobile'},
            {name:'Headphone'},
            {name:'Mic'},
            {name:'Router'},
            {name:'Switcher'},
            {name:'Fish'},
            {name:'Ship'},
            {name:'Boat'},
            {name:'Vegetable'},

        ];
        const ProductData = [
            {
                id:1,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:2,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:3,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:4,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:6,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:7,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:8,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:9,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:10,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"19005"
            },
            {
                id:1,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:2,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:3,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:4,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:6,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:7,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:8,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:9,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:10,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"19005"
            },
            {
                id:1,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:2,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:3,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:4,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:6,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:7,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:8,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:9,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:10,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"19005"
            },
            {
                id:1,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:2,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:3,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:4,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:6,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:7,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:8,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:9,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"190000"
            },
            {
                id:10,
                image:"/laptop.PNG",
                name:"Laptop Mac",
                code:"mac1010",
                price:"19005"
            }

        ];
        let CategoryView = CategoryList.map((List,i)=>{
            return(
                <div>
                    <h5 className="category-name">{List.name}</h5>
                </div>
            )
        });
        let ProductView = ProductData.map((product,i)=>{
            return(
                <div className="col-md-2 p-1 text-center col-lg-2 col-sm-3 col-3">
                    <div className="card">
                        <img className="product-img" src={product.image}/>
                        <h5 className="product-name">{product.name}</h5>
                        <h5 className="product-price">{product.price} TK</h5>
                    </div>
                </div>
            )
        });

        return (
            <Fragment>
                <div className="mt-1">
                    <div className="animated zoomIn container-fluid">
                        <div className="row">
                            <div className="col-md-7 p-1 col-lg-7 col-sm-12">
                                <div  className="container shadow-sm p-3 bg-white">
                                    <div className="row">
                                        <div className="col-md-1 p-1">
                                            <button className="btn " onClick={this.previous}><FontAwesomeIcon icon={faAngleLeft}/></button>
                                        </div>
                                         <div className="col-md-10 p-1">
                                             <Slider ref ={c=>(this.slider=c)} {...settings}>
                                                 {CategoryView}
                                             </Slider>

                                         </div>
                                        <div className="col-md-1 p-1">
                                            <button className="btn " onClick={this.next}><FontAwesomeIcon icon={faAngleRight}/></button>

                                        </div>
                                    </div>
                                    <div style={{maxHeight: '500px',overflowY: 'scroll'}} className="row ListTransactionHeight ListTransaction">
                                        {ProductView}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 p-1 col-lg-5 col-sm-12">
                                <div className="shadow-sm p-2 text-center bg-site">
                                    <h6>Cart List</h6>
                                </div>
                                <div style={{maxHeight: '450px',overflowY: 'scroll'}} className="shadow-sm bg-white text-center ListTransactionCartHeight ListTransaction p-3">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <img className="cat-icon" src="/laptop.PNG" />
                                            </div>
                                            <div className="col-4 text-center">
                                                <p className="product-name">Product Name</p>
                                                <p className="product-price">Qty: 02 | 200 TK</p>
                                            </div>
                                            <div className="col-4 text-center">
                                                <div className="input-group">
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faPlus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faMinus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faTrash}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="bg-secondary" />
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <img className="cat-icon" src="/laptop.PNG" />
                                            </div>
                                            <div className="col-4 text-center">
                                                <p className="product-name">Product Name</p>
                                                <p className="product-price">Qty: 02 | 200 TK</p>
                                            </div>
                                            <div className="col-4 text-center">
                                                <div className="input-group">
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faPlus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faMinus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faTrash}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="bg-secondary" />
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <img className="cat-icon" src="/laptop.PNG" />
                                            </div>
                                            <div className="col-4 text-center">
                                                <p className="product-name">Product Name</p>
                                                <p className="product-price">Qty: 02 | 200 TK</p>
                                            </div>
                                            <div className="col-4 text-center">
                                                <div className="input-group">
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faPlus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faMinus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faTrash}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="bg-secondary" />
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <img className="cat-icon" src="/laptop.PNG" />
                                            </div>
                                            <div className="col-4 text-center">
                                                <p className="product-name">Product Name</p>
                                                <p className="product-price">Qty: 02 | 200 TK</p>
                                            </div>
                                            <div className="col-4 text-center">
                                                <div className="input-group">
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faPlus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faMinus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faTrash}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="bg-secondary" />
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <img className="cat-icon" src="/laptop.PNG" />
                                            </div>
                                            <div className="col-4 text-center">
                                                <p className="product-name">Product Name</p>
                                                <p className="product-price">Qty: 02 | 200 TK</p>
                                            </div>
                                            <div className="col-4 text-center">
                                                <div className="input-group">
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faPlus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faMinus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faTrash}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="bg-secondary" />
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <img className="cat-icon" src="/laptop.PNG" />
                                            </div>
                                            <div className="col-4 text-center">
                                                <p className="product-name">Product Name</p>
                                                <p className="product-price">Qty: 02 | 200 TK</p>
                                            </div>
                                            <div className="col-4 text-center">
                                                <div className="input-group">
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faPlus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faMinus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faTrash}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="bg-secondary" />
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <img className="cat-icon" src="/laptop.PNG" />
                                            </div>
                                            <div className="col-4 text-center">
                                                <p className="product-name">Product Name</p>
                                                <p className="product-price">Qty: 02 | 200 TK</p>
                                            </div>
                                            <div className="col-4 text-center">
                                                <div className="input-group">
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faPlus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faMinus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faTrash}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="bg-secondary" />
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <img className="cat-icon" src="/laptop.PNG" />
                                            </div>
                                            <div className="col-4 text-center">
                                                <p className="product-name">Product Name</p>
                                                <p className="product-price">Qty: 02 | 200 TK</p>
                                            </div>
                                            <div className="col-4 text-center">
                                                <div className="input-group">
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faPlus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faMinus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faTrash}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="bg-secondary" />
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-4 text-center">
                                                <img className="cat-icon" src="/laptop.PNG" />
                                            </div>
                                            <div className="col-4 text-center">
                                                <p className="product-name">Product Name</p>
                                                <p className="product-price">Qty: 02 | 200 TK</p>
                                            </div>
                                            <div className="col-4 text-center">
                                                <div className="input-group">
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faPlus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faMinus}/></button>
                                                    <button className="circular-btn"><FontAwesomeIcon icon={faTrash}/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="bg-secondary" />
                                    </div>
                                </div>
                                <div className="shadow-sm text-center p-2 bg-white">
                                    <h6> Total Due: 400 TK </h6>
                                    <button className="btn btn-site">Confirm Sell</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </Fragment>
        );
    }
}