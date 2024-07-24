
export interface IDataMapper<TDomain,TDomainEntity> {
    toDomain(entity: TDomainEntity): TDomain;
    toDomainEntity(domain: TDomain): TDomainEntity;
  }