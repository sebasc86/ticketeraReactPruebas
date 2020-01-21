import React, { Component } from 'react'
import MaterialTable from 'material-table';


export default class Tickets extends Component {
	render() {
        return (
          <div style={{ maxWidth: '100%' }}>
          <MaterialTable
              title="Remote Data Preview"
              columns={[
                
                { title: 'Id', field: 'id' },
                { number: 'number', field: 'number' },
                
              ]}
              data={query =>
                new Promise((resolve, reject) => {
                  let url = 'http://127.0.0.1:3005/ticket?offset=15'
                  console.log(resolve)
                  
                  fetch(url)
                    .then(response => response.json())
                    .then(result => {
                      console.log(result)
                      resolve({
                        data: result.body,
                        page:  2 ,
                        totalCount: 150,
                      })
                    })
                })
              }
          />
        </div>
					
        )
    }
}