import React from 'react'
import Bookmark from './Bookmark';
//import EditableBookmark from './EditableBookmark'

class BookmarksList extends React.Component {

    render() {
        //console.log('render: ' + Object.keys(this.props.items));
        if (Object.keys(this.props.items).length == 0) {
            return (<div>(No bookmarks)</div>);
        }
		return (
			<table>
				<tbody>
					{
						this.props.items.map((item) =>
							<tr key={item.id}>
							    <td>
                                    <Bookmark item={item}
                                              key={item.id}
                                              onRemove={this.props.onRemove}
                                              onEdit={() => this.props.onEdit(item)} />
                                </td>
							</tr>
						)
					}
				</tbody>
			</table>
		)
	}
}

//<Bookmark item={item}
//          onRemove={this.props.onRemove}
//          onEdit={() => this.props.onEdit(item)} />

export default BookmarksList