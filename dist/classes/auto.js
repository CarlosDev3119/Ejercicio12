"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelS = exports.Mustang = void 0;
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
class Mustang {
    accelerate() {
        console.log("Accelerating");
    }
    break() {
        console.log("Breaking");
    }
    startEngine() {
        console.log("Starting engine");
    }
}
exports.Mustang = Mustang;
class ModelS {
    accelerate() {
        console.log("Accelerating");
    }
    break() {
        console.log("Breaking");
    }
    startEngine() {
        console.log("Starting engine");
    }
    autoPilot() {
        console.log("Auto pilot");
    }
    ludicrousSpeed() {
        console.log("Ludicrous speed");
    }
}
exports.ModelS = ModelS;
