import React from 'react'
import { dispatch } from 'redux'
import { connect } from "react-redux"
import classNames from "classNames"
import { loadLawyers }  from '../API/httpRequests'
import { chooseLawyer, resetLawyer }  from '../actions/lawyersActions'
import { showLawyerName, hideLawyerName, toggleCard }  from '../actions/uiActions'
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
    showLawyerName: store.ui.showLawyerName,
    toggleCard: store.ui.toggleCard,
    savedLawyerCard: store.ui.savedLawyerCard
  };
})
export default class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadLawyers());
  }

  changeInputField (e) {
    e.preventDefault();
    if (this.props.choosenLawyer || this.props.choosenLawyer === 0) {
      this.props.dispatch(resetLawyer());
    }
    const userInput = e.target.value;

    this.props.lawyers.map((lawyer) => {
        if(lawyer.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1) {
          this.props.dispatch(showLawyerName());
        } else {
          this.props.dispatch(hideLawyerName());
        }
    })
  }

  submitLawyerName (e) {
    e.preventDefault();
    const userInput = e.target.value;
    this.props.lawyers.map((lawyer, index) => {
      if(lawyer.name === userInput) {
        this.props.dispatch(chooseLawyer(index));
      }
    })
  }

  chooseLawyerCard (index) {
      this.props.dispatch(chooseLawyer(index));
      this.props.dispatch(hideLawyerName());
  }

  toggleLawyerCard () {
    this.props.dispatch(toggleCard());
  }
  render() {
    const { lawyers, completed, showLawyerName, choosenLawyer, savedLawyerCard, toggleCard } = this.props;
    const arrowStyle = classNames(style.arrow, { [style.active]: toggleCard});

    return (
        <div className={style.dropdownContainer}>
          <div className={style.header} onClick={this.toggleLawyerCard.bind(this)}>
            <span className={style.title}>Lawyers</span>
            <FontAwesomeIcon className={arrowStyle} icon={faCaretDown} />
          </div>
          {!toggleCard &&
            <div className={style.content}>
              {completed && savedLawyerCard !== 0 && <SavedLawyerCard choosenLawyer={lawyers[savedLawyerCard]} />}
              {completed && savedLawyerCard === 0 && <SavedLawyerCard choosenLawyer={lawyers[0]} />}
              <span onClick={this.toggleLawyerCard.bind(this)}>
                <FontAwesomeIcon className={style.pencil} icon={faPencilAlt} />
              </span>
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
                  onSubmit={this.submitLawyerName.bind(this)}
                  value={choosenLawyer === 0
                      ? "Lawyer1" 
                      : choosenLawyer && lawyers[choosenLawyer].name }
                  />
                <ul class={style.sugesstedList}>
                {completed && showLawyerName && lawyers.map((lawyer, index) =>
                  <li class={style.sugesstedItem} key={index} onClick={() => this.chooseLawyerCard(index)}>{lawyer.name}</li>
                )} 
                </ul>
              </div>
              <EmptyLawyerCard choosenLawyer={lawyers[choosenLawyer]} index={choosenLawyer} />
          </div>
          }
        </div>
    );
  }
}