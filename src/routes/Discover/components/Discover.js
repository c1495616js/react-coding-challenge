import React from 'react';
import { Redirect } from 'react-router-dom';

import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import useList from 'common/hook/useList';
import '../styles/_discover.scss';

export default function Discover() {
  const [newReleases, playlists, categories] = useList();

  // if token expired, back to index page to retrieve the new token
  if (newReleases.error || playlists.error || categories.error) {
    return <Redirect to="/" />;
  }

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases.isLoading ? [] : newReleases.data.albums.items}
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        data={playlists.isLoading ? [] : playlists.data.playlists.items}
      />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories.isLoading ? [] : categories.data.categories.items}
        imagesKey="icons"
      />
    </div>
  );
}
