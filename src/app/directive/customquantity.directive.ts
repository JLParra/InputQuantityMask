import { Directive , ElementRef, HostListener} from '@angular/core';

let SEPARADOR_MILES = ",";
let SEPARADOR_DECIMALES = ".";
let SEPARADOR_MILLONES = "'";
var entero: any;
var decimales: any

@Directive({
  selector: '[Customquantity]'
})
export class CustomquantityDirective {

  
  constructor(private elRef: ElementRef) { }

  @HostListener('input', ['$event'])
  onchangeInput(e: KeyboardEvent): void {
    console.log(e);

    // const format = /([^0-9].[^0-9])*/g
    // const initValue = this.elRef.nativeElement.value;
    // this.elRef.nativeElement.value = initValue.replace(format, '');
    // if (initValue != this.elRef.nativeElement.value) {
    //   e.stopPropagation();

    // }



    // if (e.code === "Backspace" || e.key === 'Backspace') {

    //   // console.log(e, e.key);
    // } else {
    //   entero = this.elRef.nativeElement.value
    // }


    entero = this.elRef.nativeElement.value.replace(/'|,|/g, "");
    console.log("Cantidad del arreglo", entero.toString().length);
    var position = entero.toString().indexOf('.');
    console.log("Posiciòn:", position);

    if (position >= 0) {
      decimales = entero.toString().slice(position, entero.toString().length);
      entero = entero.toString().slice(0, position);
      console.log("Decimales:", decimales);
      console.log("Entero", entero.toString().slice(0, position));

    } else {
      decimales = undefined;
      console.log("Entero", entero.toString().slice(0, entero.toString().length));
      entero = entero.toString().slice(0, entero.toString().length);
    }


    switch (entero.toString().length) {

      case 1:
        entero = entero.replace(/'|,|/g, "");
        this.elRef.nativeElement.value = entero
        break
      case 2:
        entero = entero.replace(/'|,|/g, "");
        this.elRef.nativeElement.value = entero
        break
      case 3:
        entero = entero.replace(/'|,|/g, "");
        this.elRef.nativeElement.value = entero
        break
      case 4:
        entero = entero.replace(/'|,|/g, "");
        console.log("ENTERO:", entero.toString());
        this.elRef.nativeElement.value = entero.toString().slice(0, 1) + SEPARADOR_MILES + entero.toString().slice(1, entero.toString().length);;

        break
      case 5:

        console.log("ENTERO:", entero.toString());
        this.elRef.nativeElement.value = entero.toString().slice(0, 2) + SEPARADOR_MILES + entero.toString().slice(2, entero.toString().length);
        break
      case 6:
        console.log("ENTERO:", entero.toString());
        this.elRef.nativeElement.value = entero.toString().slice(0, 3) + SEPARADOR_MILES + entero.toString().slice(3, entero.toString().length);
        break

      case 7:
        console.log("ENTERO:", entero.toString());
        this.elRef.nativeElement.value = entero.toString().slice(0, 1) + SEPARADOR_MILLONES + entero.toString().slice(1, 4) + SEPARADOR_MILES + entero.toString().slice(4, entero.toString().length);
        break

      case 8:
        console.log("ENTERO:", entero.toString());
        this.elRef.nativeElement.value = entero.toString().slice(0, 2) + SEPARADOR_MILLONES + entero.toString().slice(2, 5) + SEPARADOR_MILES + entero.toString().slice(5, entero.toString().length);
        break
      case 9:
        console.log("ENTERO:", entero.toString());
        this.elRef.nativeElement.value = entero.toString().slice(0, 3) + SEPARADOR_MILLONES + entero.toString().slice(3, 6) + SEPARADOR_MILES + entero.toString().slice(6, entero.toString().length);
        break

    }
    if (decimales != undefined) {
      this.elRef.nativeElement.value = this.elRef.nativeElement.value + decimales.toString().slice(0, 5);
    }

    const numberonly = /[^0-9.,']*/g
    const value =  this.elRef.nativeElement.value;
    this.elRef.nativeElement.value = value.replace(numberonly,"");
    if(value != this.elRef.nativeElement.value){
      e.stopPropagation();
    }
    entero = "";
    decimales = "";
  }


}
