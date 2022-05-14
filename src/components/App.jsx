import React, { Component } from 'react';
import s from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    title: '',
    images: null,
    enabled: false,
    page: 1,
    isShown: false,
    largeImageURL: '',
  }
  
  componentDidUpdate(prevProps, prevState) {
    
    const BASE_URL = `https://pixabay.com/api/?q=${this.state.title}&page=${this.state.page}&key=25747896-3b3c804de6476e3d2d2bc0cb1&image_type=photo&orientation=horizontal&per_page=12`;
    
    if (this.state.title !== prevState.title) {
      this.setState({images: null, enabled: true});
      fetch(BASE_URL)
        .then(response => response.json())
        .then(({ hits: images }) => {
          this.setState({ images, page: 1 })
        }).finally(() => this.setState({enabled: false}));
    } 
    
     if (this.state.page !== prevState.page) {
      this.setState({enabled: true});
      fetch(BASE_URL)
        .then(response => response.json())
        .then(({ hits: images }) => {
          this.setState({ images: [...prevState.images, ...images] });
          }).finally(() => this.setState({enabled: false}));
    }    
  }
  
  handleFormSubmit = title => {
    this.setState({ title });
  }

  handleBtnClick = () => {
    this.setState(state => ({
      page: state.page + 1,
    }))
  }

  toggleModal = () => {
    this.setState(state => ({
      isShown: !state.isShown
    }))
  }
  
  openImage = (largeImageURL) => {
    this.setState({ largeImageURL });
    this.toggleModal();
  }
  
  render() {
    const { page, enabled, images, title, largeImageURL, isShown } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        {page === 1 && <Loader enabled={enabled} />}
        {images && <ImageGallery images={images} alt={title} onClick={this.openImage}/>}    
        {page > 1 && <Loader enabled={enabled} />}
        {images && images.length > 0 && <Button onClick={this.handleBtnClick} />}
        {isShown && <Modal isShown={this.toggleModal} src={largeImageURL} alt={title}/>}
      </div>
    );
  }
}

export default App;
