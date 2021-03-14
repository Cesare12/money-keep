import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import routes from '../router/routes';
import * as Icon from '@ant-design/icons';

class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.props.onSideChange(e.key)
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                mode="inline"
            >
                {routes.map(route =>
                    <Menu.Item
                        key={route.label}
                    >
                        {React.createElement(
                            Icon[route.icon]
                        )}
                        {route.label}
                        <Link to={route.path}></Link>
                    </Menu.Item>
                )}
            </Menu>
        )
    }
}
export default SideMenu;
