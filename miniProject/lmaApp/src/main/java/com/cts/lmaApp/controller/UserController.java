    package com.cts.lmaApp.controller;

    import com.cts.lmaApp.domain.LeaveHistory;
    import com.cts.lmaApp.domain.UserDetails;
    import com.cts.lmaApp.service.DataService;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.math.BigInteger;

    @RestController
    @CrossOrigin(origins = "http://localhost:4200")
    public class UserController {
        @Autowired
        DataService dataService;

           @GetMapping("/empDetails/{empId}")
          public UserDetails getUserDetails(@PathVariable int empId){
            System.out.printf(" controller "+empId);
              return dataService.getUserData(empId).get();

          }
        @GetMapping("/mgrDetails/{empId}")
        public UserDetails getManagerDetails(@PathVariable int empId){
            System.out.printf(" controller "+empId);
            BigInteger mgrid=dataService.getUserData(empId).get().getEmpMgrId();
            return dataService.getManagerData(mgrid).get();
        }

           @GetMapping("/mgrDashboard/{empId}")
            public Object getReportingLeaveDetails(@PathVariable int empId){
                System.out.printf(" manager dashboard controller "+empId);
                return dataService.getLeaveHistory(empId);
            }


    }
