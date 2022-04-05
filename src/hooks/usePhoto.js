import { useQuery, gql } from "@apollo/client";

const GET_PHOTO = gql`
    query GetPhoto($id: ID!){
        photo(id: $id){
            id
            title
            url
            thumbnailUrl
            album{
                id
                title
            }
        }
    }
`;

export const usePhoto = (id) => {

    const { error, data, loading } = useQuery(GET_PHOTO, {
        variables: {
            id
        }
    });

    return{
        error,
        data,
        loading
    }
};