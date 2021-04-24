import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/Header';
import Reel  from './components/Reel';

export default function Home() {
  return (
    <>
    <Header/>
    <Reel/>
    </>
  )
}
