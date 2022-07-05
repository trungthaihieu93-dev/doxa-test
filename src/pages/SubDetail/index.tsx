import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Thread } from '../../core/types/thread';
import { Sub } from '../../core/types/sub';
import { getSubById } from '../../services/sub';
import { getThreadsBySub } from '../../services/thread';

import { StyledContainer } from './styled';
import Cover from './components/Cover';
import Tabs from './components/Tabs';
import Filter from './components/Filter';
import Threads from './components/Threads';

export default function SubDetail() {
  const { id: subId = '' } = useParams();

  // Query sub detail
  const { data: sub, error: subError } = useQuery<Sub>(
    `sub_${subId}`,
    () => getSubById(subId),
    { initialData: { id: '', subAvatar: '', subName: '' } }
  );

  const { data: threads, error: threadsError } = useQuery<Thread[]>(
    `threads_of_sub_${subId}`,
    () => getThreadsBySub(subId),
    { initialData: [] }
  );

  return (
    <StyledContainer>
      <Helmet>
        <title>Sub {subId}</title>
      </Helmet>
      <Cover
        cover="/assets/default_cover.jpg"
        subAvatar={sub?.subAvatar || ''}
        subName={sub?.subName || ''}
      />
      <Tabs />
      <Filter />
      <Threads threads={threads || []} />
    </StyledContainer>
  );
}
