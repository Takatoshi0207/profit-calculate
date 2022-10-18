import { Helmet } from 'react-helmet'
import React from 'react'


interface props {
  title: string;
}

const Head: React.FC<props> = ({
  title,
}) => {
  const logo = '../assets/logo.png'

  return (
    <Helmet>
      <head prefix='og:http://ogp.me/ns#' />
      <title>{title}</title>
      <meta
        name="description"
        content='エアバリ導入シュミレーションアプリ'
      />
    </Helmet>
  )
}

export default Head 