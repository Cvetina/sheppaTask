import axios from 'axios'
import { loadLowyarsList, errorLoadingLowyarsList } from '../actions/lawyersActions'

export function loadLawyers() {  
  return function(dispatch) {
    axios.get(`/App/data/Lawyers.json`)
    .then((response) => {
      const lawyers = response.data.list
      dispatch(loadLowyarsList(lawyers))
    }).catch(err => {
      dispatch(errorLoadingLowyarsList(err))
    });
  };
}