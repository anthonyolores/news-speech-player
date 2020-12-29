export function setPlay(play){
    return {
        type:'SET_PLAY',
        payload: play
    };
};

export function setSpeechConfig(config){
    return {
        type:'SET_SPEECH_CONFIG',
        payload: config
    };
};

export function setSpeechVol(vol){
    return {
        type:'SET_SPEECH_VOL',
        payload: vol[0]
    };
};

export function setSpeechSpeed(speed){
    return {
        type:'SET_SPEECH_SPEED',
        payload: speed[0]
    };
};

export function setSpeechPitch(pitch){
    return {
        type:'SET_SPEECH_PITCH',
        payload: pitch[0]
    };
};

export function setSpeechVoice(voice){
    return {
        type:'SET_SPEECH_VOICE',
        payload: voice
    };
};

export function setArticles(articles){
    return {
        type:'SET_ARTICLES',
        payload: articles
    };
};

export function setArticle(index){
    return {
        type:'SET_ARTICLE',
        payload: index
    };
};
