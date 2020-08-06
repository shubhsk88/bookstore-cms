import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createBook } from '../../actions';

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
    if (title === '') return;
    e.preventDefault();
    createBook({ title, category, id });
    this.setState({
      title: '',
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form action="post">
        <label htmlFor="title">
          Title
          <input type="text" value={title} onChange={this.handleChange} id="title" required />
        </label>

        <label htmlFor="categories">
          Category
          <select onChange={this.handleChange} name="categories" id="categories">
            {this.categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
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
