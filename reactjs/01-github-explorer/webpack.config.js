
//LEGENDA
//__dirname pega sempre o diretorio onde ta o arquivo que colocou a instrucao
//entry é o arquivo inicial da aplicacao
// output  arquivo que vai gerar o webpack
// resolve pega as extencoes que podem ser lidas 
//module configuracoes de como a app vai se comportar de acordo com cada arquivo  
//mode é o modo de desenvolvimento que pode ser development ou production  
//pluguins o html_webpack_plugin serva para exportar um novo html para a pasta dist
// devServer serve para ficar observando cada atualizacao que o desenvolverdor realizar  
// devtool -> serve para  conseguir visualizar o cod da pagina original no source debuggar melhor

const path = require('path') //usa dessa forma com require porque ele usa o nodejs
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

//variaveis de ambientes 
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node.modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node.modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'], 
            }
        ]
    }
}