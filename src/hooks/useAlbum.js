import { useQuery, gql } from "@apollo/client";

const GET_ALBUM = gql`
    query GetAlbum($id: ID!){
        album(id: $id){
            title
            id
            user{
                id
                name
                username
                email
                phone
                website
            }
        }
    }
`;

export const useAlbum = (id) => {
    const { error, data, loading } = useQuery(GET_ALBUM, {
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