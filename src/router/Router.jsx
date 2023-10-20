import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import ErrorPage from '../components/pages/errorpage/ErrorPage';
import Home from '../components/pages/home/Home';
import Register from '../components/pages/register/Register';
import Login from '../components/pages/login/Login';
import AddProduct from '../components/pages/addProduct/AddProduct';
import MyCart from '../components/pages/myCart/MyCart';
import Private from '../components/private/Private';
import Product from '../components/pages/product/Product';
import Details from '../components/pages/product/details/Details'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://57-brand-shop-server-myhdox2ey-mosaddek.vercel.app/brand')
            },
            {
                path: '/addProduct',
                element: <Private><AddProduct></AddProduct></Private>
            },
            {
                path: '/product',
                element: <Product></Product>,
                loader: () => fetch('https://57-brand-shop-server-myhdox2ey-mosaddek.vercel.app/brand')
            },
            {
                path: `/details/:id`,
                element: <Private><Details></Details></Private>,
                loader: () => fetch('https://57-brand-shop-server-myhdox2ey-mosaddek.vercel.app/brand')
            },
            {
                path: '/myCart',
                element: <Private><MyCart></MyCart></Private>,
                loader: () => fetch('https://57-brand-shop-server-myhdox2ey-mosaddek.vercel.app/brand')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Router;