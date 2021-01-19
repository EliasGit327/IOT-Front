import { isDevMode } from '@angular/core';

interface ILocalStorageValueParams {
  key: string;
  rule?: (value: any) => boolean;
  stringify?: boolean;
}

export class LocalStorageValue {
  private readonly key: string;
  private readonly rule?: (value: any) => boolean;
  private readonly stringify?: boolean;

  constructor(parameters: ILocalStorageValueParams) {
    this.key = parameters.key;
    this.rule = parameters.rule;
    this.stringify = parameters.stringify;
  }

  public removeValue: () => void = () => window.localStorage.removeItem(this.key);

  set value(value: any) {
    let valueInput = value;
    if (this.rule) {
      if (this.rule(valueInput)) {
        if (this.stringify) {
          try {
            valueInput = JSON.stringify(value);
          }
          catch (e) {
            this.messageOnlyForDevs(`LOCAL STORAGE PARSE ERROR - '${valueInput}' couldn't be parsed to string!`);
          }
        }
        window.localStorage.setItem(this.key, valueInput);
      } else {
        this.messageOnlyForDevs(
          `LOCAL STORAGE SET OPERATION - Rule for value: '${valueInput}' with key: ${this.key} has been violated!`
        );
      }
    } else {
      if (this.stringify) {
        valueInput = JSON.stringify(value);
      }
      window.localStorage.setItem(this.key, valueInput);
    }
  }

  get value(): any {
    let locValue = window.localStorage.getItem(this.key);
    if (locValue === undefined || locValue === null) {
      return;
    }
    if (this.stringify) {
      try {
        locValue = JSON.parse(locValue);
      }
      catch (e) {
        this.messageOnlyForDevs(`LOCAL STORAGE PARSE ERROR - '${locValue}' couldn't be parsed!`);
        window.localStorage.removeItem(this.key);
      }
    }
    if (this.rule) {
      if (this.rule(locValue)) {
        return locValue;
      } else {
        window.localStorage.removeItem(this.key);
        this.messageOnlyForDevs(
          `LOCAL STORAGE GET OPERATION - Rule for value: '${locValue}' with key: ${this.key} has been violated!`
        );
        return;
      }
    }
    return locValue;
  }

  messageOnlyForDevs(message: string): void {
    if (isDevMode()) {
      console.warn(message);
    }
  }
}
