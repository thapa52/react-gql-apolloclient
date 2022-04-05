import { useQuery, gql } from '@apollo/client'

const GET_PHOTOS = gql`
query{
  photos{
    data{
      id
      title
      url
      thumbnailUrl
    }
  }
}
`

export const usePhotos = () => {
    const { error, data, loading } = useQuery(GET_PHOTOS);

    return{
        error,
        data,
        loading
    }
}