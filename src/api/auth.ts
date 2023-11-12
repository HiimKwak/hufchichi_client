import * as Sentry from '@sentry/nextjs';
import { AxiosError } from 'axios';

import { AuthPayload, AuthType } from '@/types/auth';
import { GameStatusType } from '@/types/game';

import { adminInstance } from './instance';

export const postLogin = async (body: AuthPayload) => {
  try {
    const response = await adminInstance.post<AuthType>(
      '/accounts/login/',
      body,
    );

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    Sentry.captureException(axiosError);

    if (axiosError.response) {
      throw new Error(axiosError.response.statusText);
    } else {
      throw new Error('팀 목록을 불러오는 데에 실패했습니다!');
    }
  }
};

export const postGameStatus = async (
  id: number,
  gameStatus: GameStatusType,
) => {
  adminInstance.post(`/manage/game/statustype/${id}/`, { gameStatus });
};
