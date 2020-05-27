import React from 'react'
import { Container, Typography } from '@material-ui/core'
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';

export default function Header() {
    return (
        <Container style={{ backgroundColor: '#cfe8fc', height: '75px', position: 'absolute', top: '0', display: 'flex', alignItems: 'center' }} disableGutters={true} maxWidth='xl'>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
                <BugReportOutlinedIcon fontSize="large" style={{ marginRight: '10px' }} />
                <h1 style={{ marginRight: '20px' }}>Bug Tracker</h1>
            </div>
        </Container>
    )
}
