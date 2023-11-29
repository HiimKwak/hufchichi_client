import {
  MatchCheerType,
  MatchCommentPayload,
  MatchCommentType,
  MatchLineupType,
  MatchListType,
  MatchStatus,
  MatchTimelineType,
  MatchType,
  MatchVideoType,
} from '@/types/match';
import { convertObjectToQueryString } from '@/utils/queryString';

import instance from '.';

export type MatchListParams = {
  sportsId?: string[];
  status: MatchStatus;
  leagueId?: string;
  cursor?: number;
};

export const getMatchList = async ({ cursor, ...params }: MatchListParams) => {
  const queryString = convertObjectToQueryString(params);

  const { data } = await instance.get<MatchListType[]>(
    `games?${queryString}&cursor=${cursor || ''}`,
  );

  return data;
};

export const getMatchById = async (gameId: string) => {
  const { data } = await instance.get<MatchType>(`/games/${gameId}`);

  return data;
};

export const getMatchCheerById = async (matchId: string) => {
  const { data } = await instance.get<MatchCheerType[]>(
    `/games/${matchId}/cheer`,
  );

  return data;
};

export const getGameComments = async (gameId: string, cursor = 1) => {
  const response = await instance.get<MatchCommentType[]>(
    `/games/${gameId}/comments?cursor=${cursor}`,
  );

  return response.data;
};

export const getMatchTimelineById = async (matchId: string) => {
  const { data } = await instance.get<MatchTimelineType[]>(
    `/games/${matchId}/timeline`,
  );

  return data;
};

export const getMatchLineupById = async (matchId: string) => {
  const { data } = await instance.get<MatchLineupType[]>(
    `/games/${matchId}/lineup`,
  );

  return data;
};

export const getMatchVideoById = async (matchId: string) => {
  const { data } = await instance.get<MatchVideoType>(
    `/games/${matchId}/video`,
  );

  return data;
};

export const getMatchCommentById = async (
  matchId: string,
  cursor: number | string,
  size = 20,
) => {
  const { data } = await instance.get<MatchCommentType[]>(
    `/games/${matchId}/comments?cursor=${cursor}&size=${size}`,
  );

  return data;
};

export const postMatchComment = async (payload: MatchCommentPayload) => {
  await instance.post(`/comments`, payload);
};

export const postReportComment = async (payload: { commentId: number }) => {
  await instance.post(`/reports`, payload);
};
