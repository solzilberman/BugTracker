import React, { useState, useEffect } from 'react'
import EditableLabel from 'react-inline-editing';
import { Card, Divider, Button } from '@material-ui/core'
import DesktopMacOutlinedIcon from '@material-ui/icons/DesktopMacOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';



export default function ProjectTile() {

    return (
        <Card className="ProjectTile" style={{ width: '300px', height: '300px' }}>
            <div>
                <DesktopMacOutlinedIcon fontSize="large" />
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '75%', margin: 'auto' }}>
                    <EditableLabel text='Project Name'
                        labelClassName='myLabelClass'
                        inputClassName='myInputClass'
                        height='25px'
                        inputWidth='200px'
                        inputHeight='25px'
                        inputMaxLength={50}
                        labelFontWeight='bold'
                        inputFontWeight='bold' />
                    <EditOutlinedIcon style={{ marginLeft: '20px' }} />
                </div>
                <Divider style={{ margin: 'auto', width: '75%' }} />

            </div>
            <div style={{ height: 'fit-content' }}>
                <EditableLabel text='Description'
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    height='25px'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength={50}
                    labelFontWeight='bold'
                    inputFontWeight='bold' />

                <Divider style={{ margin: 'auto', width: '50%' }} />
            </div>
            <div>

                <Button variant="contained" color="default" startIcon={<AddCircleOutlineOutlinedIcon />} >
                    Add Bugs
            </Button>
            </div>
        </Card>
    )
}
