/* eslint-disable react/jsx-key */
import React from 'react'

function NameList () {
  const people = [
    {
      id: 1,
      name: 'Coco',
      age: 25,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Erin',
      age: 28,
      skill: 'PHP'
    },
    {
      id: 3,
      name: 'Darren',
      age: 28,
      skill: 'Vue'
    }
  ]
  const personList = people.map(person => (
    <h2>
      I am {person.name}, I am {person.age} years old, I know {person.skill}.
    </h2>
  ))
  return (
    <div>{personList}</div>
  )
}

export default NameList
