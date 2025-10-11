import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivroCadastroRequest } from '../models/livro.dto';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  url = "https://api.franciscosensaulas.com/api/v1/biblioteca/autores"

  constructor(private httpClient: HttpClient) { }

  create(form: LivroCadastroRequest): Observable<void> {
    return this.httpClient.post<void>(this.url, form);
  }
  // getAll(): Observable<LivroResponse[]> {
  //   return this.httpClient.get<livroResponse[]>(this.url);
  // }

  // delete(id: number): Observable<void> {
  //   const urlApagar = `${this.url}/${id}`;
  //   return this.httpClient.delete<void>(urlApagar);
  // }

  // getById(id: number): Observable<LivroResponse> {
  //   const urlConsultarPorId = `${this.url}/${id}`;
  //   return this.httpClient.get<LivroResponse>(urlConsultarPorId);
  // }

  // update(id: number, form: LivroEditarRequest): Observable<void> {
  //   const urlAtualizar = `${this.url}/${id}`;
  //   // PUT envia o corpo com os campos editáveis (ex.: { nome }).
  //   return this.httpClient.put<void>(urlAtualizar, form);
  // }
}
