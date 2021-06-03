import {ApolloServer, gql} from 'apollo-server';
import express from 'express'; // eslint-disable-li
import mongoose from 'mongoose'; // eslint-disable-line
const app = express();

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

const apollo = new ApolloServer({typeDef,resolvers})
apollo.applyMiddleware({app});


app.listen().then( ({url})=>{ console.log(`Running on  ${url}`)});
