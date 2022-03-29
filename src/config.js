const local = {
    apiBaseUrl: 'http://localhost:8081'
}

const prod = {
    apiBaseUrl: 'https://poker-webui-api-dot-getmega-app.uc.r.appspot.com/'
}

const config = process.env.NODE_ENV === 'production' ? prod : local

export default config
