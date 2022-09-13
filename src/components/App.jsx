import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import styles from './App.module.css';

class App extends Component {
  state = {
    serachWord: '',
    images: [],
    page: 1,
  };

  componentDidMount = () => {
    this.requesterAPI('', 1);
  };

  onSubmit = async (event) => {
    event.preventDefault();
    await this.setState({ serachWord: event.target[1].value, page: 1, images: [] });
    this.requesterAPI(this.state.serachWord, this.state.page);
    event.target.reset();
  };

  pageOperator = async () => {
    await this.setState(prevState => { return { page: prevState.page + 1 } });
    this.requesterAPI(this.state.serachWord, this.state.page);
  };

  requesterAPI = (serachWord, page) => {
    const API_KEY = '29321884-a1107c4d69cb5633d7e5f5c25';
    const requestPath = `https://pixabay.com/api/?q=${serachWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    fetch(requestPath)
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        return resp.json();
      })
      .then(response => {
        this.setState(prevState => ({images: [...prevState.images, ...response.hits]}));
      })
      .catch(err => alert(err));
  };

  render() {
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        <Button pageOperator={this.pageOperator} />
        {/* <Loader /> */}
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;