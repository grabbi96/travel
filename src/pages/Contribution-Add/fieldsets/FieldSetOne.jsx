import React from 'react';
import { MDBCol, MDBBtn } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
	geocodeByAddress,
	geocodeByPlaceId,
	getLatLng,
  } from 'react-places-autocomplete';
import Input from '../../../components/Form/Input/Input'
class FieldSetOne extends React.Component {
	constructor(props) {
		super(props);
		this.state = { address: '' };
	  }
	
	  handleChange = address => {
		this.setState({ address });
	  };
	
	  handleSelect = address => {
		this.setState({
			address
		})
		geocodeByAddress(address)
		  .then(results => getLatLng(results[0]))
		  .then(latLng => console.log('Success', latLng))
		  .catch(error => console.error('Error', error));
	  };
	render(){
	return (
			<MDBCol md="12" className="contribution-add-location">
			<PlacesAutocomplete
				value={this.props.value}
				onChange={this.props.changed}
				onSelect={this.handleSelect}
			>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
				<div>
					<div className="form-group icon-parent">
					<input
						{...getInputProps({
							placeholder: 'Search Places ...',
							className: 'location-search-input form-control round',
						})}
						required
						/>
							<FontAwesomeIcon icon={faMapMarked} className="icon-children" />
						</div>
					

					<div className="autocomplete-dropdown-container">
					{loading && <div>Loading...</div>}
					{suggestions.map(suggestion => {
						const className = suggestion.active
						? 'suggestion-item--active'
						: 'suggestion-item';
						// inline style for demonstration purpose
						const style = suggestion.active
						? { backgroundColor: '#fafafa', cursor: 'pointer' }
						: { backgroundColor: '#ffffff', cursor: 'pointer' };
						return (
						<div
							{...getSuggestionItemProps(suggestion, {
							className,
							style,
							})}
						>
							<span>{suggestion.description}</span>
						</div>
						);
					})}
					</div>
				</div>
				)}
			</PlacesAutocomplete>
				<MDBBtn
					color="mdb-color"
					rounded
					className="float-right custom-btn"
					onClick={()=> this.props.clickHandler()}
				>
					next
				</MDBBtn>
			</MDBCol>
	);
	}
};

export default FieldSetOne
