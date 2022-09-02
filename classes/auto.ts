import { Car } from "../interfaces/car";
import { Tesla } from "../interfaces/tesla";

// export interface Car{
//     accelerate: () => void;
//     break: () => void;
//     startEngine: () => void;
//     autoPilot: () => void;
//     ludicrousSpeed: () => void;
// }

// export class Mustang implements Car{
//     accelerate(): void {
//         console.log("Accelerating");
//     }
//     break(): void {
//         console.log("Breaking");
//     }
//     startEngine(): void {
//         console.log("Starting engine");
//     }
//     autoPilot(): void {
//         throw new Error('Unsupported operation');
//     }
//     ludicrousSpeed(): void {
//         throw new Error('Unsupported operation');
//     }
// }

export class Mustang implements Car{
    accelerate(): void {
        console.log("Accelerating");
    }
    break(): void {
        console.log("Breaking");
    }
    startEngine(): void {
        console.log("Starting engine");
    }

}

export class ModelS implements Car, Tesla {
    accelerate(): void {
        console.log("Accelerating");
    }
    break(): void {
        console.log("Breaking");
    }
    startEngine(): void {
        console.log("Starting engine");
    }
    autoPilot(): void {
        console.log("Auto pilot");
    }
    ludicrousSpeed(): void {
        console.log("Ludicrous speed");
    }
}

