package com.cts.lmaApp.domain;

import java.util.ArrayList;
import java.util.List;

public class ManagerDashboard {

    private UserDetails userDetails;



    List<LeaveHistory> leaves=new ArrayList<>();

    public UserDetails getUserDetails() {
        return userDetails;
    }

    public void setUserDetails(UserDetails userDetails) {
        this.userDetails = userDetails;
    }

    public List<LeaveHistory> getLeaves() {
        return leaves;
    }

    public void setLeaves(List<LeaveHistory> leaves) {
        this.leaves = leaves;
    }
}
