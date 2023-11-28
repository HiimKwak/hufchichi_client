import { isAxiosError } from 'axios';

import { adminInstance } from '@/api';
import { TeamErrorType, TeamType } from '@/types/admin/team';

/* 리그 내 팀 관리 API */

export const getTeamListByLeagueIdWithAuth = async (leagueId: string) => {
  try {
    const { data } = await adminInstance.get<TeamType[]>(`/team/${leagueId}/`);

    return data;
  } catch (error) {
    if (isAxiosError<TeamErrorType>(error)) {
      return error.response?.data.detail;
    } else {
      throw new Error('리그 내 팀을 조회하는데 실패했습니다.');
    }
  }
};

export const postTeamByLeagueIdWithAuth = async (payload: {
  leagueId: string;
  body: FormData;
}) => {
  await adminInstance.post(
    `/team/register/${payload.leagueId}/`,
    payload.body,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};

export const putTeamByIdWithAuth = async (payload: {
  teamId: string;
  body: FormData;
}) => {
  await adminInstance.put(`/team/${payload.teamId}/change/`, payload.body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
