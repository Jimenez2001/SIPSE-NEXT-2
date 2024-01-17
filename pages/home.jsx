import Image from 'next/image'
import Head from 'next/head'
import Layout from "../layout/Layout"
import 'bootstrap/dist/css/bootstrap.css'


export default function Home() {
  return (
    <Layout pagina={"Home"}>
      <>
      <h1>Panel de Home</h1>
      </>
    </Layout>
  )
}
