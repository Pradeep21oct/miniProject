package com.cts.lmaApp.repo;

import com.cts.lmaApp.domain.UserDetails;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface UserRepository extends CrudRepository<UserDetails,BigInteger>{
}
