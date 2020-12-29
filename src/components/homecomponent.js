/* eslint-disable react/prop-types */
import '../scss/home.scss';
import '../scss/slider.scss';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SpeechConfigComponent from './speechconfigcomponent';
import ArticleThumbComponent from './articlethumbcomponent';

class HomeComponent extends Component {

  firstLoad = false;
  constructor(props){
    super();
    this.playHandler = this.playHandler.bind(this);
    this.playerDescription = React.createRef();
    this.playerTitle = React.createRef();
    this.playerImg = React.createRef();
  }
  
  componentWillReceiveProps(nextProps){
    /*clicked an article thumb */
    const {articles} = this.props;
    if((nextProps.currentArticleIndex !== this.props.currentArticleIndex &&
      articles.length > 0) ||
      nextProps.currentArticleIndex !== -1){ 
      this.playerDescription.innerText = articles[nextProps.currentArticleIndex].description;
      this.playerTitle.innerText = articles[nextProps.currentArticleIndex].title;
      this.playerImg.style.background = "url('" + articles[nextProps.currentArticleIndex].imgUrl + "')";
    }
  }

  componentDidUpdate(nextProps){
    /*first load */
    const {articles, currentArticleIndex} = this.props;
    if(currentArticleIndex === -1 && articles.length > 0 && !this.firstLoad){
      this.playerDescription.innerText = articles[0].description;
      this.playerTitle.innerText = articles[0].title;
      this.playerImg.style.background = "url('" + articles[0].imgUrl + "')";
      this.firstLoad = true;
    }
  }

  playHandler(){
    const {play,setPlay, setArticle, currentArticleIndex,} = this.props;
    if(currentArticleIndex === -1){
      setArticle(0);
    }
    setPlay(!play);
  }
  render() {
    const {
      currentArticleIndex, 
      play, 
      setPlay, 
      articles, 
      setArticles, 
      setArticle, 
      speechConfig, 
      setSpeechVol, 
      setSpeechSpeed, 
      setSpeechPitch, 
      setSpeechVoice
    } = this.props;
    return (
      <div className="container">
          <div className="title-container">
          <span>
            
          </span>
              <h1>
                  News Voice Player
              </h1>                
          </div>
          <div className="content-container">
              <div className="articlethumb">
                <ArticleThumbComponent
                    play={play}
                    setPlay={setPlay}
                    articles={articles}
                    setArticles={setArticles}
                    setArticle={setArticle}
                    currentArticleIndex={currentArticleIndex}
                />
              </div>
              <div className="player" ref={(node) => { this.playerImg = node;}}>
                <div className="image-container">               
                  <div className="text-container">
                    <div className="title">
                      <h1 ref={(node) => { this.playerTitle = node;}}>&nbsp;</h1>
                    </div>
                    <div className="description">
                      <p ref={(node) => { this.playerDescription = node;}}>
                        &nbsp;&nbsp;&nbsp;
                      </p>
                    </div>
                  </div>
                  <div className="icon-player-container">
                    <div className="icon-player" onClick={this.playHandler}>
                      {
                        play?<FontAwesomeIcon icon={['far', 'pause-circle']} />
                        :<FontAwesomeIcon icon={['fa', 'play-circle']} />
                      }
                    </div>
                  </div>                     
                </div>
              </div>
              <div className="settings">
                  <div className="title">
                    <h2>Settings</h2>
                  </div>
                  <SpeechConfigComponent 
                      currentArticleIndex={currentArticleIndex}
                      play={play}
                      setPlay={setPlay}
                      articles={articles}
                      setArticle={setArticle}
                      setArticles={setArticles}
                      speechConfig={speechConfig} 
                      setSpeechVol={setSpeechVol} 
                      setSpeechSpeed={setSpeechSpeed}
                      setSpeechPitch={setSpeechPitch} 
                      setSpeechVoice={setSpeechVoice}
                  />
              </div>
          </div>
      </div>
    );
  }
  }
  
  export default HomeComponent;
  