package com.axis.repository;

import com.axis.entity.Stakeholder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StakeholderRepository extends CrudRepository<Stakeholder, String> {
}
