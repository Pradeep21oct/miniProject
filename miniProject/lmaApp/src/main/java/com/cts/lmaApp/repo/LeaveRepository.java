package com.cts.lmaApp.repo;

import com.cts.lmaApp.domain.LeaveHistory;
import com.cts.lmaApp.domain.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface LeaveRepository extends CrudRepository<UserDetails,BigInteger> {

}