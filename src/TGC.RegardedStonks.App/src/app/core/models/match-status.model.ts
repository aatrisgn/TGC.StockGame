/** Mirrors the ordinal values of the backend TGC.RegardedStonks.Domain.Enums.MatchStatus enum. */
export enum MatchStatus {
  Created = 0,
  Active = 1,
  Completed = 2,
  Cancelled = 3,
  Abandoned = 4,
  Failed = 5,
  Pending = 6
}

export const MATCH_STATUS_LABELS: Record<MatchStatus, string> = {
  [MatchStatus.Created]: 'Created',
  [MatchStatus.Active]: 'Active',
  [MatchStatus.Completed]: 'Completed',
  [MatchStatus.Cancelled]: 'Cancelled',
  [MatchStatus.Abandoned]: 'Abandoned',
  [MatchStatus.Failed]: 'Failed',
  [MatchStatus.Pending]: 'Pending'
};

export const MATCH_STATUS_OPTIONS: { value: MatchStatus; label: string }[] = [
  MatchStatus.Created,
  MatchStatus.Active,
  MatchStatus.Completed,
  MatchStatus.Cancelled,
  MatchStatus.Abandoned,
  MatchStatus.Failed,
  MatchStatus.Pending
].map((value) => ({ value, label: MATCH_STATUS_LABELS[value] }));
