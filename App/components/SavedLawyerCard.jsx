import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import style from './styles/App.scss'

function SavedLawyerCard({ savedLawyerCard }) {
  const [ lawyer ] = savedLawyerCard;

    return (
        <React.Fragment>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Name</span>
            <span>{lawyer.name}</span>
          </div>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Point of contact</span>
            <span>{lawyer.name}</span>
          </div>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Email</span>
            <span className={style.emailContainer}>
              <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
              {lawyer.email}
            </span>
          </div>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Phone</span>
            <span className={style.phoneContainer}>
              <FontAwesomeIcon className={style.icon} icon={faPhone} />
              {lawyer.phone}
            </span>
          </div>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Address</span>
            <span className={style.address}>{lawyer.address}</span>
          </div>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Country code</span>
            <span>{lawyer.countryCode}</span>
          </div>
          <div className={style.lawyerDetailsRow}>
            <span className={style.label}>Program</span>
            <span>{lawyer.program}</span>
          </div>
      </React.Fragment>
    );
}
export default SavedLawyerCard