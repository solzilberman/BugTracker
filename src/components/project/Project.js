import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import ProjectTile from './ProjectTile'

export default function Project() {
    const [projects, setProjects] = useState(0)
    useEffect(() => {
        console.log(projects)
    }, [])
    const handleProjects = () => {
        console.log("hello")
        return (
            projects.map(() => <ProjectTile />)
        )
    }
    return (
        <div>
            <Button variant="contained" color="primary" startIcon={<PlaylistAddOutlinedIcon />} onClick={() => {
                var p = projects;
                p += 1
                setProjects(p)
                console.log(projects)
            }}>
                Project
            </Button>




            {[...Array(projects)].map((e, i) =>
                <div key={i} style={{ marginTop: '20px' }}>
                    <ProjectTile />
                </div>)}




        </div>
    )
}
