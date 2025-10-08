import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlunoCadastroRequest, AlunoEditarRequest, AlunoResponse } from '../models/aluno.dto';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  url = "https://api.franciscosensaulas.com/api/v1/escola/alunos"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<AlunoResponse[]> {
    return this.httpClient.get<AlunoResponse[]>(this.url);
  }

  create(form: AlunoCadastroRequest): Observable<void> {
    return this.httpClient.post<void>(this.url, form);
  }

  delete(id: number): Observable<void> {
    const urlApagar = `${this.url}/${id}`;
    return this.httpClient.delete<void>(urlApagar);
  }

  getById(id: number): Observable<AlunoResponse> {
    const urlConsultarPorId = `${this.url}/${id}`;
    return this.httpClient.get<AlunoResponse>(urlConsultarPorId);
  }

    update(id: number, form: AlunoEditarRequest): Observable<void> {
      const urlAtualizar = `${this.url}/${id}`;
      return this.httpClient.put<void>(urlAtualizar, form);
    }
}