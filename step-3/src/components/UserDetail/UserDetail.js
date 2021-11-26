import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetail() {
  const linkParams = useParams();

  return (
    <h1>Details for George</h1>
  )
}
