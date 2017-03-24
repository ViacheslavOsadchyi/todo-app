import React from 'react'
import FilterLink from "../containers/FilterLink";
import {VISIBILITY_FILTERS} from "../../actions";

function Footer ( props ){
	return (
		<p>
			Show:
			{" "}
			<FilterLink filter={VISIBILITY_FILTERS.SHOW_ALL}>
				ALL
			</FilterLink>
			{", "}
			<FilterLink filter={VISIBILITY_FILTERS.SHOW_ACTIVE}>
				ACTIVE 
			</FilterLink>
			{", "}
			<FilterLink filter={VISIBILITY_FILTERS.SHOW_COMPLETED}>
				COMPLETED
			</FilterLink>
		</p>
	);
}

export default Footer;