import axios from 'axios'
import { loadLowyarsList, errorLoadingLowyarsList } from '../actions/lawyersActions'

export function loadLawyers() {  
  return function(dispatch) {
    axios.get(`/App/data/Lawyers.json`)
    .then((response) => {
      dispatch(loadLowyarsList(response))
    }).catch(err => {
      dispatch(errorLoadingLowyarsList(err))
    });
  };
}