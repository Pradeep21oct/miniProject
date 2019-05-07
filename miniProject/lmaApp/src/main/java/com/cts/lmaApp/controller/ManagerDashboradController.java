package com.cts.lmaApp.controller;

import com.cts.lmaApp.domain.LeaveHistory;
import com.cts.lmaApp.domain.UserDetails;
import com.cts.lmaApp.repo.LeaveRepository;
import com.cts.lmaApp.repo.ManagerLeaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ManagerDashboradController {

    @Autowired
    LeaveRepository leaveRepository;

  @Autowired
  ManagerLeaveRepository managerLeaveRepository;

    @GetMapping("/mDashboard/{empId}")
    public List<UserDetails> getPendingLeavs(@PathVariable int empId){
        List<UserDetails> ll=new ArrayList<>();
        UserDetails userDetails=leaveRepository.findById(BigInteger.valueOf(empId)).get();
        List<LeaveHistory> lh=userDetails.getLeaveHistory()
                                         .stream().filter(var->var.getLeaveStatus().equalsIgnoreCase("PENDING"))
                                        .collect(Collectors.toList());
        userDetails.setLeaveHistory(lh);
        ll.add(userDetails);
        return ll;
    }



    @GetMapping("/leave/details/{leaveId}")
    public LeaveHistory geLeavDeatils(@PathVariable int leaveId){
        LeaveHistory leaveHistory=new LeaveHistory();
        leaveHistory= managerLeaveRepository.findById(leaveId).get();
        BigInteger empId=leaveHistory.getEmpId();
        UserDetails userDetails=leaveRepository.findById(empId).get();
        leaveHistory.setName(userDetails.getName());
        leaveHistory.setBalanceLeave(userDetails.getBalanceLeave());
            return leaveHistory;
    }

    @PostMapping("/leave/approve/")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity< String > approveLeave(@RequestBody LeaveHistory leave){
        System.out.println("ggggggggggggggggggggggggggggg"+leave.getLeaveId());
         leave.setLeaveStatus("APPROVED");
        managerLeaveRepository.save(leave);
        return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).build();
    }


}
