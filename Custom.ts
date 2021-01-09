//% color="#FFD700" weight=1000
namespace myExtension {
    /**
    * Adds 2 Numbers
    */
    //% block
    export function Add(value1: number, value2: number): void {
    console.log(value1 + value2);
    }

    /**
     * Subtracts 2 Numbers
     */
    //% block
    export function Subtract(value1: number, value2: number): void {
    console.log(value1 - value2);
    }


    /**
     * Multiplies 2 Numbers
     */
    //% block
    export function Multiply(value1: number, value2: number): void {
    console.log(value1 * value2);
    }


    /**
     * Divides 2 Numbers
     */
    //% block
    export function Divide(value1: number, value2: number): void {
    console.log(value1 / value2);
    }


    /**
     * Gives a random number
     */
    //% block
    export function Generate(max: number): void {
    let variable1 = Math.floor((Math.random() * max) + 1);
    console.log(variable1)
    }

}