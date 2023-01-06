import React, {Component} from 'react';
import NavMenuDesk from "../components/NavMenuDesk";
import ListDashboard from "../components/ListDashboard";
export async function getStaticProps(){
    const dataChart = [
        {
            t_date: "22/11/2021",
            income: 4000,
        },
        {
            t_date: "23/11/2021",
            income: 3000,
        },
        {
            t_date: "23/11/2021",
            income: 2000,
        },
        {
            t_date: "24/11/2022",
            income: 2780,
        },
        {
            t_date: "25/11/2022",
            income: 1890,
        },
        {
            t_date: "26/11/2022",
            income: 2390
        },
        {
            t_date: "27/11/2022",
            income:0,
        }
    ];
    const data = [
        {id:1,receipt_no:'111',receipt_date:'04/01/2023',qty:'12',total:'1200'},
        {id:2,receipt_no:'112',receipt_date:'04/01/2023',qty:'12',total:'1200'},
        {id:3,receipt_no:'113',receipt_date:'04/01/2023',qty:'12',total:'1200'},
        {id:4,receipt_no:'114',receipt_date:'04/01/2023',qty:'12',total:'1200'},
        {id:5,receipt_no:'115',receipt_date:'04/01/2023',qty:'12',total:'1200'},
        {id:6,receipt_no:'116',receipt_date:'04/01/2023',qty:'80',total:'1200'},
        {id:7,receipt_no:'117',receipt_date:'04/01/2023',qty:'17',total:'1200'},
        {id:8,receipt_no:'118',receipt_date:'04/01/2023',qty:'17',total:'1200'},
        {id:9,receipt_no:'119',receipt_date:'04/01/2023',qty:'12',total:'1200'},
        {id:10,receipt_no:'110',receipt_date:'04/01/2023',qty:'12',total:'1200'},
    ]
    const columns = [
        {name:'Receipt',selector:'receipt_no',sortable:true},
        {name:'Date',selector:'receipt_date',sortable:true},
        {name:'Qty',selector:'qty',sortable:true},
        {name:'Total',selector:'total',sortable:true}
    ]
    return {
        props:{
           TotalTransaction: "12000",
            TotalIncome: "50000",
            TotalProduct: "500",
            TotalUsers: "50",
            dataChart:dataChart,
            data:data,
            columns:columns,


        }
    }
}
class Index extends Component {

    render() {
        return (
            <div>
                <NavMenuDesk/>
                <ListDashboard
                    TotalTransaction={this.props.TotalTransaction}
                    TotalIncome={this.props.TotalIncome}
                    TotalProduct={this.props.TotalProduct}
                    TotalUsers={this.props.TotalUsers}
                    dataChart={this.props.dataChart}
                    data={this.props.data}
                    columns = {this.props.columns}
                />
            </div>
        );
    }
}

export default Index;