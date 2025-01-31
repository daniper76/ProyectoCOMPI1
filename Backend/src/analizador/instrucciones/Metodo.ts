import { Instruccion } from '../abstracto/Instruccion'
import Errores from '../excepciones/Errores'
import Arbol from '../simbolo/Arbol'
import tablaSimbolo from '../simbolo/tablaSimbolo'
import Tipo, { tipoDato } from '../simbolo/Tipo'
import ReturnDefault from './ReturnDefault'



export default class Metodo extends Instruccion {
    public id: string
    public parametros: any[]
    public instrucciones: Instruccion[]

    constructor(tipo: Tipo, id: string, params: any[], ins: Instruccion[], linea: number, col: number) {
        super(tipo, linea, col)
        this.id = id
        this.parametros = params
        this.instrucciones = ins
    }

    interpretar(arbol: Arbol, tabla: tablaSimbolo) {
        for (let i of this.instrucciones) {
            if(i instanceof ReturnDefault){
                return
            }
            let resultado = i.interpretar(arbol, tabla)
            if(resultado instanceof ReturnDefault){
                return
            }
            if (resultado instanceof Errores) arbol.addErrores(resultado)
        }
    }
}