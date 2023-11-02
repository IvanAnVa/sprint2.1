Funcion debounce
=>La funcion debounce es una funcion que no se ejecuta al momento de su invocacion. En lugar de eso, su ejecucion es retrasada por un periodo predeterminado de tiempo. Si la misma funcion es invocada de nuevo, la ejecucion previa es cancelada y el tiempo de espera se reincia.
En el siguiente ejempo, la funcion debounce es utilizada para mostrar dos mensajes con un tiempo de delay. El primero tiene un tiempo de delay de 1000ms, y el segundo se mostrara con un tiempo de delay de 2000ms.


Commands:
    ->Compilacion: tsc
    ->TDD: npm run test
    ->CLI: node sprint2.cli.mjs

Test:
Para esta funcion, se defiden 2 test:
    ->Se debe ejecutar la funcion callback.
    ->Se debe cumplir el retraso (delay) establecido.


CLI:
En el CLI se establecen dos mensajes con diferentes tiempos
de delay para comprobar la funcionalidad de debounce.


Front-end:
Se establece una pequeña explicacion de la funcion con dos
mensajes que puede visualizar el usuario con diferentes tiempos
de delay para observar la funcionalidad de debounce.

