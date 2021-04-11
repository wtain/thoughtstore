import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, TextField } from '@material-ui/core';


class EditableBookmark extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isEdit: false
        }
    }

    render() {
		return (
            <Card>
                <CardContent>
                    {
                        this.props.isEdit ?
                            (
                                <TextField value={this.props.item.summary}
                                           onChange={() => this.props.onChange('summary', e.target.value) } />
                                <TextField value={this.props.item.description}
                                           onChange={() => this.props.onChange('description', e.target.value) }/>
                            )
                        :
                            (
                                <Typography component="h2" variant="h5">
                                    {this.props.item.summary}
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    {this.props.item.description}
                                </Typography>
                            )
                    }
                </CardContent>
                <CardActions>
                    <Button size="small"
                            onClick={() => this.props.onEdit(this.props.item)}>
                                Edit
                    </Button>
                    <Button size="small"
                            onClick={() => this.props.onRemove(this.props.item.id)}>
                                Remove
                    </Button>
                    {
                        if (this.props.isEdit) {
                            (
                                <Button size="small"
                                        onClick={() => {
                                                            this.props.onSave(this.props.item.id)
                                                            this.setState({isEdit: false})
                                                       }
                                                }>
                                            Save
                                </Button>
                                <Button size="small"
                                        onClick={() => {
                                                            this.props.onCancel(this.props.item.id)
                                                            this.setState({isEdit: false})
                                                       }
                                                }>
                                            Cancel
                                </Button>
                            )
                        }
                    }
                </CardActions>
            </Card>
        )
    }
}

export default Bookmark