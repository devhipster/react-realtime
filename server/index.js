import {ApolloServer, gql} from 'apollo-server-express';
import express from 'express'; // eslint-disable-li
import mongoose from 'mongoose'; // eslint-disable-line
const app = express();

const {
  APP_PORT = 5000,
  NODE_ENV = 'devlopment'
} = process.env;

const IN_PROD = NODE_ENV !== 'production';

app.disable('x-powered-by');
const apollo = new ApolloServer({
  typeDef,
  resolvers,
  playground:NODE_ENV !== 'production'
})
apollo.applyMiddleware({app});

const bookSet = [
  {title:'The Aweking',author:'Kate Chopin'},
  {title: ' City of Glass', author:'Paul Auster'}
]
const typeDef = gql`
type book{
  id: ID!
  author:Author!
  title: String!
}

type Author{
  name: String!
}
`;
const resolvers = {
  Query:{
    book: ()=>{
      return bookSet;
    },
    author:()=>{
      return booksSet.map( _=> _.filter(el=>el.author))
    }
  },
  Mutation:{

  }
}



app.listen().then( ({url})=>{ console.log(`Running on  ${url}`)});
