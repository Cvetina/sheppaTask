import React from 'react'
import classNames from "classNames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { saveLawyerCard, toggleCard, toggleSuggestions, showErrorMessage }  from '../actions/uiActions'
import style from './styles/App.scss'

export default class EmptyLawyerCard extends React.Component {
    saveChosenLawyerCard (choosenLawyer) {
        const { dispatch, suggestions, areSuggestionsVisible } = this.props;
        if (!choosenLawyer || choosenLawyer.length === 0) {
            dispatch(showErrorMessage(true));
            return;
        }
        const saveSelectedLawyer = suggestions.filter((lawyer) => !lawyer.name.localeCompare(choosenLawyer))
        dispatch(saveLawyerCard(saveSelectedLawyer));
        if (areSuggestionsVisible) {
            dispatch(toggleSuggestions());
        }
        dispatch(toggleCard());
    }
    render () {
        const { choosenLawyer, suggestions, showErrorMessage } = this.props;
        
        const errorMessageStyle = classNames(style.errorMessage, { [style.error]: showErrorMessage});

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
                <div className={style.lawyerDetailsRow}>
                    <button className={style.button} onClick={() => this.saveChosenLawyerCard(choosenLawyer)}>Save</button>
                    <div className={errorMessageStyle}>
                        <FontAwesomeIcon className={style.icon} icon={faExclamationTriangle} />
                        Please type lawyer name!
                    </div>
                </div>
            </React.Fragment>
        );
    }
}