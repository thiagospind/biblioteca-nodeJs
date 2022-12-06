import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';

const caminho = process.argv;

function imprimeLista(resultado, identificador = '') {
    console.log(
        chalk.yellow('Lista de links'), 
        chalk.black.bgGreen(identificador),
        resultado
    );
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3];

    try{
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === 'ENOENT') {            
            console.log('Arquivo ou diretorio não existe');
            return;
        }
    }

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(argumentos[2]);
        imprimeLista(resultado, argumentos[2]);
    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)            
            imprimeLista(lista, nomeDeArquivo);

        })
    }
}

processaTexto(caminho);