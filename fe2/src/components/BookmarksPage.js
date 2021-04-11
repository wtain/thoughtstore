import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import BookmarkEdit from './BookmarkEdit';
import BookmarksList from './BookmarksList';
import * as Properties from './Properties'

class BookmarksPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showEdit: false,
      items: [],
      selectedItem: null,
      currentPage: 0
    }
  }

  getPageSize() {
    return 5;
  }

  getDataUrl() {
    //return "http://127.0.0.1:8080/api/bookmarks/list";
    return Properties.BACKEND_URL + "/api/bookmarks/page/" + this.getPageSize() + "/" + this.state.currentPage;
  }
    
  componentDidMount() {
		this.loadList();
   }
    
  loadList() {
    fetch(this.getDataUrl())
        .then((response) => response.json())
        .then((data) => this.setState({items: data}));
  }

  render () {
    return (
        <Container>
            <ButtonGroup>
                <Button variant="contained"
                        color="primary"
                        onClick={() => this.setState({ showEdit: !this.state.showEdit })}>
                  Create
                </Button>
                <Button variant="contained"
                        color="primary"
                        onClick={() => this.goBack()}>
                  Back
                </Button>
                <Button variant="contained"
                        color="primary"
                        onClick={() => this.goForward()}>
                  Forward
                </Button>
            </ButtonGroup>
            {this.state.currentPage}
            <BookmarkEdit
                          item={this.state.selectedItem}
                          show={this.state.showEdit}
                          onSave={this.onSave.bind(this)}
                          onCancel={this.onCancel.bind(this)} />
            <BookmarksList
                           items={this.state.items}
                           onRemove={this.onRemove.bind(this)}
                           onEdit={this.onEdit.bind(this)} />
        </Container>
    )
  }

  onCancel() {
    this.setState({ showEdit: false });
  }

  onSave(summary, description) {
    var newBookmark = {
      summary: summary,
      description: description
    };
    var url = Properties.BACKEND_URL + "/api/bookmarks/add";
    var isEdit = false;
    var id = null;
    if (this.state.selectedItem) {
        id = this.state.selectedItem.id;
        url = Properties.BACKEND_URL + "/api/bookmarks/edit/" + id;
        isEdit = true;
    }

    fetch(url, 
    {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBookmark) 
    })
    .then((response) => {
      if (!response.ok)
        throw Error("Failed"); 
      return response.json();
    })
    .then((data) => {
      var newBookmarkFromService = data;
      if (data) {
        if (isEdit) {
          var newItems = [...this.state.items];
          newItems.forEach((p, i, arr) => {
            if (arr[i].id == id) {
              arr[i].summary = summary;
              arr[i].description = description;
            }
          });
          this.setState({ items: newItems });
        }
        else {
          this.setState({ items: this.state.items.concat(newBookmarkFromService) });
        }
      }
    });
    this.setState({ showEdit: false });
  }

  onRemove(id) {
    fetch(Properties.BACKEND_URL + "/api/bookmarks/delete/" + id,
    {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (!response.ok)
        throw Error("Failed"); 
      this.setState({
        items: this.state.items.filter((item) => item.id != id)
      })
    });
  }

  onEdit(bookmark) {
    this.setState({ showEdit: true, selectedItem: bookmark });
  }

  goBack() {
    var url = Properties.BACKEND_URL + "/api/bookmarks/pages/" + this.getPageSize() + "/count";
    fetch(url)
    .then((response) => response.json())
    .then((cnt) => {
        if (this.state.currentPage - 1 >= 0) {
        this.setState({ currentPage: this.state.currentPage - 1 });
        this.loadList();
        }
    });
  }

  goForward() {
    var url = Properties.BACKEND_URL + "/api/bookmarks/pages/" + this.getPageSize() + "/count";
    fetch(url)
    .then((response) => response.json())
    .then((cnt) => {
      if (this.state.currentPage + 1 < cnt) {
        this.setState({ currentPage: this.state.currentPage + 1 });
        this.loadList();
      }
    });
  }
}

export default BookmarksPage