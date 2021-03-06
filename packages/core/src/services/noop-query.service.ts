/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotImplementedException } from '@nestjs/common';
import {
  Filter,
  UpdateManyResponse,
  Query,
  DeleteManyResponse,
  AggregateQuery,
  AggregateResponse,
  ModifyRelationOptions,
  DeleteOneOptions,
  FindByIdOptions,
  FindRelationOptions,
  GetByIdOptions,
  UpdateOneOptions,
} from '../interfaces';
import { QueryService } from './query.service';
import { DeepPartial, Class } from '../common';

export class NoOpQueryService<DTO> implements QueryService<DTO> {
  private static instance: QueryService<unknown> = new NoOpQueryService();

  static getInstance<DTO>(): QueryService<DTO> {
    return this.instance as QueryService<DTO>;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  addRelations<Relation>(
    relationName: string,
    id: string | number,
    relationIds: (string | number)[],
    opts?: ModifyRelationOptions<DTO, Relation>,
  ): Promise<DTO> {
    return Promise.reject(new NotImplementedException('addRelations is not implemented'));
  }

  createMany<C extends DeepPartial<DTO>>(items: C[]): Promise<DTO[]> {
    return Promise.reject(new NotImplementedException('createMany is not implemented'));
  }

  createOne<C extends DeepPartial<DTO>>(item: C): Promise<DTO> {
    return Promise.reject(new NotImplementedException('createOne is not implemented'));
  }

  deleteMany(filter: Filter<DTO>): Promise<DeleteManyResponse> {
    return Promise.reject(new NotImplementedException('deleteMany is not implemented'));
  }

  deleteOne(id: number | string, opts?: DeleteOneOptions<DTO>): Promise<DTO> {
    return Promise.reject(new NotImplementedException('deleteOne is not implemented'));
  }

  findById(id: string | number, opts?: FindByIdOptions<DTO>): Promise<DTO | undefined> {
    return Promise.reject(new NotImplementedException('findById is not implemented'));
  }

  findRelation<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: DTO,
    opts?: FindRelationOptions<Relation>,
  ): Promise<Relation | undefined>;

  findRelation<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dtos: DTO[],
    opts?: FindRelationOptions<Relation>,
  ): Promise<Map<DTO, Relation | undefined>>;

  findRelation<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: DTO | DTO[],
    opts?: FindRelationOptions<Relation>,
  ): Promise<(Relation | undefined) | Map<DTO, Relation | undefined>> {
    return Promise.reject(new NotImplementedException('findRelation is not implemented'));
  }

  getById(id: string | number, opts?: GetByIdOptions<DTO>): Promise<DTO> {
    return Promise.reject(new NotImplementedException('getById is not implemented'));
  }

  query(query: Query<DTO>): Promise<DTO[]> {
    return Promise.reject(new NotImplementedException('query is not implemented'));
  }

  aggregate(filter: Filter<DTO>, aggregate: AggregateQuery<DTO>): Promise<AggregateResponse<DTO>> {
    return Promise.reject(new NotImplementedException('aggregate is not implemented'));
  }

  count(filter: Filter<DTO>): Promise<number> {
    return Promise.reject(new NotImplementedException('count is not implemented'));
  }

  queryRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: DTO,
    query: Query<Relation>,
  ): Promise<Relation[]>;

  queryRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dtos: DTO[],
    query: Query<Relation>,
  ): Promise<Map<DTO, Relation[]>>;

  queryRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: DTO | DTO[],
    query: Query<Relation>,
  ): Promise<Relation[] | Map<DTO, Relation[]>> {
    return Promise.reject(new NotImplementedException('queryRelations is not implemented'));
  }

  countRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: DTO,
    filter: Filter<Relation>,
  ): Promise<number>;

  countRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dtos: DTO[],
    filter: Filter<Relation>,
  ): Promise<Map<DTO, number>>;

  countRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: DTO | DTO[],
    filter: Filter<Relation>,
  ): Promise<number | Map<DTO, number>> {
    return Promise.reject(new NotImplementedException('countRelations is not implemented'));
  }

  removeRelation<Relation>(
    relationName: string,
    id: string | number,
    relationId: string | number,
    opts?: ModifyRelationOptions<DTO, Relation>,
  ): Promise<DTO> {
    return Promise.reject(new NotImplementedException('removeRelation is not implemented'));
  }

  removeRelations<Relation>(
    relationName: string,
    id: string | number,
    relationIds: (string | number)[],
    opts?: ModifyRelationOptions<DTO, Relation>,
  ): Promise<DTO> {
    return Promise.reject(new NotImplementedException('removeRelations is not implemented'));
  }

  setRelation<Relation>(
    relationName: string,
    id: string | number,
    relationId: string | number,
    opts?: ModifyRelationOptions<DTO, Relation>,
  ): Promise<DTO> {
    return Promise.reject(new NotImplementedException('setRelation is not implemented'));
  }

  updateMany<U extends DeepPartial<DTO>>(update: U, filter: Filter<DTO>): Promise<UpdateManyResponse> {
    return Promise.reject(new NotImplementedException('updateMany is not implemented'));
  }

  updateOne<U extends DeepPartial<DTO>>(id: string | number, update: U, opts?: UpdateOneOptions<DTO>): Promise<DTO> {
    return Promise.reject(new NotImplementedException('updateOne is not implemented'));
  }

  aggregateRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: DTO,
    filter: Filter<Relation>,
    aggregate: AggregateQuery<Relation>,
  ): Promise<AggregateResponse<Relation>>;

  aggregateRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dtos: DTO[],
    filter: Filter<Relation>,
    aggregate: AggregateQuery<Relation>,
  ): Promise<Map<DTO, AggregateResponse<Relation>>>;

  aggregateRelations<Relation>(
    RelationClass: Class<Relation>,
    relationName: string,
    dto: DTO | DTO[],
    filter: Filter<Relation>,
    aggregate: AggregateQuery<Relation>,
  ): Promise<AggregateResponse<Relation> | Map<DTO, AggregateResponse<Relation>>> {
    return Promise.reject(new NotImplementedException('aggregateRelations is not implemented'));
  }
}
