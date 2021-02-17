import HomePage from './Pages/HomePage'
import {ProductContainer} from './Pages/ProductContainer'
import ProductDetail from './Pages/ProductDetail'
import AdminPage from './Pages/AdminPage'
import AddProductPage from './Pages/AddProductPage'
import RepairProduct from './Pages/RepairProduct'
import CategoryPage from './Pages/CategoryPage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import Auth from './Pages/auth/index'


const router = [
  { path: "/", exact: true, cpn: HomePage },
  { path: "/products", exact: true, cpn: ProductContainer },
  { path: "/products:id", exact: true, cpn: ProductDetail },
  { path: "/admin", exact: true, cpn: AdminPage },
  { path: "/add-new", exact: true, cpn: AddProductPage },
  { path: "/sua-sp/:id", exact: true, cpn: RepairProduct },
  { path: "/danh-muc/:id", exact: true, cpn:CategoryPage },
  { path: "/about", exact: true, cpn: AboutPage },
  { path: "/contact", exact: true, cpn: ContactPage },
  { path: "/auth", exact: true, cpn: Auth},
];

export default router