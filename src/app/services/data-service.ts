let getData = () => {
  return window['winnipeg'];
};

export class DataService {
  public getData(): any {
    return getData();
  }
}
