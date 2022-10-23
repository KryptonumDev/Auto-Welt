import React from "react";

const ArticlePaginationNumber = ({ setPage, number, active = false }) => (
	<div
		onClick={setPage ? () => setPage(number-1) : undefined}
		style={active ? { backgroundColor: "red" } : undefined}
	>
		{number}
	</div>
);

export default ArticlePaginationNumber;