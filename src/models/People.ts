import parsedDetainees from '../resources/parsedDetainees.json'
// import parsedOnTheRun from '../resources/parsedOnTheRun.json'
import parsedFallen from '../resources/fallen.json'

export enum People {
    detained = 'ထိန်းသိမ်း',
    onTheRun = 'ဝရမ်း',
    fallen = 'ကျဆုံး',
    wounded = 'ထိခိုက်'
  }

export interface Person {
  name: string;
  status: People;
  tstamp?: number;
  position?: string;
  details?: string;
  age?: number;
}

// on the run list is unreliable, so it's omitted for now
export const peopleTypes = [People.fallen, People.detained]

const fallen = (parsedFallen as any[]).map(p => ({...p, status: People.fallen}))
const detained = (parsedDetainees as any[]).map(p => ({...p, status: People.detained}))
// const onTheRun = (parsedOnTheRun as any[]).map(p => ({...p, status: People.onTheRun}))

export const peopleData: Person[] = fallen.concat(detained)