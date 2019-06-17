import React, {Component} from 'react';
import * as contentful from 'contentful'
import * as Markdown from 'react-markdown'

const SiteContext = React.createContext();

const IntroItem = (props) => {
    console.log(props.basic);
    return (
        <div>
          <Markdown source={props.basic}></Markdown>
          </div>
    ) 
}

class DataProvider extends Component {

    state = {
        introList: []
    }

    client = contentful.createClient({
        space: '4hw4zeqm4fqv',
        accessToken: '2fc48b837f0ac382a95b66a9073e7b9156f94e7602cdbd8e247896a90ec26b3f'
      });

      componentDidMount() {
        this.fetchPosts().then(this.setPosts);
      }
      
      fetchPosts = () => this.client.getEntries()
      setPosts = response => {
        this.setState({
        introList: response.items
        })
      }

    render() {
        return (
            <SiteContext.Provider>
                {this.props.children}
                {
                    this.state.introList.map(({fields}, i) => {
                        return <IntroItem key={i} {...fields} />
                    })
                }
            </SiteContext.Provider>
        )
    }
        
}

export {SiteContext};
export default DataProvider;