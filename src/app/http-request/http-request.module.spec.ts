import { HttpRequestModule } from './http-request.module';

describe('HttpRequestModule', () => {
  let httpRequestModule: HttpRequestModule;

  beforeEach(() => {
    httpRequestModule = new HttpRequestModule();
  });

  it('should create an instance', () => {
    expect(httpRequestModule).toBeTruthy();
  });
});
