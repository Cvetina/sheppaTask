import React from 'react'
import classNames from "classNames"
import onClickOutside from "react-onclickoutside"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { chooseLawyer, resetLawyer }  from '../actions/lawyersActions'
import { saveSuggestion, toggleSuggestions, showErrorMessage }  from '../actions/uiActions'
import style from './styles/App.scss'

@onClickOutside
export default class InputTypehaed extends React.Component {
  changeInputField (e) {
    const { dispatch, choosenLawyer, areSuggestionsVisible, lawyers, errorMessage } = this.props;
    e.preventDefault();
    if (choosenLawyer) {
      dispatch(resetLawyer());
      this.props.dispatch(chooseLawyer(null))
    }
    if (errorMessage) {
      dispatch(showErrorMessage(false));
    }
    if (!areSuggestionsVisible) {
      dispatch(toggleSuggestions());
    }
    const inputValue = e.target.value.trim().toLowerCase();
    const inputLength = inputValue.length;
   
    const suggestions = lawyers.filter((lawyer) =>
    lawyer.name.toLowerCase().slice(0, inputLength) === inputValue)
    dispatch(saveSuggestion(suggestions))
  }

  chooseLawyerCard (lawyerName) {
      this.props.dispatch(toggleSuggestions());
      this.props.dispatch(chooseLawyer(lawyerName));
      this.props.dispatch(showErrorMessage(false));
  }

  onFocus (e) {
    e.preventDefault();
    this.changeInputField(e)
  }

  handleClickOutside(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    if (this.props.areSuggestionsVisible){
      this.props.dispatch(toggleSuggestions());
    }
  }

  render() {
    const { choosenLawyer, toggleCard, lawyers,
            suggestions, areSuggestionsVisible, errorMessage 
          } = this.props;

    const inputTypeheadStyle = classNames(style.inputTypehead, { [style.error]: errorMessage});
  
    return (
        <div ref={node => {this.node = node}}>
            <input
                class={inputTypeheadStyle}
                placeholder="Please select lawyer name"
                onChange={this.changeInputField.bind(this)}
                value={choosenLawyer}
                onFocus={this.onFocus.bind(this)}
                />
            <FontAwesomeIcon className={style.dropdownArrow} icon={faCaretDown} />
            <ul class={style.sugesstedList}>
                {areSuggestionsVisible && suggestions.map((lawyer, index) =>
                    <li class={style.sugesstedItem} key={index} onClick={() => this.chooseLawyerCard(lawyer.name)}>
                    {lawyer.name}
                    </li>
                )} 
            </ul>
        </div>
    );
  }
}