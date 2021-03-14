import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import routes from '../router/routes';
import SideMenu from './SideMenu'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const { Header, Sider, Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebar: 'Asset overview/资产'
    }
    this.handleSideChange = this.handleSideChange.bind(this);
  }



  handleSideChange(sidebar) {
    this.setState({
      sidebar
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Layout >
          <Header
            style={{
              backgroundColor: '#3f51b5',
              fontSize: '24px',
              color: '#cce2ff'
            }}
          >{this.state.sidebar}</Header>
          <Layout >
            <Sider style={{ backgroundColor: '#fff' }}>
              <SideMenu onSideChange={this.handleSideChange} />
            </Sider>
            <Content>
              <Switch>
                {
                  routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    />
                  ))
                }
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;
