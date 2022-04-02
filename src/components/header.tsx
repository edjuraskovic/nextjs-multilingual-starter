import React from 'react'
import { AppConfig } from '../lib/AppConfig';

export default function Header() {
  return (
    <header className="p-8">
      <h1 className="font-Outfit text-3xl font-bold text-purple">{AppConfig.title}</h1>
    </header>
  )
}
