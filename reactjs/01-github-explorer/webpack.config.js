
//LEGENDA
//__dirname pega sempre o diretorio onde ta o arquivo que colocou a instrucao
//entry é o arquivo inicial da aplicacao
// output  arquivo que vai gerar o webpack
// resolve pega as extencoes que podem ser lidas 
//module configuracoes de como a app vai se comportar de acordo com cada arquivo  
//mode é o modo de desenvolvimento que pode ser development ou production   

const path = require('path') //usa dessa forma com require porque ele usa o nodejs

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node.modules/,
                use: 'babel-loader',
            }
        ]
    }
}