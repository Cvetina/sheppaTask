import React from 'react'
import { connect } from "react-redux"
import { dispatch } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { resetLawyer }  from '../actions/lawyersActions'
import { saveLawyerCard, toggleCard }  from '../actions/uiActions'
import style from './styles/App.scss'

@connect((store) => {
    return {
      savedLawyerCard: store.ui.savedLawyerCard
    };
  })
export default class EmptyLawyerCard extends React.Component {
    saveChosenLawyerCard (index) {
        if(!index) {
            this.props.dispatch(saveLawyerCard(0));
        } else {
            this.props.dispatch(saveLawyerCard(index));
        }
        this.props.dispatch(toggleCard());
        this.props.dispatch(resetLawyer());
    }
    render () {
        const { choosenLawyer, index } = this.props;
    return (
        <React.Fragment>
            <div className={style.label}>Points of contact</div>
            {!choosenLawyer 
            ? <div className={style.contactName} />
            : <div className={style.contactName}>{choosenLawyer.name}</div>
            }
            <div className={style.label}>Address</div>
            {!choosenLawyer 
            ? <div className={style.lawyerDetailsRow}>Address and email come from the choise of name</div>
            : <div className={style.lawyerDetailsRow}>{choosenLawyer.address}</div>
            }
            <div className={style.lawyerDetailsRow}>
                <FontAwesomeIcon className={style.icon} icon={faEnvelope} />{choosenLawyer && choosenLawyer.email}
            </div>
            <div className={style.lawyerDetailsRow}>
                <FontAwesomeIcon className={style.icon} icon={faPhone} />{choosenLawyer && choosenLawyer.phone}
            </div>
            <button className={style.button} onClick={() => this.saveChosenLawyerCard(index)}>Save</button>
        </React.Fragment>
    );
    }
}