import { Grid } from "@mui/material";
import styled from 'styled-components';

export const Page404Wrapper = styled(Grid)`
	min-height: 80vh;
	padding: 40px;
	.page-content {
		text-align: center;
		p {
			font-size: 32px;
			font-weight: bold;
			color: #132f60;
		}
		.home-btn {
			background-color: #132f60;
			padding: 20px 40px;
			font-size: 22px;	
			margin-top: 20px;
			
		}
	}
`;
