import { authorizedHeader, client } from 'common/api/axiosInstance';
import { useQueries } from 'react-query';
import QueryKeys from './query-keys';

const getListByQueryKey = async (queryKey) => {
  const { data = [] } = await client.get(`/${queryKey}`, {
    headers: authorizedHeader(),
  });

  return data;
};

export default function useList() {
  return useQueries([
    {
      queryKey: QueryKeys.newReleases,
      queryFn: () => getListByQueryKey(QueryKeys.newReleases),
    },
    {
      queryKey: QueryKeys.playlists,
      queryFn: () => getListByQueryKey(QueryKeys.playlists),
    },
    {
      queryKey: QueryKeys.categories,
      queryFn: () => getListByQueryKey(QueryKeys.categories),
    },
  ]);
}
