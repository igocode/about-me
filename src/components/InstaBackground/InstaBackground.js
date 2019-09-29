import React from 'react';
import axios from 'axios';
import './InstaBackground.scss';
import "babel-polyfill";
require('es6-promise').polyfill();

const ImageBlock = (props) => {
    return (
        <div>
            <div className="text-overlay">
                <div className="text-overlay__inner">
                    <p className="text-overlay__caption">{props.caption}</p>
                    <p className="text-overlay__date">{props.created}</p>
                </div>
            </div>
            <div className="bg-image fade-out" style ={ { backgroundImage: `url(${props.prevImg})` } }></div>
            <div className="bg-image" style ={ { backgroundImage: `url(${props.url})` } }></div>
        </div>
    )
}
class Instagram extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeImgs: [],
            inactiveImgs: [],
        };
        this.getInstaImages();
    }

    intervalID = 0;
    animating = false;

    getInstaImages = () => {
        let token = '1759117483.ebcb0e1.e727496b51af440cbdbc2c4c7f315dfc';
        let num_photos = 20;

        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
            .then(res => {
                const images = res.data.data.map((image) => {
                    console.log(image);
                    return { 
                        url: image.images.standard_resolution.url,
                        id: image.id,
                        caption: image.caption !== null ? this.characterLimit(image.caption.text) : '',
                        created: image.created_time,
                        prevImg: ''
                    }
                })
                return images;
            }).then(images => {
                this.setInitialImgState(images);
            })
            .catch(err => {
                console.log(err)
            })
    }

    setInitialImgState = (images) => { 
        const inactiveImages = [];
        const activeImages = images.filter((el, index) => {
            if(index <= 14){
                return el
            } else {
                inactiveImages.push(el);
            }
        }); 
        
        this.setState({
            activeImgs: activeImages,
            inactiveImgs: inactiveImages
        });
    }

    setRandomImages = () => {            
            const activeImages = this.state.activeImgs;
            const randomActiveValue = Math.floor(Math.random()*activeImages.length);
            const randomActiveItem = activeImages[randomActiveValue];
            const inactiveImages = this.state.inactiveImgs;
            const randominActiveValue = Math.floor(Math.random()*inactiveImages.length);
            const randominActiveItem = inactiveImages[randominActiveValue];
            
            inactiveImages[randominActiveValue] = randomActiveItem;
            activeImages[randomActiveValue] = randominActiveItem;

            if(activeImages[randomActiveValue].prevImg === undefined || activeImages[randomActiveValue].prevImg !== randominActiveItem.url){
                activeImages[randomActiveValue].prevImg = randomActiveItem.url;
            } 

            this.setState({
                inactiveImgs: inactiveImages,
                activeImgs: activeImages
            })      
    }

    updateImages = () => {
        if(this.props.introActive === true) {
            this.intervalID = setInterval(e => this.setRandomImages(), 1000)
        }
    }

    clearAnimation = () => {
        clearInterval(this.intervalID);
    }

    componentDidMount(){
        if(this.animating === false){
            this.updateImages();
            this.animating = true;
        }
    }

    characterLimit = (text) => {
        const character = text.split("");
        const characterLimit = 180;
        const caption = character.filter((val, i) => i < characterLimit ? val  : '');
        if(character.length > characterLimit){
            caption.push('...');
        }
        return caption.join('');
    }

    convertDate = (timestamp) => {
        const d = new Date(timestamp * 1000);
        return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
    }

    render() {
        let background = `insta-background ${this.props.lightSwitch ? 'insta-background--lights-on ' : ''}`;
        background += `${this.props.introActive === false ? ' insta-background--hide' : 'insta-background--animate-in'}`;

        if (this.props.introActive !== true || this.props.lightSwitch === true) {
            this.clearAnimation();
            this.animating = false;
        } else if(this.props.introActive === true && this.animating === false) {
            this.updateImages();
            this.animating = true;
        }
        
        return (
            <div className={background}>
                { 
                   this.state.activeImgs.map((image) => {
                       let props = {
                           id: image.id,
                           url: image.url,
                           caption: image.caption,
                           created: this.convertDate(image.created),
                           prevImg: image.prevImg
                       }

                        return <ImageBlock key={props.id} {...props} />
                    })
                 }
            </div>
        )
    }
}

export default Instagram;