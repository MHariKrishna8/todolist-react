import React from 'react';
import { Modal, Input, Button } from 'antd';
import Datepicker from 'react-date-picker';
import 'antd/dist/antd.css';

class TodoModalForm extends React.Component {
    constructor(){
        super();
        this.state = {
            loading: false,
            visible: false,
            startDate: new Date()
          };
    }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleDate = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>

        <Button type="primary" onClick={this.showModal} style={{float:'left'}}>
          Add Todo
        </Button>
        <Modal
          visible={visible}
          title="Add New Todo"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Save
            </Button>
          ]}
        >
        <label>Action</label>
        <Input placeholder="Action" /><br/><br/>
        <label><span style={{color : "red"}}>*</span>Date Added</label><br/>
        <Datepicker        
        selected={this.state.startDate}
        onClick={this.handleDate}/>
       </Modal>
      </div>
    );
  }
}

export default TodoModalForm;