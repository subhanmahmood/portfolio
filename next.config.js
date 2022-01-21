module.exports = {
    async rewrites() {
        const isDevelopment = process.env.NODE_ENV === 'development'
        const apiUrl = isDevelopment ? 'http://localhost:3001/api/:path*'
            : 'https://quiet-dawn-19052.herokuapp.com/api/:path*'
        return [
            {
                source: '/api/:path*',
                destination: apiUrl // Proxy to Backend
            }
        ]
    }
}
