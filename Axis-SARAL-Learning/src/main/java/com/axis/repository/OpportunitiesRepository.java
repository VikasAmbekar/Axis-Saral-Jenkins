package com.axis.repository;

import com.axis.entity.Opportunities;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OpportunitiesRepository extends CrudRepository<Opportunities, String> {
}
