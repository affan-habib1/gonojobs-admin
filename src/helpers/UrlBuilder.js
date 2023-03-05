class UrlBuilderHelper {
  api(path) {
    return path;
  }

  commonApi(path) {
    //return `http://192.168.1.37:8000/api/v1/${path}`;
    return `http://103.4.145.250:8000/api/v1/${path}`;
  }

  eSurvey(path) {
    // return `http://103.4.145.250:8028/api/v1/${path}`;
    return `http://192.168.1.211:8028/api/v1/${path}`;
  }

  tempUrl(path) {
    return `http://103.4.145.251:4028/${path}`;
  }

  reviewerApi(path) {
    return `http://103.4.145.250:8035/api/v1/${path}`;
    // return `http://192.168.1.37:8035/api/v1/${path}`;
  }

  keyClockApi(path) {
    return `http://103.4.145.250:8005/api/v1/${path}`;
  }

  fileServerApi(path) {
    return `http://103.4.145.245/IEIMS/E-SURVEY/${path}`;
  }
}

export const UrlBuilder = new UrlBuilderHelper();


