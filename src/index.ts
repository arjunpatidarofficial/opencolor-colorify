export class Log {
  static success(msg: string) {
    console.log(`%c ${msg}`, "color: green");
  }

  static danger(msg: string) {
    console.log(`%c ${msg}`, "color: red");
  }

  static info(msg: string) {
    console.log(`%c ${msg}`, "color: blue");
  }

  static custom(msg: string, color: string, bg: string) {
    console.log(`%c ${msg}`, `color:${color}`, `background: ${bg}`);
  }
}
