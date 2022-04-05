import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
    query{
        users{
            data{
                name
                id
                username
                phone
            }
        }
    }
`

export const useUsers = () => {
    const { error, loading, data } = useQuery(GET_USERS);

    return{
        error,
        loading,
        data
    }
}