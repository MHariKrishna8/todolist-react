import React from 'react';
import { Modal, Input, Button } from 'antd';

class UsersModalForm extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

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

  render() {
    const { visible, loading } = this.state;
    return (
      <div>

        <Button type="default" onClick={this.showModal} style={{float:"left"}}>
          Create User
        </Button>
        <Modal
          visible={visible}
          title="Add New User"
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
        <label>Username</label>
        <Input placeholder="Username" /><br/><br/>
        <label>Email</label>
        <Input placeholder="email" />
       </Modal>
       {/* <ProductList/> */}
      </div>
    );
  }
}


export default UsersModalForm;