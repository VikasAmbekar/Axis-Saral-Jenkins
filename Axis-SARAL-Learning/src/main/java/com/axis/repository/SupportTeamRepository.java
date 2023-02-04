package com.axis.repository;


import com.axis.entity.SupportTeam;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupportTeamRepository extends CrudRepository<SupportTeam, String> {
}
