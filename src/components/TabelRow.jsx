import React from 'react'
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import TabelHeader from './TableHeader';
import AddButton from './AddButton';
import formatCurrency from '../utils/formatCurrency';
import { useState } from 'react';
import axios from 'axios';

export default function TabelRow({initialIsEditing , initialInvoiceData, deleteFunc, id }) {

    const [editMode, setEditMode] = useState(initialIsEditing)
    const [description, setDescription]= useState(initialInvoiceData.description)
    const [rate,setRate]= useState(initialInvoiceData.rate)
    const [hours, setHours]=useState(initialInvoiceData.hours)

    const changNormalMode = async () => {
        
        let bodyObj = {
            description: description,
            rate: rate,
            hours: hours
            }
            const response = await axios.put(`/editInvoice/${id}`, bodyObj)
            
            
            if (!response.data.error){
            
            
                setEditMode(false)
            
            
            } else {
            alert(response.data.error)}
    }
        
    
    const changeEditMode = () => setEditMode(true)
            
    


  return (
    <tr>
       <ModeButtons
            isEditing={editMode}
            saveClick={changNormalMode}
            editClick= {changeEditMode}
            funkyDelete = {deleteFunc}
       />
       <DescriptionCell
            isEditing={editMode}
            value={description}
            onValueChange= {setDescription}
       />
       <RateCell
            isEditing={editMode}
            value={rate}
            onValueChange={setRate}
         />
       <HoursCell
            isEditing= {editMode}
            value={hours}
            onValueChange={setHours}
        />
        <td>{formatCurrency(rate * hours)}</td>
     </tr>

  )
  }
