import React from 'react';
import './table.css';

const row = (
    x,
    i,
    header,
    handleRemove,
    startEditing,
    editIdx,
    nextId,
    handleChange,
     stopEditing
) => {
   const currentlyEditing = editIdx ===i;
     return (

    <tr className= "tableRowData" key = {'tr-${i}'}>
        {header.map((y, k) => (

        <td className= "Tabledata" key = {'td-${k}'}>
        <div className="changeInput">
            {currentlyEditing ? (
                <input className="Addinginput"
                    type="text"
                    name={y.prop}
                    onChange ={e => handleChange(e, y.prop, i)}
                    value = {x[y.prop]}
        />
                ) : (
                    x[y.prop]
                    )}
                </div>
        </td>

        ))}

        <td className="Editdata">

        {currentlyEditing ? (
          <div className="Editandcancel">
         <input type="button" value="Cancel" className="cancelButton" onClick={() => stopEditing()} />
         </div>  
         ) : (

            <span onClick = {() => startEditing(i)}>

            <svg fill="#909090" height="24" viewBox="0 0 24 24" width="24" className="edit" alt="edit" >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                <path d="M0 0h24v24H0z" fill="none"/>

            </svg>
            </span>
        )}

        </td>
        
        <td >

        {currentlyEditing ? (
         <div className="Editandsave">
            <input type="button" value="Save" className="saveButton" onClick={() => stopEditing()} />
         </div>
        ) : (

        <span onClick = {() => handleRemove(i)}>
            <svg fill="#909090" height="24" viewBox="0 0 24 24" width="24" className= "removeData" alt="trash">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
        </span>
         )}

    </td> 
    </tr>
    );
}
export default ({
    data,
    header,
    handleRemove,
    startEditing,
    nextId,
    editIdx,
    handleChange,
    handleSort,
    sortDirection,
    columnToSort,
    stopEditing}) =>

        <table classname="tabledesign">

            <tr className="tableHeadData" >
                {header.map((x,i) => (
                    <th key= {'th-${i}'} >
                        <div  onClick={() => handleSort(x.prop) } className="arrange">
                            <span>{x.name}</span>
                        {columnToSort === x.prop ? (
                            sortDirection === 'asc' ?
                            <svg fill="#000000" height="18" viewBox="0 0 24 24" width="24" className="arrow">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                            </svg>
                             :
                            <svg fill="#000000" height="18" viewBox="0 0 24 24" width="24" className="arrow">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                            </svg>
                            ) : null}
                        </div> </th>
            ))}
            <th />
            <th />
            </tr>

            {data.map((x, i) => row(
                x,
                i,
                header,
                handleRemove,
                startEditing,
                editIdx,
                nextId,
                handleChange,
                stopEditing))}
        </table>
