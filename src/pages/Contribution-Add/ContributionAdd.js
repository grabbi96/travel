import React from 'react';
import { MDBContainer, MDBRow, MDBCol,  MDBBtn, MDBInput } from 'mdbreact';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import Dropzone from 'react-dropzone'
import classNames from 'classnames'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
	geocodeByAddress,
	getLatLng,
  } from 'react-places-autocomplete';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './ContributionAdd.css';

import FieldSetTow from './fieldsets/FieldSetTwo'
class ContributionAdd extends React.Component {
	state = {
		address:"",
		formActivePanel1: 1,
		formActivePanel1Changed: false,
		progress: 10,
		imageUrl:[]
	};

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
  	onDrop = (acceptedFiles, rejectedFiles) => {
    	const files = acceptedFiles;

    	files.forEach(file => {
			const myFileItemReader = new FileReader()
			myFileItemReader.addEventListener('load', ()=>{
				this.setState(prevState =>{
					return {
						imageUrl:prevState.imageUrl.concat(myFileItemReader.result)
					}
				})
			}, false)
			myFileItemReader.readAsDataURL(file)
    });
  }
	swapFormActive = (a) => (param) => (e) => {
		this.setState({
			['formActivePanel' + a]: param,
			['formActivePanel' + a + 'Changed']: true
		});
	};

	handleNextPrevClick = (a) => (param) => (e) => {
		this.setState({
			['formActivePanel' + a]: param,
			['formActivePanel' + a + 'Changed']: true,
			progress: 10 + 20 * (param - 1)
		});

		console.log(param);
	};

	handleSubmission = () => {
		alert('Form submitted!');
	};

	calculateAutofocus = (a) => {
		if (this.state['formActivePanel' + a + 'Changed']) {
			return true;
		}
	};
	formWizardClass = (value) => {
		if (value === this.state.formActivePanel1) {
			return [ 'form-wizard', 'active' ].join(' ');
		}
		if (value < this.state.formActivePanel1) {
			return [ 'form-wizard', 'activated' ].join(' ');
		}
		return 'form-wizard';
  };
  removeImage = i =>{
    let newImageUrl = [...this.state.imageUrl]
    newImageUrl.splice(i, 1)
    this.setState({
      imageUrl:newImageUrl
    })
  }
	render() {
    let images = null
        if(this.state.imageUrl){
            images = this.state.imageUrl.map((img, i) => {
                return (
                  <div className="drop-image" key={i}>
                    <img src={img}  alt="asd"/>
                    <a href="/" onClick={(e)=> {e.preventDefault(); this.removeImage(i)}}><i className="far fa-times-circle"></i></a>
                  </div>
                )
            })
        }
		return (
			<section className="section-padding">
				<MDBContainer>
					<h2 className="text-center font-weight-bold pt-4 pb-5 mb-2">
						<strong>Registration form</strong>
					</h2>
					<form action="" method="post">
						<MDBRow>
							<div className="wizards">
								<div className="progressbar">
									<div className="progress-line" style={{ width: this.state.progress + '%' }} />
								</div>
								<div className={this.formWizardClass(1)}>
									<div className="wizard-icon">
										<i className="fa fa-address-card" aria-hidden="true" />
									</div>
									<p>Address</p>
								</div>
								<div className={this.formWizardClass(2)}>
									<div className="wizard-icon">
										<i className="fa fa-info-circle" aria-hidden="true" />
									</div>
									<p>Information</p>
								</div>
								<div className={this.formWizardClass(3)}>
									<div className="wizard-icon">
										<i className="fa fa-upload" aria-hidden="true" />
									</div>
									<p>Image Upload</p>
								</div>
								<div className={this.formWizardClass(4)}>
									<div className="wizard-icon">
										<i className="fas fa-book-open" aria-hidden="true" />
									</div>
									<p>Description</p>
								</div>
								<div className={this.formWizardClass(5)}>
									<div className="wizard-icon">
										<i className="fa fa-check-circle" />
									</div>
									<p>Video &amp; Finish</p>
								</div>
							</div>
							{this.state.formActivePanel1 === 1 && (
								<MDBCol md="12" className="contribution-add-location">
								<PlacesAutocomplete
									value={this.state.address}
									onChange={this.handleChange}
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
										onClick={this.handleNextPrevClick(1)(2)}
									>
										next
									</MDBBtn>
								</MDBCol>
							//   <FieldSetOne
							// 	calculateAuto={this.calculateAutofocus}
							// 	clickHandler={this.handleNextPrevClick(1)(2)}
							// 	changed={this.changeHandler}
							// 	value={this.state.location}/>
							)}

							{this.state.formActivePanel1 === 2 && (
								<FieldSetTow
								calculateAuto={this.calculateAutofocus}
								previousHandler={this.handleNextPrevClick(1)(1)}
								nextHandler={this.handleNextPrevClick(1)(3)}
								/>
							)}

							{this.state.formActivePanel1 === 3 && (
								<MDBCol md="12" className="contribution-add-location">
									<div className="form-group icon-parent">
										<input
											type="file"
											className="form-control  round"
											autoFocus={this.calculateAutofocus(1)}
											placeholder="Best Time Limit"
										/>
										<FontAwesomeIcon icon={faClock} className="icon-children" />
									</div>
									  <div className="drop-area">
										  <p>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</p>

										  <Dropzone onDrop={this.onDrop} accept="image/*">
											{({getRootProps, getInputProps, isDragActive}) => {
												return (
													<div
													{...getRootProps()}
													className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
													>
													<label className="btn custom-btn" htmlFor="dropImage">Select some files</label>
													<input {...getInputProps()} name="dropImage" />
													{
														isDragActive ?
														<p>Drop files here...</p> :""

													}
													</div>
												)
												}}
											</Dropzone>
											<div className="images-area">
											{images}
											</div>
									  </div>
                  
									<MDBBtn
										rounded
										className="float-left grey lighten-2"
										onClick={this.handleNextPrevClick(1)(2)}
									>
										previous
									</MDBBtn>
									<MDBBtn
										color="mdb-color"
										rounded
										className="float-right custom-btn"
										onClick={this.handleNextPrevClick(1)(4)}
									>
										next
									</MDBBtn>
								</MDBCol>
							)}

							{this.state.formActivePanel1 === 4 && (
								<MDBCol md="12" className="contribution-add-location">
									<MDBInput type="textarea" label="Discription..." rows="3" />
									<MDBBtn
										rounded
										className="float-left grey lighten-2"
										onClick={this.handleNextPrevClick(1)(3)}
									>
										previous
									</MDBBtn>
									<MDBBtn
										rounded
										className="float-right custom-btn"
										onClick={this.handleNextPrevClick(1)(5)}
									>
										next
									</MDBBtn>
								</MDBCol>
							)}

							{this.state.formActivePanel1 === 5 && (
								<MDBCol md="12" className="contribution-add-location">
									<div className="form-group icon-parent">
										<input
											className="form-control  round"
											autoFocus={this.calculateAutofocus(1)}
											placeholder="Youtube Link"
										/>
										<FontAwesomeIcon icon={faYoutube} className="icon-children" />
									</div>
									<MDBBtn
										rounded
										className="float-left grey lighten-2"
										onClick={this.handleNextPrevClick(1)(4)}
									>
										previous
									</MDBBtn>
									<MDBBtn
										color="success"
										rounded
										className="float-right"
										onClick={this.handleSubmission}
									>
										submit
									</MDBBtn>
								</MDBCol>
							)}
						</MDBRow>
					</form>
				</MDBContainer>
			</section>
		);
	}
}

export default ContributionAdd;
