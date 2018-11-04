import React from 'react'
import classNames from "classNames"
import { chooseLawyer, resetLawyer }  from '../actions/lawyersActions'
import { saveSuggestion, toggleSuggestions, showErrorMessage }  from '../actions/uiActions'
import style from './styles/App.scss'


export default class InputTypehaed extends React.Component {
  changeInputField (e) {
    const { dispatch, choosenLawyer, areSuggestionsVisible, lawyers, errorMessage } = this.props;
    e.preventDefault();
    if (choosenLawyer) {
      dispatch(resetLawyer());
    }
    if (errorMessage) {
      dispatch(showErrorMessage(false));
    }
    if (!areSuggestionsVisible) {
      dispatch(toggleSuggestions());
    }
    const inputValue = e.target.value.trim().toLowerCase();
    const inputLength = inputValue.length;
   
    if (lawyers) {  
        const suggestions = inputLength === 0
                        ? []
                        : lawyers.filter((lawyer) =>
                          lawyer.name.toLowerCase().slice(0, inputLength) === inputValue)
        dispatch(saveSuggestion(suggestions))
    }
  }

  chooseLawyerCard (lawyerName) {
      this.props.dispatch(toggleSuggestions());
      this.props.dispatch(chooseLawyer(lawyerName));
      this.props.dispatch(showErrorMessage(false));
  }

  render() {
    const { choosenLawyer, toggleCard,
            suggestions, areSuggestionsVisible, errorMessage 
          } = this.props;

    const inputTypeheadStyle = classNames(style.inputTypehead, { [style.error]: errorMessage});
  
    return (
        <React.Fragment>
            <input
                class={inputTypeheadStyle}
                placeholder="Type lawyer name"
                onChange={this.changeInputField.bind(this)}
                value={choosenLawyer}
            />
            <ul class={style.sugesstedList}>
                {suggestions && areSuggestionsVisible && suggestions.map((lawyer, index) =>
                    <li class={style.sugesstedItem} key={index} onClick={() => this.chooseLawyerCard(lawyer.name)}>
                    {lawyer.name}
                    </li>
                )} 
            </ul>
        </React.Fragment>
    );
  }
}