import React from 'react'
import { dispatch } from 'redux'
import { connect } from "react-redux"
import  { loadLawyers }  from '../API/httpRequests'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

@connect((store) => {
  return {
    lawyers: store.lawyers
  };
})
export default class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadLawyers());
  }
  render() {
    
    if(this.props.lawyers.completed === true) {
      console.log(this.props.lawyers);
    }
    return (
        <div>
          Hello There!!!
          <FontAwesomeIcon icon={faPencilAlt} />
        </div>
    );
  }
}