module.exports = {
    mount: {
        public: '/',
        src: '/pure-table',
    },
    plugins: [
        '@snowpack/plugin-typescript',
        '@prefresh/snowpack',
        'snowpack-plugin-less',
    ],

    alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
    },
    buildOptions: {
        out: 'dist',
    },
};
