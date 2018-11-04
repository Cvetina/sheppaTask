import React from 'react'
import { connect } from "react-redux"
import { dispatch } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { saveLawyerCard, toggleCard, toggleSuggestions }  from '../actions/uiActions'
import style from './styles/App.scss'

@connect((store) => {
    return {
        areSuggestionsVisible: store.ui.areSuggestionsVisible
    };
})
export default class EmptyLawyerCard extends React.Component {
    saveChosenLawyerCard (choosenLawyer) {
        const saveSelectedLawyer = this.props.suggestions.filter((lawyer) => !lawyer.name.localeCompare(choosenLawyer))
        this.props.dispatch(saveLawyerCard(saveSelectedLawyer));
        if (this.props.areSuggestionsVisible) {
            this.props.dispatch(toggleSuggestions());
        }
        this.props.dispatch(toggleCard());
    }
    render () {
        const { choosenLawyer, suggestions } = this.props;

        const getSelectedLawyerProperties = (suggestions, property) => 
            suggestions.filter((lawyer) => !lawyer.name.localeCompare(choosenLawyer))
            .map((lawyer) => <div className={property === 'name' ? style.contactName : style.row}>{lawyer[property]}</div>)

    return (
        <React.Fragment>
            <div className={style.label}>Points of contact</div>
            {!choosenLawyer 
                ? <div className={style.contactName} />
                : getSelectedLawyerProperties(suggestions, 'name')
            }
            <div className={style.label}>Address</div>
            {!choosenLawyer 
                ? <div className={style.lawyerDetailsRow}>Address and email come from the choise of name</div>
                : getSelectedLawyerProperties(suggestions, 'address')
            }
            <div className={style.lawyerDetailsRow}>
                <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
                {getSelectedLawyerProperties(suggestions, 'email')}
            </div>
            <div className={style.lawyerDetailsRow}>
                <FontAwesomeIcon className={style.icon} icon={faPhone} />
                {getSelectedLawyerProperties(suggestions, 'phone')}
            </div>
            <button className={style.button} onClick={() => this.saveChosenLawyerCard(choosenLawyer)}>Save</button>
        </React.Fragment>
    );
    }
}