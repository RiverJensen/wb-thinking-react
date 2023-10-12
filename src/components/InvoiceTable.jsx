import './InvoiceTable.css';
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import TabelHeader from './TableHeader';
import AddButton from './AddButton';
import TabelRow from './TabelRow';
import { useState } from 'react';
import axios from 'axios';

let globalId = 4

const InvoiceTable = ({initialInvoiceData}) => {

    const [currentData, setCurrentData]= useState(initialInvoiceData)

const rows = currentData.map((invoiceItem)=>{

        const {id, description, rate,hours, isEditing} = invoiceItem

        return (
            <TabelRow
                key = {id}
                id = {id}
                initialInvoiceData={{description, rate, hours}}
                initialIsEditing={isEditing}
                deleteFunc={() => deleteRow(id)}
                />

        )
})

//add row funtion to pass to <addbutton> to give it the abnility to add new object row to our current array 
const addRow = async () =>{

        const responce = await axios.post('/addInvoice', {description: "Job Description here"})

        setCurrentData([...currentData, responce.data])





    // const newInvoiceData = [...currentData]
    // //creat a new plank object for new row moddled after each elment in TestData
    // const newRow = {
    //     id: globalId,
    //     description: 'descrioption',
    //     rate:'',
    //     hours:'',
    //     isEditing: true
    // }
    // newInvoiceData.push(newRow)

    // setCurrentData(newInvoiceData)

    

    // globalId++
}


const deleteRow= async (itemID)=>{

    const response= await axios.delete(`/deleteInvoice/${itemID}`)
    if(!response.data.error){


        const filteredList = currentData.filter((invoiceItem)=>invoiceItem.id !== itemID)
    
        setCurrentData(filteredList)
    }





}



    return(
        <>
        <div>
            <table>

                <thead>
                    <TabelHeader/>
                </thead>

                        <tbody>
                           
                        
                           {rows}
                            

                        </tbody>

                <tfoot>
                    <AddButton addClick={addRow}/>
                </tfoot>

            </table>
        </div>
        </>
    )
}

export default InvoiceTable