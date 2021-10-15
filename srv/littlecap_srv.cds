using { Sample2, SAMPLE } from '../db/schema';

service sampleService {
    @readonly entity Sample as projection on SAMPLE;
    @readonly entity SampleLC as projection on Sample2;
    action callStoredProc() returns array of Sample;
}