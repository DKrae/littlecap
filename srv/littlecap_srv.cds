using Sample2 from '../db/schema';

service sampleService {

    @readonly entity Sample as projection on Sample2;

}