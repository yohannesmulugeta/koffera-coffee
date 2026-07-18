import {Route,Routes} from 'react-router-dom';
import {Footer,Header,Scroll} from './components/Layout';
import HomePage from './pages/HomePage';
import {CoffeeDetailPage,CoffeesPage} from './pages/CoffeePages';
import {OriginsPage,QualityPage} from './pages/OriginQualityPages';
import {ExportServicesPage,MarketsPage} from './pages/BusinessPages';
import {AboutPage,ContactPage,RequestOfferPage} from './pages/CompanyPages';
import {LegalPage,NotFoundPage} from './pages/UtilityPages';

export default function App(){return <><Scroll/><Header/><Routes><Route path="/" element={<HomePage/>}/><Route path="/coffees" element={<CoffeesPage/>}/><Route path="/coffees/:slug" element={<CoffeeDetailPage/>}/><Route path="/origins" element={<OriginsPage/>}/><Route path="/quality-traceability" element={<QualityPage/>}/><Route path="/export-services" element={<ExportServicesPage/>}/><Route path="/markets" element={<MarketsPage/>}/><Route path="/request-offer" element={<RequestOfferPage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/privacy" element={<LegalPage title="Privacy Policy"/>}/><Route path="/terms" element={<LegalPage title="Terms & Conditions"/>}/><Route path="*" element={<NotFoundPage/>}/></Routes><Footer/></>}
