import React from "react";

import { StyledArticlePaginationNumber } from "./StyledArticlePaginationNumber"

const ArticlePaginationNumber = ({ setPage, number, active = false }) => (
	<StyledArticlePaginationNumber
		onClick={setPage ? () => setPage(number-1) : undefined}
		style={active ? { color: "#23423D", fontSize: "40px" } : undefined}
	>
		<p>{number}</p>
	</StyledArticlePaginationNumber>
);

export default ArticlePaginationNumber;