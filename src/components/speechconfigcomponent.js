import React, { Component } from 'react';
import SliderComponent from './slidercomponent';
import ButtonComponent from './buttoncomponent';
import SelectComponent from './selectcomponent';

import {getArticles} from '.././scripts/Article';

class SpeechConfigComponent extends Component {
  voices = [];
  clickedArticle = true;
  constructor(props){
    super();
    this.playHandler = this.playHandler.bind(this);
    this.speak = this.speak.bind(this);
    this.setVoices = this.setVoices.bind(this);
    this.getVoices = this.getVoices.bind(this);
    this.setCancelled = this.setCancelled.bind(this);
    this.getCancelled = this.getCancelled.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentArticleIndex !== this.props.currentArticleIndex) {
      this.props = nextProps; 
      this.speak();
    }
    else if (nextProps.play !== this.props.play) {
      if(!nextProps.play){
        speechSynthesis.pause();
      }
      else if(nextProps.play){
        speechSynthesis.resume();
      }
    }
  }
  tempVoices = speechSynthesis.getVoices();
  setVoices(voices){
    this.voices = voices;
    // return new Promise((resolve, reject) => {
      
    //   // this.voices = tempVoices;
    //   // let v = tempVoices.map(voice => {
    //   //   return {label: voice.name, value: voice.name};
    //   // });
    //   // resolve(v);
    //   // speech.init({
    //   //   queue: true,
    //   //   listeners: {
    //   //   onvoiceschanged: voices => {
    //   //       console.log("Voices changed", voices);
    //   //   }
    //   // }
    //   // }).then((data) => {
    //   //   //available voices

    //   // }).catch(e => {
    //   //   console.error("An error occured while initializing : ", e)
    //   // });
    // });
  }
  getVoices(s){
    let setVoicesTemp = this.setVoices;
    if(s!==1){
      return new Promise(resolve=> 
        window.speechSynthesis.onvoiceschanged = resolve)  
        .then(()=> {
          const synth = window.speechSynthesis;
          let tempVoices = synth.getVoices();
          setVoicesTemp(tempVoices);
          let v = tempVoices.map(voice => {
            return {label: voice.name, value: voice.name};
          });
          return v;
        });
    }
    else{
      return this.voices;
    }
  }
  playHandler(){
      const {setArticle, currentArticleIndex, articles} = this.props;
      this.clickedArticle = false;
      if(currentArticleIndex+1 === articles.length){
        setArticle(0);
      }
      else{
        setArticle(currentArticleIndex+1);
      }
  }

  speak(){
    if(this.props.articles == null || this.props.articles.length === 0){
      getArticles().then(
        (response) => {
          this.props.setArticles(response);
          this.startUtter(response[this.props.currentArticleIndex].title + ". " + response[this.props.currentArticleIndex].description, this.playHandler, this.articleClicked);
        },
        (error) => {
          console.log(error);
      });  
    }
    else{
      this.startUtter(this.props.articles[this.props.currentArticleIndex].title + ". " + this.props.articles[this.props.currentArticleIndex].description, this.playHandler, this.articleClicked);
    }
  } 



  cancelled = null;

  setCancelled(value){
    this.cancelled = this.cancelled===null?false:value;
  }
  getCancelled(){
    return this.cancelled;
  }
  startUtter(text, playHandler){ 
    this.utterance = new SpeechSynthesisUtterance();
    let cancel = speechSynthesis.cancel;
    let setCancel = this.setCancelled;
    let getCancel = this.getCancelled;
    //let getVoicesTemp = this.getVoices(1);
    
    speechSynthesis.cancel = function(){
      setCancel(true);
      cancel.apply(speechSynthesis, arguments);
    };
    speechSynthesis.cancel();
    this.utterance.text = text;
    this.oldText = text;
    this.utterance.volume = this.props.speechConfig.vol;
    this.utterance.pitch = this.props.speechConfig.pitch;
    this.utterance.rate = this.props.speechConfig.speed;
    //setting the voice creates the bug
    for(let i = 0; i < this.voices.length ; i++) {
      if(this.voices[i].name === this.props.speechConfig.voice) {
        this.utterance.voice = this.voices[i];
        break;
      }
    }

    this.utterance.onend = function(e, c) {
      if(!getCancel()){
        playHandler();
      }
      setCancel(false);
    };
    
    window.utterances = [];
    window.utterances.push(this.utterance);
    speechSynthesis.speak(this.utterance);
  }

   render() {
      return (
        <div>
            <SliderComponent sliderChangedCallback={this.props.setSpeechVol} label={'Vol'} min={0} max={1} default={this.props.speechConfig.vol} step={1}></SliderComponent>
            <SliderComponent sliderChangedCallback={this.props.setSpeechSpeed} label={'Speed'} min={0} max={2} default={this.props.speechConfig.speed} step={1}></SliderComponent>
            <SliderComponent sliderChangedCallback={this.props.setSpeechPitch} label={'Pitch'} min={0} max={2} default={this.props.speechConfig.pitch} step={1}></SliderComponent>
            {
              <SelectComponent selectChangedCallback={this.props.setSpeechVoice} promiseOptions={this.getVoices} />    
            }
            <ButtonComponent callback={this.setConfig} label={'Set'}></ButtonComponent>
        </div>
      );
   }
}

export default SpeechConfigComponent;