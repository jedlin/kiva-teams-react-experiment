import { ApolloClient
  , createNetworkInterface
  , gql
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://api.dev.kivaws.org/graphql'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

const teamsQuery = gql`query {
  teams(
      filters: {isActive: true},
      limit: 10,
      sortBy: overallLoanedAmount
    ) {
      values {
        id
        name
        teamPublicId
        image {
          url
        }
        loanBecause
        lenderCount
        loanCount
        lentAmount
        category
        createdDate,
        whereabouts
      }
    }}`;


export function fetchTeams() {
    return client.query({query: teamsQuery});
}
