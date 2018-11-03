import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import style from './styles/App.scss'

function SavedLawyerCard({ choosenLawyer }) {
    return (
        <React.Fragment>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Name</span>
            <span>{choosenLawyer.name}</span>
          </div>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Point of contact</span>
            <span>{choosenLawyer.name}</span>
          </div>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Email</span>
            <span>
              <FontAwesomeIcon className={style.icon} icon={faEnvelope} />{choosenLawyer.email}
            </span>
          </div>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Phone</span>
            <span>
              <FontAwesomeIcon className={style.icon} icon={faPhone} />{choosenLawyer.phone}
            </span>
          </div>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Address</span>
            <span className={style.address}>{choosenLawyer.address}</span>
          </div>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Country code</span>
            <span>{choosenLawyer.countryCode}</span>
          </div>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Program</span>
            <span>{choosenLawyer.program}</span>
          </div>
      </React.Fragment>
    );
}
export default SavedLawyerCard