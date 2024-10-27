"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Instruccion_1 = require("../abstracto/Instruccion");
const Errores_1 = __importDefault(require("../excepciones/Errores"));
class Metodo extends Instruccion_1.Instruccion {
    constructor(tipo, id, params, ins, linea, col) {
        super(tipo, linea, col);
        this.id = id;
        this.parametros = params;
        this.instrucciones = ins;
    }
    interpretar(arbol, tabla) {
        for (let i of this.instrucciones) {
            let resultado = i.interpretar(arbol, tabla);
            if (resultado instanceof Errores_1.default)
                arbol.addErrores(resultado);
        }
    }
}
exports.default = Metodo;
