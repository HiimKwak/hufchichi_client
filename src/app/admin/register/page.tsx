'use client';

import { Suspense } from 'react';

import RegisterWrapper from '@/components/admin/register/context/RegisterWrapper';
import RegisterLeague from '@/components/admin/register/League/';
import RegisterTeam from '@/components/admin/register/Team';
import { useFunnel } from '@/hooks/useFunnel';
import LeagueRegisterFetcher from '@/queries/admin/useLeagueRegister/Fetcher';
import TeamRegisterFetcher from '@/queries/admin/useTeamRegister/Fetcher';

export default function Register() {
  const [Funnel, setStep] = useFunnel(['league', 'team', 'player'], 'league');

  return (
    <RegisterWrapper className="space-y-8 py-8">
      <Funnel>
        <Funnel.Step name="league">
          <Suspense fallback={<div>리그 정보 로딩중...</div>}>
            <LeagueRegisterFetcher>
              {data => (
                <RegisterLeague data={data} onNext={() => setStep('team')} />
              )}
            </LeagueRegisterFetcher>
          </Suspense>
        </Funnel.Step>
        <Funnel.Step name="team">
          <Suspense fallback={<div>팀 정보 로딩중...</div>}>
            <TeamRegisterFetcher>
              {data => <RegisterTeam data={data} />}
            </TeamRegisterFetcher>
          </Suspense>
        </Funnel.Step>
        <Funnel.Step name="player">
          <Suspense fallback={<div>선수 정보 로딩중...</div>}>
            {/* <LeagueRegisterFetcher leagueId={leagueId}>
              {data => <RegisterLeague data={data} leagueId={leagueId} />}
            </LeagueRegisterFetcher> */}
          </Suspense>
        </Funnel.Step>
      </Funnel>
    </RegisterWrapper>
  );
}
