import React from 'react';
import { oneOf, oneOfType, number, string } from 'prop-types';

// svg icons
import JavaScript from '../../assets/icons/javascript.svg';
import ReactIcon from '../../assets/icons/react.svg';
import Mobx from '../../assets/icons/mobx.svg';
import Redux from '../../assets/icons/redux.svg';
import Vue from '../../assets/icons/vue.svg';
import HTML from '../../assets/icons/html.svg';
import CSS from '../../assets/icons/css.svg';
import Sass from '../../assets/icons/sass.svg';
import Stylus from '../../assets/icons/stylus.svg';
import Styled from '../../assets/icons/styled-components.svg';
import Webpack from '../../assets/icons/webpack.svg';
import GraphQL from '../../assets/icons/graphql.svg';
import Node from '../../assets/icons/node.svg';
import Express from '../../assets/icons/express.svg';
import Sequelize from '../../assets/icons/sequelize.svg';
import Python from '../../assets/icons/python.svg';
import Flask from '../../assets/icons/flask.svg';
import Golang from '../../assets/icons/golang.svg';
import Git from '../../assets/icons/git.svg';
import Travis from '../../assets/icons/travis.svg';
import Codeship from '../../assets/icons/codeship.svg';
import Airflow from '../../assets/icons/airflow.svg';
import AWS from '../../assets/icons/aws.svg';
import GoogleCloud from '../../assets/icons/gcp.svg';
import Kubernetes from '../../assets/icons/kubernetes.svg';
import Heroku from '../../assets/icons/heroku.svg';
import Bluemix from '../../assets/icons/bluemix.svg';
import PostgreSQL from '../../assets/icons/postgres.svg';
import Elasticsearch from '../../assets/icons/elasticsearch.svg';
import Sketch from '../../assets/icons/sketch.svg';
import Apple from '../../assets/icons/apple.svg';

// icon lookup map
const icons = {
  javascript: JavaScript,
  react: ReactIcon,
  mobx: Mobx,
  redux: Redux,
  vue: Vue,
  html: HTML,
  css: CSS,
  sass: Sass,
  stylus: Stylus,
  styled: Styled,
  webpack: Webpack,
  graphql: GraphQL,
  node: Node,
  express: Express,
  sequelize: Sequelize,
  python: Python,
  flask: Flask,
  golang: Golang,
  git: Git,
  travis: Travis,
  codeship: Codeship,
  airflow: Airflow,
  aws: AWS,
  heroku: Heroku,
  bluemix: Bluemix,
  gcp: GoogleCloud,
  k8s: Kubernetes,
  postgres: PostgreSQL,
  elasticsearch: Elasticsearch,
  apple: Apple,
  sketch: Sketch
};

// skinny icons that rely on borders
const skinny = [ 'vue' ]

const Icon = ({ icon, fill, ...rest }) => {
  const SVG = icons[icon];
  return (
    <div className={`icon ${skinny.includes(icon) ? ' icon--skinny' : ''}`} color={fill}>
      <SVG {...rest} />
    </div>
  );
};

Icon.propTypes = {
  icon: oneOf(Object.keys(icons)).isRequired,
  width: oneOfType([number, string]),
  height: oneOfType([number, string]),
  fill: string
};

Icon.defaultProps = {
  width: '100%',
  height: '100%'
}

export default Icon
