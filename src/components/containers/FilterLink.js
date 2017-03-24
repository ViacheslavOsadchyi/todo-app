import React from 'react'
import {connect} from 'react-redux';
import Link from '../presentationals/Link';
import {setVisibilityFilter} from '../../actions';

function mapStateToProps ( state, ownProps ){
	return {
		active: state.visibilityFilter === ownProps.filter
	};
}

function mapDispatchToProps ( dispatch, ownProps ){
	return {
		onClick: ()=>{
			dispatch( setVisibilityFilter(ownProps.filter) )
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link);

export default FilterLink;