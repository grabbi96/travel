import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignature, faFile, faMapMarkedAlt, faCalendar, faMoneyBillWaveAlt, faUser, faLanguage, faClock } from '@fortawesome/free-solid-svg-icons';
import './Add-Event.css'
import Dropzone from 'react-dropzone'
import classNames from 'classnames'
// font awesome
class AddEvent extends Component {
    state = {
		formActivePanel1: 1,
		formActivePanel1Changed: false,
    progress: 10,
    imageUrl:[]
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
                                    	<i className="fas fa-info-circle"></i>
									</div>
									<p>General Info</p>
								</div>
								<div className={this.formWizardClass(2)}>
									<div className="wizard-icon">
                                    	<i className="fas fa-home"></i>
									</div>
									<p>Accommodations</p>
								</div>
								<div className={this.formWizardClass(3)}>
									<div className="wizard-icon">
										<i className="fa fa-upload" aria-hidden="true" />
									</div>
									<p>Image Upload</p>
								</div>
								<div className={this.formWizardClass(4)}>
									<div className="wizard-icon">
                                    	<i className="fas fa-utensils"></i>
									</div>
									<p>Food Plan</p>
								</div>
								<div className={this.formWizardClass(5)}>
									<div className="wizard-icon">
                                    	<i className="fas fa-shuttle-van"></i>
									</div>
									<p>Transportation</p>
								</div>
							</div>
							{this.state.formActivePanel1 === 1 && (
                                <MDBCol className="event-add-fieldset">
									<div className="form-group  icon-parent">
										<label htmlFor="title">Title</label>
										<input
											className="form-control"
											autoFocus={this.calculateAutofocus(1)}
											placeholder="Title"
										/>
										<FontAwesomeIcon icon={faSignature} className="icon-children" />
									</div>

									<MDBRow>
										<MDBCol md="6">
											<div className="form-group  icon-parent">
												<label htmlFor="title">Feature Image</label>
												<input
												type="file"
													className="form-control"
													autoFocus={this.calculateAutofocus(1)}
												/>
												<FontAwesomeIcon icon={faFile} className="icon-children" />
											</div>
										</MDBCol>
										<MDBCol md="6">
											<div className="form-group  icon-parent">
												<label htmlFor="title">Location</label>
												<input
													type="text"
													className="form-control"
													autoFocus={this.calculateAutofocus(1)}
													placeholder="Location"
												/>
												<FontAwesomeIcon icon={faMapMarkedAlt} className="icon-children" />
											</div>
										</MDBCol>
										<MDBCol md="4">
											<div className="form-group  icon-parent">
												<label htmlFor="title">Trip Start Date</label>
												<input
													type="date"
													className="form-control"
													autoFocus={this.calculateAutofocus(1)}
													placeholder="Location"
												/>
												<FontAwesomeIcon icon={faCalendar} className="icon-children" />
											</div>
										</MDBCol>
										<MDBCol md="4">
											<div className="form-group  icon-parent">
												<label htmlFor="title">Trip End Date</label>
												<input
													type="date"
													className="form-control"
													autoFocus={this.calculateAutofocus(1)}
													placeholder="Location"
												/>
												<FontAwesomeIcon icon={faCalendar} className="icon-children" />
											</div>
										</MDBCol>
										<MDBCol md="4">
											<div className="form-group  icon-parent">
												<label htmlFor="title">Registration Deadline</label>
												<input
													type="date"
													className="form-control"
													autoFocus={this.calculateAutofocus(1)}
													placeholder="Location"
												/>
												<FontAwesomeIcon icon={faCalendar} className="icon-children" />
											</div>
										</MDBCol>
										<MDBCol md="4">
											<div className="form-group  icon-parent">
												<label htmlFor="title">Cancellation Deadline</label>
												<input
													type="date"
													className="form-control"
													autoFocus={this.calculateAutofocus(1)}
													placeholder="Location"
												/>
												<FontAwesomeIcon icon={faCalendar} className="icon-children" />
											</div>
										</MDBCol>
										<MDBCol md="4">
											<div className="form-group  icon-parent">
												<label htmlFor="title">Total Cost</label>
												<input
													type="text"
													className="form-control"
													autoFocus={this.calculateAutofocus(1)}
													placeholder="Total Cost"
												/>
												<FontAwesomeIcon icon={faMoneyBillWaveAlt} className="icon-children" />
											</div>
										</MDBCol>
										<MDBCol md="4">
											<div className="form-group  icon-parent">
												<label htmlFor="title">Total Seat</label>
												<input
													type="number"
													className="form-control"
													autoFocus={this.calculateAutofocus(1)}
													placeholder="Total Seat"
												/>
												<FontAwesomeIcon icon={faUser} className="icon-children" />
											</div>
										</MDBCol>


									</MDBRow>
                                	<div className="form-group  icon-parent">
                                        <label htmlFor="title">Total Seat</label>
                                        <textarea type="number" className="form-control" placeholder="description"></textarea>
                                    </div>
                                    <MDBBtn
										color="mdb-color"
										rounded
										className="float-right custom-btn"
										onClick={this.handleNextPrevClick(1)(2)}
									>
										next
									</MDBBtn>
                                </MDBCol>
							)}

							{this.state.formActivePanel1 === 2 && (
                                    <MDBCol className="event-add-fieldset">
										<div className="form-group  icon-parent">
											<label htmlFor="title">Name</label>
											<input
												type="text"
												className="form-control"
												autoFocus={this.calculateAutofocus(1)}
												placeholder="Name"
											/>
											<FontAwesomeIcon icon={faSignature} className="icon-children" />
										</div>
										<div className="form-group  icon-parent">
											<label htmlFor="title">language</label>
											<input
												type="text"
												className="form-control"
												autoFocus={this.calculateAutofocus(1)}
												placeholder="language"
											/>
											<FontAwesomeIcon icon={faLanguage} className="icon-children" />
										</div>
										<div className="form-group  icon-parent">
											<label htmlFor="title">Category</label>
											<select className="browser-default custom-select form-control">
											<option>Choose your option</option>
											<option value="1">Option 1</option>
											<option value="2">Option 2</option>
											<option value="3">Option 3</option>
											</select>
											<FontAwesomeIcon icon={faLanguage} className="icon-children" />
										</div>

										<div className="form-group  icon-parent">
											<label htmlFor="title">Best Time Limit</label>
											<input
												type="text"
												className="form-control"
												autoFocus={this.calculateAutofocus(1)}
												placeholder="Best Time Limit"
											/>
											<FontAwesomeIcon icon={faClock} className="icon-children" />
										</div>
										<MDBBtn
											rounded
											className="float-left grey lighten-2"
											onClick={this.handleNextPrevClick(1)(1)}
										>
											previous
										</MDBBtn>
										<MDBBtn
											color="mdb-color"
											rounded
											className="float-right custom-btn"
											onClick={this.handleNextPrevClick(1)(3)}
										>
											next
										</MDBBtn>
                                	</MDBCol>
								)}

							{this.state.formActivePanel1 === 3 && (
                                   <MDBCol className="event-add-fieldset">
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
								   <MDBCol className="contribution-add-location">
									   <MDBBtn
										   rounded
										   className="float-left grey lighten-2"
										   onClick={this.handleNextPrevClick(1)(3)}
									   >
										   previous
									   </MDBBtn>
									   <MDBBtn
										   color="mdb-color"
										   rounded
										   className="float-right custom-btn"
										   onClick={this.handleNextPrevClick(1)(5)}
									   >
										   next
									   </MDBBtn>
                               </MDBCol>
							)}

							{this.state.formActivePanel1 === 5 && (
                                <MDBCol className="contribution-add-location">
                                    <h1>five</h1>
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

export default AddEvent;