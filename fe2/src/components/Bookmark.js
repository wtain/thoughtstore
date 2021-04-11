import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


class Bookmark extends React.Component {
    
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
                    <Typography component="h2" variant="h5">
                        {this.props.item.summary}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {this.props.item.description}
                    </Typography>
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
                </CardActions>
            </Card>
        )
    }
}

//                    <TextField value={this.props.item.summary} />
//                    <TextField value={this.props.item.description} />


export default Bookmark