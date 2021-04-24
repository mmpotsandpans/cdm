import parsedDetainees from '../resources/parsedDetainees.json'
// import parsedOnTheRun from '../resources/parsedOnTheRun.json'
import parsedFallen from '../resources/fallen'
import parsedWounded from '../resources/wounded'
import { t } from 'ttag'
import { states } from './adminBoundaries'

export enum People {
  detained = 'ထိန်းသိမ်း',
  onTheRun = 'ဝရမ်း',
  fallen = 'ကျဆုံး',
  wounded = 'ထိခိုက်'
}

export const peopleTypesStrings = {
  [People.detained]: t`ထိန်းသိမ်း`,
  [People.onTheRun]: t`ဝရမ်း`,
  [People.fallen]: t`ကျဆုံး`,
  [People.wounded]: t`ထိခိုက်`
}

export interface Person {
  name: string;
  status: People;
  date?: string;
  city?: string;
  state?: typeof states[number]
  details?: string;
  age?: number;
  media?: string[];
  folder?: string;
  confirmed?: boolean;
  gender?: 'm' | 'f';
  honorific?: string;
  enName?: string;
  enDetails?: string;
  township?: string;
  source?: string;
}

// on the run list is unreliable, so it's omitted for now
export const peopleTypes = [People.fallen, People.wounded, People.detained]

const fallen = (parsedFallen as any[]).map(p => ({...p, status: People.fallen}))
const detained = (parsedDetainees as any[]).map(p => ({...p, status: People.detained}))
const wounded = (parsedWounded as any[]).map(p => ({...p, status: People.wounded}))
// const onTheRun = (parsedOnTheRun as any[]).map(p => ({...p, status: People.onTheRun}))

export const peopleData: Person[] = [...fallen, ...wounded, ...detained]