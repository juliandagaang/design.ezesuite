import { Directive, HostBinding, Input } from "@angular/core";
//Button major
@Directive({
  selector: "[btnmajor]"
})
export class ButtonMajor {
  protected _elementClass: string[] = [];

  @Input("class")
  @HostBinding("class")
  get elementClass(): string {
    return this._elementClass.join(" ");
  }
  set(val: string) {
    this._elementClass = val.split(" ");
  }

  constructor() {
    this._elementClass.push("ez-btn");
    this._elementClass.push("btn-primary");
  }
}

//Button minor
@Directive({
  selector: "[btnminor]"
})
export class ButtonMinor {
  protected _elementClass: string[] = [];

  @Input("class")
  @HostBinding("class")
  get elementClass(): string {
    return this._elementClass.join(" ");
  }
  set(val: string) {
    this._elementClass = val.split(" ");
  }

  constructor() {
    this._elementClass.push("ez-btn");
    this._elementClass.push("btn-secondary");
  }
}

//Button basic
@Directive({
  selector: "[btnbasic]"
})
export class ButtonBasic {
  protected _elementClass: string[] = [];

  @Input("class")
  @HostBinding("class")
  get elementClass(): string {
    return this._elementClass.join(" ");
  }
  set(val: string) {
    this._elementClass = val.split(" ");
  }

  constructor() {
    this._elementClass.push("ez-btn");
  }
}
//Button basic large
@Directive({
  selector: "[btnbasiclarge]"
})
export class ButtonBasicLarge {
  protected _elementClass: string[] = [];

  @Input("class")
  @HostBinding("class")
  get elementClass(): string {
    return this._elementClass.join(" ");
  }
  set(val: string) {
    this._elementClass = val.split(" ");
  }

  constructor() {
    this._elementClass.push("ez-btn");
    this._elementClass.push("ez-btn-lg");
  }
}

//Button basic small
@Directive({
  selector: "[btnbasicsmall]"
})
export class ButtonBasicSmall {
  protected _elementClass: string[] = [];

  @Input("class")
  @HostBinding("class")
  get elementClass(): string {
    return this._elementClass.join(" ");
  }
  set(val: string) {
    this._elementClass = val.split(" ");
  }

  constructor() {
    this._elementClass.push("ez-btn");
    this._elementClass.push("ez-btn-sm");
  }
}

//Button major large
@Directive({
  selector: "[btnmajorlarge]"
})
export class ButtonMajorLarge {
  protected _elementClass: string[] = [];

  @Input("class")
  @HostBinding("class")
  get elementClass(): string {
    return this._elementClass.join(" ");
  }
  set(val: string) {
    this._elementClass = val.split(" ");
  }

  constructor() {
    this._elementClass.push("ez-btn");
    this._elementClass.push("ez-btn-lg");
    this._elementClass.push("btn-primary");
  }
}

//Button major small
@Directive({
  selector: "[btnmajorsmall]"
})
export class ButtonMajorSmall {
  protected _elementClass: string[] = [];

  @Input("class")
  @HostBinding("class")
  get elementClass(): string {
    return this._elementClass.join(" ");
  }
  set(val: string) {
    this._elementClass = val.split(" ");
  }

  constructor() {
    this._elementClass.push("ez-btn");
    this._elementClass.push("ez-btn-sm");
    this._elementClass.push("btn-primary");
  }
}

//Button minor large
@Directive({
  selector: "[btnminorlarge]"
})
export class ButtonMinorLarge {
  protected _elementClass: string[] = [];

  @Input("class")
  @HostBinding("class")
  get elementClass(): string {
    return this._elementClass.join(" ");
  }
  set(val: string) {
    this._elementClass = val.split(" ");
  }

  constructor() {
    this._elementClass.push("ez-btn");
    this._elementClass.push("ez-btn-lg");
    this._elementClass.push("btn-secondary");
  }
}

//Button major small
@Directive({
  selector: "[btnminorsmall]"
})
export class ButtonMinorSmall {
  protected _elementClass: string[] = [];

  @Input("class")
  @HostBinding("class")
  get elementClass(): string {
    return this._elementClass.join(" ");
  }
  set(val: string) {
    this._elementClass = val.split(" ");
  }

  constructor() {
    this._elementClass.push("ez-btn");
    this._elementClass.push("ez-btn-sm");
    this._elementClass.push("btn-secondary");
  }
}
