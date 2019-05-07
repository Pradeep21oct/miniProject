package com.cts.lmaApp.controller;

import com.cts.lmaApp.domain.LeaveHistory;
import com.cts.lmaApp.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LeaveController {
    @Autowired
    DataService dataService;

    @GetMapping("/applyLeave/{empId}")
    public @ResponseBody
    List<LeaveHistory> getLeaveHistory(@PathVariable int empId) {
        System.out.printf(" Applay Leavcontroller " + empId);
        return dataService.getLeaveHistory(empId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/applyLeave")
    public ResponseEntity< String > getApply(@RequestBody LeaveHistory leave){
        System.out.printf(" Apply new Leave  "+leave);
        dataService.applyLeave(leave);
        return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).build();
    }
}
