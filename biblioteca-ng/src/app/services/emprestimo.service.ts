import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmprestimoCadastroRequest, EmprestimoEditarRequest, EmprestimoResponse } from '../models/emprestimo.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  url = "https://api.franciscosensaulas.com/api/v1/biblioteca/emprestimos"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<EmprestimoResponse[]> {
    return this.httpClient.get<EmprestimoResponse[]>(this.url);
  }

  create(form: EmprestimoCadastroRequest): Observable<void> {
    return this.httpClient.post<void>(this.url, form);
  }

  getById(id: number): Observable<EmprestimoResponse> {
    const urlConsultarPorId = `${this.url}/${id}`;
    return this.httpClient.get<EmprestimoResponse>(urlConsultarPorId);
  }

  update(id: number, form: EmprestimoEditarRequest): Observable<void> {
    const urlAtualizar = `${this.url}/${id}`;
    return this.httpClient.put<void>(urlAtualizar, form);
  }

  delete(id: number): Observable<void> {
    const urlApagar = `${this.url}/${id}`;
    return this.httpClient.delete<void>(urlApagar);
  }
}
