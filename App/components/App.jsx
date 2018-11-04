import React from 'react'
import { dispatch } from 'redux'
import { connect } from "react-redux"
import classNames from "classNames"
import { loadLawyers }  from '../API/httpRequests'
import { chooseLawyer, resetLawyer }  from '../actions/lawyersActions'
import { toggleCard, saveSuggestion, toggleSuggestions }  from '../actions/uiActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import SavedLawyerCard from './SavedLawyerCard'
import EmptyLawyerCard from './EmptyLawyerCard'
import style from './styles/App.scss'

@connect((store) => {
  return {
    lawyers: store.lawyers.lawyers,
    choosenLawyer: store.lawyers.choosenLawyer,
    completed: store.lawyers.completed,
    toggleCard: store.ui.toggleCard,
    savedLawyerCard: store.ui.savedLawyerCard,
    suggestions: store.ui.suggestions,
    areSuggestionsVisible: store.ui.areSuggestionsVisible
  };
})
export default class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadLawyers());
  }

  changeInputField (e) {
    e.preventDefault();
    if (this.props.choosenLawyer) {
      this.props.dispatch(resetLawyer());
    }
    if (!this.props.areSuggestionsVisible) {
      this.props.dispatch(toggleSuggestions());
    }
    const inputValue = e.target.value.trim().toLowerCase();
    const inputLength = inputValue.length;
   
    if (this.props.lawyers) {  
        const suggestions = inputLength === 0
                        ? []
                        : this.props.lawyers.filter((lawyer) =>
                          lawyer.name.toLowerCase().slice(0, inputLength) === inputValue)
        this.props.dispatch(saveSuggestion(suggestions))
    }
  }

  chooseLawyerCard (lawyerName) {
      this.props.dispatch(toggleSuggestions());
      this.props.dispatch(chooseLawyer(lawyerName));
  }

  toggleLawyerCard () {
    this.props.dispatch(toggleCard());
  }
  render() {
    const { lawyers, completed, choosenLawyer, savedLawyerCard, toggleCard, suggestions, areSuggestionsVisible } = this.props;
    const arrowStyle = classNames(style.arrow, { [style.active]: toggleCard});
  
    return (
        <div className={style.dropdownContainer}>
          <div className={style.header} onClick={this.toggleLawyerCard.bind(this)} title='Edit lawyer card'>
            <span className={style.title}>Lawyers</span>
            <FontAwesomeIcon className={arrowStyle} icon={faCaretDown} />
          </div>
          {!toggleCard && completed &&
            <div className={style.content}>
              <SavedLawyerCard savedLawyerCard={savedLawyerCard ? savedLawyerCard : lawyers} />
              <div onClick={this.toggleLawyerCard.bind(this)}>
                <FontAwesomeIcon className={style.pencil} icon={faPencilAlt}  title='Edit lawyer card' />
              </div>
            </div>
          }
          {toggleCard &&
            <div className={style.content}>
              <div class={style.selectContainer}>
              < div className={style.label}>Name</div>
                <input
                  class={style.inputTypehead}
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
              </div>
              <EmptyLawyerCard choosenLawyer={choosenLawyer} suggestions={suggestions} />
          </div>
          }
        </div>
    );
  }
}