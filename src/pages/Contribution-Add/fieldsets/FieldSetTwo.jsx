import React from 'react';
import { MDBCol, MDBBtn} from 'mdbreact';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignature, faLanguage, faTasks, faClock } from '@fortawesome/free-solid-svg-icons';
const FieldSetTwo = (props) => {
	return (
		<MDBCol md="12" className="contribution-add-location">
			<div className="form-group icon-parent">
				<input className="form-control  round" autoFocus={props.calculateAuto(1)} placeholder="Name" />
				<FontAwesomeIcon icon={faSignature} className="icon-children" />
			</div>
			<div className="form-group icon-parent">
				<input className="form-control  round" autoFocus={props.calculateAuto(1)} placeholder="Language" />
				<FontAwesomeIcon icon={faLanguage} className="icon-children" />
			</div>
			<div className="form-group icon-parent">
				<select className="browser-default form-control custom-select round">
					<option>Choose your option</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>
				<FontAwesomeIcon icon={faTasks} className="icon-children" />
			</div>
			<div className="form-group icon-parent">
				<input
					className="form-control  round"
					autoFocus={props.calculateAuto(1)}
					placeholder="Best Time Limit"
				/>
				<FontAwesomeIcon icon={faClock} className="icon-children" />
			</div>

			<MDBBtn rounded className="float-left grey lighten-2" onClick={()=> props.previousHandler()}>
				previous
			</MDBBtn>
			<MDBBtn
				color="mdb-color"
				rounded
				className="float-right custom-btn"
				onClick={()=> props.nextHandler()}
			>
				next
			</MDBBtn>
		</MDBCol>
	);
};

export default FieldSetTwo;
