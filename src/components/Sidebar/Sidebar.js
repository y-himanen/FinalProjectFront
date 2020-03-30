import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function Sidebar() {
    return (
        <List disablePadding dense>
            <ListItem button>
                <ListItemText>Week 1</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>Week 2</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>Week 3</ListItemText>
            </ListItem>
        </List>
    )
}

export default Sidebar