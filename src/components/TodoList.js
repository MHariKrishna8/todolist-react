import React from 'react';
import { Table, Popconfirm, Button } from 'antd';
import 'antd/dist/antd.css';

class TodoList extends React.Component {

    onDelete = (key) => {
        const datasource = [...this.state.datasource];
        this.setState({ datasource: datasource.filter(item => item.key !== key) });
    }
      
    constructor(props){
        super(props);
        this.state = {
            datasource : [
                {
                    key : 1,
                    action : "Yoga",
                    date : "today"
                },{
                    key : 2,
                    action : "Study",
                    date : "today"
                },{
                    key : 3,
                    action : "Sleep",
                    date : "today"
                }]
        };

        
    this.columns = [
        {
          title: 'Action',
          dataIndex: 'action',
        },
        {
          title: 'Date',
          dataIndex: 'date',
        },
        {
          title: 'Operations',
          render: (text, record) => {
            return (
              <div>
                  <Button.Group>
                      <Button type = "primary" ghost style={{border : "none", borderRightStyle:"inset"}}>Edit</Button>
                      <Popconfirm title="Delete?" onConfirm={() => this.onDelete(record.key)}>
                      <Button type = "primary" ghost style={{border : "none"}}>Delete</Button>
                      </Popconfirm>
                  </Button.Group>
              </div>
            );
          },
        }
      ];
    }

    render(){
        const { datasource } = this.state;
        const columns = this.columns;
        return (
          <div>
              <Table dataSource={datasource} columns={columns} style={{marginLeft : "10px"}} />;
          </div>
          )
      }

}

export default TodoList;