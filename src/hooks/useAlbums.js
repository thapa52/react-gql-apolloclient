import { useQuery, gql } from "@apollo/client";

const GET_ALBUMS = gql`
    query{
        albums{
            data{
                id
                title
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
    }
`;

export const useAlbums = () => {
    const { error, data, loading } = useQuery(GET_ALBUMS);

    return{
        error,
        loading,
        data
    }
};