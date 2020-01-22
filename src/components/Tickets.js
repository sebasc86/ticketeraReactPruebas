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
                  console.log(query.page)
                  let url = `http://127.0.0.1:3005/ticket?page=${query.page}`                  
                  fetch(url)
                    .then(response => response.json())
                    .then(result => {
                      console.log(result.nextPage)
                      resolve({
                        data: result.body,
                        page:  query.page,
                        totalCount: 300,
                      })
                    })
                })
              }
          />
        </div>
					
        )
    }
}