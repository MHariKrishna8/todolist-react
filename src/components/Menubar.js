import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import UsersList from './UsersList';
import UsersModalForm from './UsersModalForm';
import TodoList from './TodoList';
import TodoModalForm from './TodoModalForm';

const { Header, Content } = Layout;

class Menubar extends React.Component {

constructor(){
    super();
    this.state = {
        current: 'users',
    }
}

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  }

  render() {
    return (
    <div>
        <Router>
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="todos">   
                    <Link to="/todos">Todos</Link>
                </Menu.Item>
                <Menu.Item key="users">
                    <Link to="/users">Users</Link>
                </Menu.Item>
            </Menu>

            <Layout>
                    <Header  style={{ margin: '10px', padding: '15px', background: '#fff', minHeight: 20 }}>
                        <Route exact path="/users" component={UsersModalForm} />
                        <Route path="/todos" component={TodoModalForm} />
                    </Header>
                    <Content  style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Route exact path="/users" component={UsersList} />
                        <Route path="/todos" component={TodoList} />
                    </Content>
            </Layout>
        </Router>
    </div>
    );
  }
}

export default Menubar;