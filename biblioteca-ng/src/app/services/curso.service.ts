import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CursoCadastroRequest, CursoEditarRequest, CursoResponse } from '../models/curso.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  url = "https://api.franciscosensaulas.com/api/v1/escola/cursos"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CursoResponse[]> {
    return this.httpClient.get<CursoResponse[]>(this.url);
  }

  create(form: CursoCadastroRequest): Observable<void> {
    return this.httpClient.post<void>(this.url, form);
  }

  delete(id: number): Observable<void> {
    const urlApagar = `${this.url}/${id}`;
    return this.httpClient.delete<void>(urlApagar);
  }

  getById(id: number): Observable<CursoResponse> {
    const urlConsultarPorId = `${this.url}/${id}`;
    return this.httpClient.get<CursoResponse>(urlConsultarPorId);
  }

      update(id: number, form: CursoEditarRequest): Observable<void> {
        const urlAtualizar = `${this.url}/${id}`;
        return this.httpClient.put<void>(urlAtualizar, form);
      }
}


