AppSettings = {
  // @if NODE_ENV='development'
  baseApiUrl: 'http://localhost:4000/api/v1',
  debug: true
  // @endif
  // @if NODE_ENV='production'
  baseApiUrl: 'http://inspec.chocoelho.org/api/v1'
  // @endif
}
