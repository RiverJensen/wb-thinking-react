import './App.css';
import InvoiceTable from './components/InvoiceTable';
import ModeButtons from './components/ModeButtons';
import DescriptionCell from './components/DescriptionCell';
import HoursCell from './components/HoursCell';



function App({initialData}) {
  return <InvoiceTable initialInvoiceData={initialData}/>
  
  
}

export default App;
