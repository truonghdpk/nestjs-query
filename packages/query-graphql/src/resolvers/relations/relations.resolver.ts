import { Class } from '@nestjs-query/core';
import { ServiceResolver } from '../resolver.interface';
import { AggregateRelationsMixin } from './aggregate-relations.resolver';
import { ReadRelationsMixin } from './read-relations.resolver';
import { ReferencesRelationMixin } from './references-relation.resolver';
import { RemoveRelationsMixin } from './remove-relations.resolver';
import { UpdateRelationsMixin } from './update-relations.resolver';
import { getRelations } from '../../decorators';
import { getReferences } from '../../decorators/reference.decorator';
import { BaseResolverOptions } from '../../decorators/resolver-method.decorator';

export interface RelatableOpts<DTO> extends BaseResolverOptions {
  enableTotalCount?: boolean;
  enableAggregate?: boolean;
}

export const Relatable = <DTO>(DTOClass: Class<DTO>, opts: RelatableOpts<DTO>) => <
  B extends Class<ServiceResolver<DTO>>
>(
  Base: B,
): B => {
  const { enableTotalCount, enableAggregate } = opts;
  const relations = getRelations(DTOClass, opts);
  const references = getReferences(DTOClass, opts);

  const referencesMixin = ReferencesRelationMixin(DTOClass, references);
  const aggregateRelationsMixin = AggregateRelationsMixin(DTOClass, { ...relations, enableAggregate });
  const readRelationsMixin = ReadRelationsMixin(DTOClass, { ...relations, enableTotalCount });
  const updateRelationsMixin = UpdateRelationsMixin(DTOClass, relations);

  return referencesMixin(
    aggregateRelationsMixin(readRelationsMixin(updateRelationsMixin(RemoveRelationsMixin(DTOClass, relations)(Base)))),
  );
};
