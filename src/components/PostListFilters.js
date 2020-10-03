import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterByText, sortByDate, sortByTitle } from '../actions/filters';


export class PostListFilters extends React.Component {
    onTextChange = (e) => {
        this.props.filterByText(e.target.value);
    }

    onSortByChange = (e) => {
        if (e.target.value === 'date'){
            return this.props.sortByDate()
        }
        return this.props.sortByTitle()
    }
    render() {
        return (
            <div>
                <input 
                    className='text-input'
                    placeholder='Search posts'
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange} 
                />
                <select 
                    className='select'
                    value={this.props.filters.sortBy}
                    onChange={this.onSortByChange}
                >
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                </select>
                <Link to='/create'>
                    <button>Add Post</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    filterByText: (text) => dispatch(filterByText(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByTitle: () => dispatch(sortByTitle())
});



export default connect(mapStateToProps, mapDispatchToProps)(PostListFilters);