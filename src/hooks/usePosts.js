import { useQuery, gql } from "@apollo/client";

const GET_POSTS = gql`
    query{
        posts{
            data{
                title
                id
                body
                user{
                    name
                    id
                }
            }
        }
    }
`;

export const usePosts = () => {
     
    const { error, data, loading } = useQuery(GET_POSTS);

    return{
        error,
        data,
        loading
    }
};