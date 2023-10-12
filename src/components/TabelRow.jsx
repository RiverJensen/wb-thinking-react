import React from 'react'
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import TabelHeader from './TableHeader';
import AddButton from './AddButton';
import formatCurrency from '../utils/formatCurrency';
import { useState } from 'react';

export default function TabelRow({initialIsEditing , initialInvoiceData, deleteFunc}) {

    const [editMode, setEditMode] = useState(initialIsEditing)
    const [description, setDescription]= useState(initialInvoiceData.description)
    const [rate,setRate]= useState(initialInvoiceData.rate)
    const [hours, setHours]=useState(initialInvoiceData.hours)

    const changNormalMode = () => setEditMode(false)
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
