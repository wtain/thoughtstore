import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class BookmarkEdit extends React.Component {
    
    constructor (props) {
      super(props)
      this.state = {
        summary: "",
        description: ""
      }
    }

    componentWillReceiveProps(newProps) {
      if (newProps) {
        var item = newProps.item;
        if (item) {
          this.setState({
            summary: item.summary,
            description: item.description
          });
        }
      }
    }

    render() {
      if (this.props.show) {
        return (
            <form noValidate autoComplete="off">
              <table>
                <tbody>
                    <tr>
                      <td>Summary</td>
                      <td><TextField id="standard-basic" 
                                      label="Standard" 
                                      value={this.state.summary} 
                                      onChange={(e) => this.setState({summary: e.target.value})} /></td>
                    </tr>
                    <tr>
                      <td>Details</td>
                      <td><TextField id="outlined-basic" 
                                      label="Outlined" 
                                      variant="outlined" 
                                      value={this.state.description} 
                                      onChange={(e) => this.setState({description: e.target.value})} /></td>
                    </tr>
                </tbody>
              </table>
              <Button onClick={() => this.props.onSave(this.state.summary, this.state.description)}>
                Save
              </Button>
              <Button onClick={() => this.props.onCancel()}>
                Cancel
              </Button>
            </form>
        )
      }
      else {
        return (<div />)
      }
    }
}

export default BookmarkEdit