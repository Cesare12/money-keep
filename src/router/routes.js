import Dashboard from '../containers/Dashboard';
import Transactions from '../containers/Transactions'
import Accounts from '../containers/Accounts'
import Reports from '../containers/Reports'
import Settings from '../containers/Settings'

const routes = [
    {
        path: '/',
        exact: true,
        label: 'Asset overview/资产',
        icon: 'AppstoreOutlined',
        component: Dashboard
    },
    {
        path: '/transactions/:accountId?',
        link: '/transactions',
        exact: false,
        label: 'Transactions/记账',
        icon: 'MailOutlined',
        component: Transactions
    }
    ,
    {
        path: '/accounts',
        exact: false,
        label: 'Accounts/账户',
        icon: 'AppstoreOutlined',
        component: Accounts
    },
    {
        path: '/reports',
        exact: false,
        label: 'Reports/报告',
        icon: 'AppstoreOutlined',
        component: Reports
    },
    {
        path: '/settings',
        exact: true,
        label: 'Settings/设置',
        icon: 'AppstoreOutlined',
        component: Settings
    }
];


export default routes;