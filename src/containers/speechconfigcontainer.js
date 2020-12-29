import { connect } from 'react-redux';
import HomeComponent from './../components/homecomponent';
import {setPlay, setSpeechConfig, setSpeechVol, setSpeechSpeed, setSpeechPitch, setSpeechVoice, setArticles, setArticle} from './../actions/speechconfigaction';

const mapStateToProps = (state) => {
   return {
    currentArticleIndex: state.currentArticleIndex,
    articles: state.articles,
    speechConfig: state.speechConfig,
    play: state.play
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
    setPlay: (play) => dispatch(setPlay(play)),
    setSpeechConfig: (config) => dispatch(setSpeechConfig(config)),
    setSpeechVol: (vol) => dispatch(setSpeechVol(vol)),
    setSpeechSpeed: (speed) => dispatch(setSpeechSpeed(speed)),
    setSpeechPitch: (pitch) => dispatch(setSpeechPitch(pitch)),
    setSpeechVoice: (voice) => dispatch(setSpeechVoice(voice)),
    setArticles: (articles) => dispatch(setArticles(articles)),
    setArticle: (index) => dispatch(setArticle(index)),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);