const reducer = (
    state = 
    {
        currentArticleIndex:-1,
        play: false,
        articles: [],
        speechConfig: 
        {
            vol: 1,
            voice: 'Google US English',
            speed: 1,
            pitch:1,
        }
    }, 
    action) => {
    switch(action.type){
        case 'SET_PLAY': 
        {
            return Object.assign({}, state, {play: action.payload});
        }
        case 'SET_SPEECH_CONFIG': 
        {
            return Object.assign({}, state, {speechConfig: action.payload});
        }
        case 'SET_SPEECH_VOL': 
        {
            let newConfig = Object.assign({}, state.speechConfig, {vol: action.payload});
            return Object.assign({}, state, {speechConfig: newConfig});
        }
        case 'SET_SPEECH_SPEED':  
        {
            let newConfig = Object.assign({}, state.speechConfig, {speed: action.payload});
            return Object.assign({}, state, {speechConfig: newConfig});
        }
        case 'SET_SPEECH_PITCH': 
        {
            let newConfig = Object.assign({}, state.speechConfig, {pitch: action.payload});
            return Object.assign({}, state, {speechConfig: newConfig});
        }
        case 'SET_SPEECH_VOICE': 
        {
            let newConfig = Object.assign({}, state.speechConfig, {voice: action.payload});
            return Object.assign({}, state, {speechConfig: newConfig});
        }            
        case 'SET_ARTICLES':{
            return Object.assign({}, state, {articles: action.payload});
        }
        case 'SET_ARTICLE':{
            if(state.articles !== []){
                let newArticles = state.articles.slice();
                newArticles.map((article) => {
                    article.active = false;
                    return article;
                });
                newArticles[action.payload].active = !newArticles[action.payload].active;
                return Object.assign({}, state, {play:newArticles[action.payload].active}, {currentArticleIndex: action.payload}, {articles: newArticles});
            }
            else
                break;

        }
        default: return state;
        }
};

export default reducer;