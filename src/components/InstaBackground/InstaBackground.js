import React from 'react';
import axios from 'axios';
import './InstaBackground.scss';
import "babel-polyfill";
require('es6-promise').polyfill();

const ImageBlock = (props) => {
    return (
        <div>
            <div className="bg-image fade-out" style ={ { backgroundImage: `url(${props.image.prevImg})` } }></div>
            <div className="bg-image" style ={ { backgroundImage: `url(${props.image.url})` } }></div>
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
                    return { 
                        url: image.images.standard_resolution.url,
                        id: image.id,
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
        if(this.props.introOpen === true) {
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

    render() {
        let background = `insta-background ${this.props.lightSwitch ? 'insta-background--lights-on ' : ''}`;
        background += `${this.props.introOpen === false ? ' insta-background--hide' : 'insta-background--animate-in'}`;

        if (this.props.introOpen !== true || this.props.lightSwitch === true) {
            this.clearAnimation();
            this.animating = false;
        } else if(this.props.introOpen === true && this.animating === false) {
            this.updateImages();
            this.animating = true;
        }
        
        return (
            <div className={background}>
                { 
                   this.state.activeImgs.map((image) => {
                        return <ImageBlock key={image.id} image={image} />
                    })
                 }
            </div>
        )
    }
}

export default Instagram;