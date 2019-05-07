package com.cts.lmaApp.service;


import com.cts.lmaApp.dao.LeaveDao;
import com.cts.lmaApp.domain.*;
import com.cts.lmaApp.repo.LeaveRepository;
import com.cts.lmaApp.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.*;

@Service
public class DataService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    LeaveRepository leaveRepository;
    @Autowired
    LeaveDao leaveDao;

     public Optional<UserDetails> getUserData(int empId){
       return userRepository.findById(BigInteger.valueOf(empId));
      }

    public Optional <UserDetails> getManagerData(BigInteger empId){
             return userRepository.findById(empId);
    }
    public List<LeaveHistory> getLeaveHistory(int empId){
               return leaveDao.findLeaveByEmpId(BigInteger.valueOf(empId));
    }


    public  LeaveHistory applyLeave(LeaveHistory leave){
          return leaveDao.applyLeave(leave);
    }

    /*public  List<ManagerDashboard> getPedingLeavs(int empId){
        return leaveDao.applyLeave(leave);
    }
*/

}
