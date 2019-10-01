import React, { useState, useEffect } from "react"

import styled, { css } from 'styled-components'
import queryString from 'query-string'
import { navigate } from "gatsby"

const Container = styled.div`
  height: 0px;
  border-top: 0;
`
const Title = styled.h1``
const Description = styled.p``
const Input = styled.input`
	width: 50px;
`
const Table = styled.div`
	width: 100%;
	max-width: 800px;
	margin: 30px auto;
	opacity: 0;
	transition: all 1s ease;
	${props => props.show && css`
		opacity: 1;
	`}
`
const Row = styled.div`
	height: 50px;
	display: flex;
	width: 100%;
	justify-content: center;
`
const Cell = styled.div`
	border: 1px solid black;
	width: 20%;
	display: flex;
	vertical-align: center;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`

const Zone = (name, description, duration, min, max) =>  {
	return {
		name, description, duration, min, max
	}
}
const isValidHr = hr => hr > 100

const headings = [ 'Zone', 'Description', '%HrMax', 'Duration', 'Heart Rate (bpm)' ]
const zones = [
	Zone('1', 'Active Recovery', 'All Day', 0, 0.7),
	Zone('2', 'Endurance', '12 Hours', 0.7, 0.8),
	Zone('3', 'Tempo', '2 - 3 Hours', 0.8, 0.88),
	Zone('4', 'Lactate Threshold', '1 Hour', 0.88, 0.95),
	Zone('5', 'VO2 Max', '3 - 5 Minutes', 0.95, 0.98),
]

const createZoneRow = (zone, maxHr) => (
	<Row>
		<Cell>{zone.name}</Cell>
		<Cell>{zone.description}</Cell>
		<Cell>{zone.duration}</Cell>
		<Cell>{zone.min * 100}% - {zone.max*100}%</Cell>
		<Cell>{Math.floor(zone.min * maxHr)} - {Math.ceil(zone.max * maxHr)}</Cell>
	</Row>
)

const ZoneCalculator = (search) => {
	const { hr, onChange, query } = useHeartRate()
  return (<Container>
  	<Title>Heart Rate Zone Calculator</Title>
  	<Description>Enter max heart rate</Description>
    <Input maxLength="3" onChange={onChange} value={hr}/> bpm
    <Table show={isValidHr(hr)}>
    	<Row>{headings.map(heading => <Cell>{heading}</Cell>)}</Row>
    	{zones.map(zone => createZoneRow(zone, hr))}
    </Table>
    { isValidHr(hr) && <Description>Copy the url above and visit when you need a reference</Description> }
  </Container>)
}

export default ZoneCalculator

function useHeartRate() {
	const params = queryString.parse(window.location.search);
	const [ hr, setHr ] = useState(params.bpm || 0)
	const onChange = e => {
		if (isValidHr) {
			navigate('/calculator?bpm=' + e.target.value)
		}
		setHr(e.target.value)
	}
	return {
		hr,
		onChange
	}
}
