import { debounce } from "./sprint2";
jest.useFakeTimers();


//Las funciones de 'printMessage' y 'printMessageAlternative' son funcionalidades de interaccion con el DOM, y no tienen TDD

describe('function debounce', () => {
    it('Debe ejecutar la funcion de callback', () => {
        const callback = jest.fn(); //mock para mirar los tiempos
        jest.useFakeTimers(); // Habilita los timers falsos

        const debounceCallBack = debounce(callback, 100);
        debounceCallBack();

        jest.advanceTimersByTime(100); // Avanza los timers

        expect(callback).toHaveBeenCalled();
    });
    it('debe cumplir el retraso establecido', () => {
        const callback = jest.fn();
        const debouncedCallback = debounce(callback, 100);
    
        debouncedCallback();
        
        // Avanza el reloj en 100 milisegundos para asegurarnos de que el retraso haya pasado.
        jest.advanceTimersByTime(100);
    
        // La función de callback se llame solo después del retraso.
        expect(callback).toHaveBeenCalled();
      });
});
  
