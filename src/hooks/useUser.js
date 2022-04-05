import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
    query GetUser($id: ID!){
        user(id: $id){
            name
            id
            username
            email
            phone
            website
            address{
                street
                suite
                city
                zipcode
            }
            company{
                name
            }
            posts{
                 data{
                    id
                    title
                    body
                }
            }
            # albums{
            #     data
            # }
        }
    }
`

export const useUser = (id) => {
    const { error, loading, data } = useQuery(GET_USER, {
        variables: {
            id
        }
    });

    return{
        error,
        loading,
        data
    }
};