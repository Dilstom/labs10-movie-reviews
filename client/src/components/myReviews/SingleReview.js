// import React, { Component } from 'react';

// import axios from 'axios';

// import ReviewForm from './ReviewForm';

// class SingleReview extends Component {
//   state = {
//     review: null,
//     textBody: '',
//     isEditing: false,
//     modalIsOpen: false
//   };

//   componentDidMount() {
//     const id = this.props.match.params.id;
//     this.fetchReview(id);
//   }

//   fetchReview = id => {
//     axios
//       .get(`http://localhost:5000/api/${id}`)
//       .then(response => {
//         console.log(response);
//         this.setState(() => ({ review: response.data }));
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   // sets review id to this.id for use in deleting
//   get id() {
//     return this.props.match.params.id;
//   }

//   // activates delete modal
//   openModal = e => {
//     e.preventDefault();
//     this.setState({ modalIsOpen: true });
//   };

//   // deactivates delete modal
//   closeModal = () => {
//     this.setState({ modalIsOpen: false });
//   };

//   // allows us to delete and update state
//   handleDelete = e => {
//     e.preventDefault();
//     axios
//       .delete(`http://localhost:5000/api/reviews/${this.id}`)
//       .then(response => {
//         this.props.fetchReviews();
//         this.setState({
//           review: response.data,
//           textBody: response.data.textBody
//         });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//     this.props.history.push('/myreviews');
//   };

//   // changes textBody on state when an edit happens
//   handleEditInputChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   // allows us to edit and update state
//   handleEditReview = e => {
//     e.preventDefault();

//     const editedReview = {
//       textBody: this.state.textBody
//     };

//     axios
//       .put(`http://localhost:5000/api/reviews/${this.id}`, editedReview)
//       .then(response => {
//         this.props.fetchReviews();
//         this.setState({
//           review: response.data,
//           textBody: response.data.textBody,
//           isEditing: false
//         });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   // allows us to edit the current review
//   toggleEdit = e => {
//     e.preventDefault();
//     this.setState({ isEditing: true });
//   };

//   render() {
//     if (!this.state.note) {
//       return <div>Loading Note...</div>;
//     }

//     // if edit mode is toggled, it returns the edit form
//     const { textBody } = this.state.review;
//     if (this.state.isEditing) {
//       return (
//         <ReviewForm
//           type="edit"
//           textBody={this.state.textBody}
//           handleEditNote={this.handleEditReview}
//           handleInputChange={this.handleEditInputChange}
//         />
//       );
//     }

//     return (
//       <div className="review-container">
//         <Modal
//           isOpen={this.state.modalIsOpen}
//           onAfterOpen={this.afterOpenModal}
//           onRequestClose={this.closeModal}
//           className="modal"
//           overlayClassName="overlay"
//         >
//           <h3>Are you sure you want to delete this?</h3>
//           <div className="modal-buttons">
//             <button className="delete-on-modal" onClick={this.handleDelete}>
//               Delete
//             </button>
//             <button className="no-delete-on-modal" onClick={this.closeModal}>
//               No
//             </button>
//           </div>
//         </Modal>

//         <div className="edit-delete-container">
//           <h5 onClick={this.toggleEdit}>edit</h5>
//           <h5 onClick={this.openModal}>delete</h5>
//         </div>

//         <div className="review-text-body">{textBody}</div>
//       </div>
//     );
//   }
// }

// export default SingleReview;