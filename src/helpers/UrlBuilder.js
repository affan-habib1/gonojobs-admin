class UrlBuilderHelper {
  api(path) {
    return path;
  }

  coreServiceApi(path) {
    //return `http://192.168.1.37:8000/api/v1/${path}`;
    return `http://13.212.68.212:5001/api/v1/${path}`;
  }

  jobServiceApi(path) {
    // return `http://103.4.145.250:8028/api/v1/${path}`;
    return `http://192.168.1.211:8028/api/v1/${path}`;
  }

  resumeServiceApi(path) {
    return `http://103.4.145.251:4028/${path}`;
  }
}

export const UrlBuilder = new UrlBuilderHelper();
