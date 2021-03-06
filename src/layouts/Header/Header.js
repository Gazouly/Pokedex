import React from 'react'
import styled from 'styled-components'
import Container from '@components/UI/Container'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
	background: #e5cedc;
	padding: 20px 0;
	margin-bottom: 20px;
`
export const Image = styled.img`
	width: 40px;
	height: auto;
`
const Logo = styled.div`
	display: flex;
	align-items: center;
`
const LogoHeading = styled.h1`
	margin: 0;
	font-weight: bold;
	text-transform: uppercase;
`
const Anchor = styled(Link)`
	text-decoration: none;
	color: black;
	transition: color 0.2s ease-in-out;
	&:hover {
		color: #ef5350;
	}
`
const Header = () => (
	<HeaderContainer className='header'>
		<Container>
			<Anchor to='/'>
				<Logo>
					<Image
						src={`${process.env.PUBLIC_URL}/pokemon_logo.svg`}
						alt='app logo'
					/>
					<LogoHeading>Pokédex</LogoHeading>
				</Logo>
			</Anchor>
		</Container>
	</HeaderContainer>
)
export default Header
