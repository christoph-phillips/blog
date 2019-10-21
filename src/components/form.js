
import React, { Fragment } from "react"

import styled from 'styled-components'
import { theme } from './theme'

const FormContainer = styled.div`
  border-top: 0;
  padding: 50px;
  text-align: center;
  width: 100%;

  background: ${theme.background};
`
const FormElement = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 300px;
	margin: 0px auto;
`
const Input = styled.input`
	margin-top: 10px;
	color: ${theme.primaryColor};
	text-align: center;
	border: 2px solid ${theme.secondaryColor};
	::placeholder {
		color: ${theme.primaryColor};
	}
`
const Info = styled.h4``
const Submit = styled.button`
	color: ${theme.primaryColor};
	margin-top: 10px;
	background: 0;
	border: 2px solid ${theme.secondaryColor};
    background: 0;
`

const newsletterProps = {
	fields: [
		{
			type: 'email',
			name: 'email'
		}
	],
	info: 'Want to know more? Sign up to receive notice of new articles',
	name: 'newsletter'
}


const Form = ({fields, info, name}) => {
	return (
		<FormContainer>
			<Info>{info}</Info>
			<FormElement name={name} method="POST" action="/success" data-netlify="true">
				<input type="hidden" name={'form-name'} value={name} />
				{ fields.map(field => 
					 	(<Fragment>
						<Input type={field.type} name={field.name} placeholder={field.name} />
						</Fragment>)
				)}
				<Submit type="submit">Submit</Submit>
			</FormElement>
		</FormContainer>
	)
}

export default Form

export const Newsletter = () => {
	return (
		<Form {...newsletterProps} />
	)
}