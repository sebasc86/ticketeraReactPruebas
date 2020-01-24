import React, { Component } from 'react'
import MaterialTable from 'material-table';
import moment from "moment";
import { Link } from "react-router-dom"


export default class Tickets extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    
  }
  
	render() {
        const sector = this.props.sector.sectorId
        let users = ""
        if(this.props.users){
          users = this.props.users.body
          let usersfor = {};
          for (var i = 0; i < users.length; i++) {
            usersfor[users[i].id] = users[i].name;
          }   
          return (
            <div className="container" >
            {/* <div>float</div> */}
            <MaterialTable
                options={{
                  pageSize: 20,
                  pageSizeOptions: [20],
                  paging: true,
                  cellStyle: {
                    padding: "5px 0px 5px 20px"
                  }
                  // actionsColumnIndex: 7
                  
                }}
                
                
                title=""
                tableRef={this.tableRef}
                columns={[
                  
                  
                  { title: 'Numero', field: 'number' },
                  { title: 'Cliente', field: 'client' },
                  { title: 'Usuario Creador', field: 'user_id', render: rowData => <div>{usersfor[rowData.user_id]}</div> },
                  { title: 'Cerrado por', field: 'close_user_id', render: rowData => <div>{usersfor[rowData.close_user_id]}</div> },
                  { title: 'Creado', field: 'created_at'},
                  { title: 'Estado', field: 'status', render: rowData => <div>{rowData.status === 1 ? 'Open' : 'Closed' }</div> },
                  { title: 'Estado', render: rowData => <Link className="btn btn-primary" to={`/`}>Ver</Link> },
                  
                ]}
                data={query =>
                  new Promise((resolve, reject) => {
                    let url = `http://127.0.0.1:3005/ticket/?id=${sector}&page=${query.page}&search=${query.search}`;       
                    fetch(url)
                      .then(response => response.json())
                      .then(result => {
                        //console.log(query)
                        //console.log(result)
                        
  
                        const data = result.body.rows.map(row => {
                          return {...row, created_at: moment(row.created_at).utc().format("DD-MM-YYYY"),
                          }
                        })
                        
                        
                        let count = (result.body.count / 20 ) * 6
                        count = Math.round(count + result.body.count)
                       
                        
                        resolve({
                          data: data,
                          page:  query.page,
                          totalCount: count
                        })
                      })
                      .catch(error =>{
                        console.log(error)
                      })
                        
                      
                  })
                }
                
                // components={{
                //   Action: props => (
                    
                //     <button
                //       onClick={(event) => props.action.onClick(event, props.data)}
                //       color="primary"
                //       variant="contained"
                //       style={{textTransform: 'none'}}
                //       size="small"
                //     >
                //       My Button
                //     </button>
                //   ),
                // }}
            />
          </div>
            
          )
        } else {
          return(
          <div className="container">
             <span>cargando...</span>
          </div>)
        }
        

      
    }
}
