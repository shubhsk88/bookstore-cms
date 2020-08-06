import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createBook } from '../../actions';
import './booksForm.css';

class BooksForm extends React.Component {
  constructor() {
    super();
    this.categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const targetId = e.target.id;
    if (targetId === 'title') {
      this.setState({ title: e.target.value });
    } else if (targetId === 'categories') {
      this.setState({ category: e.target.value });
    }
  }

  handleSubmit(e) {
    const { title, category } = this.state;
    const { createBook } = this.props;
    const id = Math.floor(Math.random() * 100);
    if (title === '' || category === '') return;
    e.preventDefault();
    createBook({ id, title, category });
    this.setState({
      title: '',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div>
        <hr />
        <span className="form-title mont">ADD NEW BOOK</span>
        <form action="post" className="form-container">
          <input type="text" value={title} className="form-title-input form-input mont" onChange={this.handleChange} placeholder="Book Title" id="title" required />

          <select onChange={this.handleChange} className="form-category-input form-input mont" value={category} placeholder="Category" name="categories" id="categories" required>
            <option value="" disabled selected>Category</option>
            {this.categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <button type="submit" className="form-submit-btn" onClick={this.handleSubmit}>ADD BOOK</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.title,
  category: state.category,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ createBook }, dispatch)
);

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
