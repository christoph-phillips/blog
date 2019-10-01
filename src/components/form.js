
import React, { Fragment } from "react"

import styled from 'styled-components'

const FormContainer = styled.div`
  border-top: 0;
  border: 1px solid gray;
  padding: 20px;
  text-align: center;
`
const FormElement = styled.form``
const Input = styled.input``
const Info = styled.p``
const Submit = styled.button`
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
			<FormElement name={name} netlify method="POST" data-netlify="true">
				<input type="hidden" name={name} value="Contact Form" />
				{ fields.map(field => 
					 	(<Fragment>
						<Input type={field.type} name={field.name} placeholder={field.name} />
						</Fragment>)
				)}
			</FormElement>
			<Submit type="submit" />
		</FormContainer>

	)
}

export default Form

export const Newsletter = () => {
	return (
		<Form {...newsletterProps} />
	)
}