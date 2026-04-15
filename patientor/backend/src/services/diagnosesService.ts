import diagnosesData from '../../data/diagnoses.ts';
import { Diagnosis } from '../types.ts';

const getEntries = (): Diagnosis[] => {
    return diagnosesData;
};

const addDiagnoses = () => {
    return null;
};

export default {
    getEntries,
    addDiagnoses
}