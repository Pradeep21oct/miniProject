package com.cts.lmaApp.repo;

import com.cts.lmaApp.domain.LeaveHistory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ManagerLeaveRepository extends CrudRepository<LeaveHistory,Integer> {

}