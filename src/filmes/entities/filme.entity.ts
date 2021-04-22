import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Filme extends Model {
  @Column
  nome: string;

  @Column
  comentario: string;

  @Column
  autor: string;


  @Column
  estrelas: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
