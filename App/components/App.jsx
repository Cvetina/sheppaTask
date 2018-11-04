import React from 'react'
import { dispatch } from 'redux'
import { connect } from "react-redux"
import classNames from "classNames"
import { loadLawyers }  from '../API/httpRequests'
import { chooseLawyer }  from '../actions/lawyersActions'
import { toggleCard, showErrorMessage, toggleSuggestions }  from '../actions/uiActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import SavedLawyerCard from './SavedLawyerCard'
import EmptyLawyerCard from './EmptyLawyerCard'
import InputTypehaed from './InputTypehaed'
import style from './styles/App.scss'

@connect((store) => {
  return {
    lawyers: store.lawyers.lawyers,
    choosenLawyer: store.lawyers.choosenLawyer,
    completed: store.lawyers.completed,
    toggleCard: store.ui.toggleCard,
    savedLawyerCard: store.ui.savedLawyerCard,
    suggestions: store.ui.suggestions,
    areSuggestionsVisible: store.ui.areSuggestionsVisible,
    errorMessage: store.ui.showErrorMessage
  };
})
export default class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadLawyers());
  }

  toggleLawyerCard () {
    this.props.dispatch(toggleCard());
    this.props.dispatch(chooseLawyer());
    if (this.props.areSuggestionsVisible) {
      this.props.dispatch(toggleSuggestions());
    }
    this.props.dispatch(showErrorMessage(false));
  }
  render() {
    const { lawyers, completed, choosenLawyer, savedLawyerCard, toggleCard,
            suggestions, areSuggestionsVisible, errorMessage, dispatch 
          } = this.props;
  
    const arrowStyle = classNames(style.arrow, { [style.active]: toggleCard});
    const inputTypeheadStyle = classNames(style.inputTypehead, { [style.error]: errorMessage});
    const shouldShowSuggestions = suggestions && areSuggestionsVisible && suggestions.length !== 0;
  
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
                  <InputTypehaed
                    lawyers={lawyers}
                    choosenLawyer={choosenLawyer}
                    suggestions={suggestions}
                    areSuggestionsVisible={areSuggestionsVisible}
                    errorMessage={errorMessage}
                    dispatch={dispatch}
                  />
              </div>
              <EmptyLawyerCard
                choosenLawyer={choosenLawyer}
                suggestions={suggestions}
                areSuggestionsVisible={areSuggestionsVisible}
                showErrorMessage={errorMessage}
                dispatch={dispatch}
              />
          </div>
          }
        </div>
    );
  }
}