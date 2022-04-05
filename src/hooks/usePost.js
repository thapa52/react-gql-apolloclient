import { useQuery, gql } from "@apollo/client";

const GET_POST = gql`
    query GetPost($id: ID!){
        post(id: $id){
            id
            title
            body
            user{
                name
                id
            }
        }
    }
`;

export const usePost = (id) => {
    const { error, data, loading } = useQuery(GET_POST, {
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