import '../scss/home.scss';
import '../scss/articlethumb.scss';
import {getArticles} from './../scripts/Article';

import React, { Component } from 'react';

class ArticleThumbComponent extends Component {
    currentIndex = -1;
    constructor(props){
        super();
        this.setArcticleActive = this.setArcticleActive.bind(this);
        this.thumbContainer = React.createRef();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.currentArticleIndex !== this.props.currentArticleIndex){
            let height = this.thumbContainer.querySelector("li").offsetHeight;
            let width = this.thumbContainer.querySelector("li").offsetWidth;

            this.thumbContainer.scrollTop = 0;
            this.thumbContainer.scrollLeft = 0;

            this.thumbContainer.scrollTop = nextProps.currentArticleIndex * height;
            this.thumbContainer.scrollLeft = nextProps.currentArticleIndex * width;
        }
    }

    componentDidMount(){       
        const {articles, setArticles} = this.props;
        if(articles == null || articles.length === 0){
            getArticles().then(
              (response) => {
                setArticles(response);
                setTimeout(function(){
                    document.querySelectorAll(".thumb-container li").forEach((li, index) => {
                        if(li.style.backgroundImage === ""){
                            li.style.backgroundImage = "url('"+response[index].imgUrl+"')";
                        }
                    });
                }, 200);
              },
              (error) => {
                console.log(error);
            });  
          }
    }

    setArcticleActive(index){
        const {setArticle} = this.props;
        setArticle(index);
    }

    render(){
        const {articles} = this.props;
        function populateThumbList(listArticles, callback){
            let lis = [];
            listArticles.forEach((element, index) => {
                lis.push(
                <li 
                    onClick={(e, ndex)=>callback(index)}
                    style={{backgroundImage:'url('+element.imgUrl+')'}} 
                    key={index} 
                    className={element.active?'active':''}
                    title={element.title}>
                        <div className="title">{element.title}</div>
                </li>);
            });
            return lis;
        }

         return(
            <div className="thumb-container"
            ref={(node) => { this.thumbContainer = node; }}>
                <ul>
                    {
                        articles.length > 1?                        
                            populateThumbList(articles, this.setArcticleActive)
                        :
                            <li className="loading">Loading Articles...</li>
                    }        
                </ul>
            </div>
        );
    }
}

export default ArticleThumbComponent;