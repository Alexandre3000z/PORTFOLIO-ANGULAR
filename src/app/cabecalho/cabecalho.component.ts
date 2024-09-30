import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit, OnDestroy {
  teste = 'TESTANDO123';
  horaAtual: string = '';
  private subscription: Subscription | undefined;

  constructor() {}

  ngOnInit(): void {
    this.atualizarRelogio();
    this.subscription = interval(1000).subscribe(() => this.atualizarRelogio());
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private atualizarRelogio(): void {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    this.horaAtual = `${horas}:${minutos}:${segundos}`;
  }
}
