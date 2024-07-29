import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


class ConditionalRender extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }
    render() {
         return <><React.Fragment>
            <ul>
                {this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}
            </ul>
        </React.Fragment></>
    }
}
export default ConditionalRender