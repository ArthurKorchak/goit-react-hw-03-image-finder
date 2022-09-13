import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { requesterAPI } from './services/requesterAPI';
import noFound from './images/no-found.png';
import styles from './App.module.css';

class App extends Component {
  state = {
    serachWord: '',
    page: 1,
    images: [],
    largeImage: '',
    isEndOfGallery: false,
    isModalOpen: false,
    isLoading: false,
  };

  componentDidMount = () => {
    this.getPhotos();
  };

  onSubmit = async (event) => {
    event.preventDefault();
    await this.setState({ serachWord: event.target[1].value, page: 1, images: [], isEndOfGallery: false });
    this.getPhotos();
    event.target.reset();
  };

  pageOperator = async () => {
    await this.setState(prevState => { return { page: prevState.page + 1 } });
    this.getPhotos();
  };

  getPhotos = async () => {
    this.setState({ isLoading: true });
    try {
      requesterAPI(this.state.serachWord, this.state.page)
        .then(response => {
          this.setState(prevState => ({
            images: [...prevState.images, ...response.hits],
            isEndOfGallery: prevState.images.length + response.hits.length === response.totalHits
          }));
        });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    };
  };

  toggleModal = event => {
    if (event.target === event.currentTarget || event.code ) {
      const imgPath = event.target.id ? this.state.images[event.target.id].largeImageURL : '';
      this.setState(prevValue => ({ isModalOpen: !prevValue.isModalOpen, largeImage: imgPath }));
    };
  };

  render() {
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.images.length > 0 && <ImageGallery images={this.state.images} toggleModal={this.toggleModal} />}
        {!this.state.images.length > 0 && <img src={noFound} alt="depiction no found" style={{margin: "auto", maxWidth: "600px"}} />}
        {this.state.images.length > 0 && !this.state.isEndOfGallery && <Button pageOperator={this.pageOperator} />}
        {this.state.isModalOpen && <Modal image={this.state.largeImage} toggleModal={this.toggleModal} />}
        {this.state.isLoading && <Loader />}
      </div>
    );
  };
};

export default App;