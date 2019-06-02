class SessionIdHandler {
  constructor() {
    this.sessionId = ''
  }

  setSessionIdFromResponse(responseObject) {
    this.sessionId = this.parseSetCookie(responseObject.headers.map['set-cookie']);
  }

  parseSetCookie(cookie) {
    if(cookie == undefined) {
      console.log('Cookie is undefined');
      return '';
    }
    const sessionIdIndex = cookie.indexOf('sessionid=')+('sessionid='.length);
    var endIndex = 0;
    for (var i = sessionIdIndex; i < cookie.length; i++) {
      if (cookie[i] == ';') {
        endIndex = i;
        break;
      }
    }
    return cookie.substring(sessionIdIndex, endIndex);
  }
}

var sessionIdHandler = new SessionIdHandler();

export default sessionIdHandler;