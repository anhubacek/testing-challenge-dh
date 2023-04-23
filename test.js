

import { expect } from 'chai';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><html><body><p id="parrafoMensaje"></p></body></html>`);
global.document = dom.window.document;
import realizarPedido from './script.js';



describe('La función realizarPedido() debe encontrar el párrafo según su id y modificar su contenido para mostrar el mensaje "¡Gracias! Tu pedido llegará rápidamente." ', () => {
  const contenidoEsperado = '¡Gracias! Tu pedido llegará rápidamente.';
  const elementoModificado = document.getElementById('parrafoMensaje');
  const prevValue =  elementoModificado.innerHTML || elementoModificado.innerText
  realizarPedido()

// En estos tests lo que busco es descomponer en la mayor cantidad de partes posibles los pasos o resultados esperados
// de la función, otorgando pistas o "checkpoints" que el estudiante debe alcanzar, pero sin decirle concretamente 
// lo que debe hacer para resolver el ejercicio. De esta manera se le permite un poco la exploración para que pueda 
// alcanzar el resultado esperado sin "spoilearle" la respuesta.

  it(`El elemento con el id "parrafoMensaje" debe ser modificado`, () => {
// En este test en particular vamos a evaluar que efectivamente luego de llamar a la función el elemento sea modificado, asi
// evitamos que los alumnos puedan hacer la trampa colocar el mensaje directamente dentro del parrafo sin utilizar la función
    expect(elementoModificado.innerHTML || elementoModificado.innerText).to.not.be.equal(prevValue)
  });
  it(`El elemento modificado debe mostrar un mensaje.`, () => {
    expect(elementoModificado.innerHTML.length > 0 || elementoModificado.innerText.length > 0  ).to.be.true;
  });

  it(`El mensaje debe ser el solicitado en la consigna.`, () => {
    expect(elementoModificado.innerHTML || elementoModificado.innerText ).to.be.equal(contenidoEsperado);
  });


});