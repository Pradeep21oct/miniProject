package com.cts.lmaApp.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;

@Entity
@Table(name="LEAVE_HISTORY")
public class LeaveHistory implements Serializable {

    @Id
    @GeneratedValue
    @Column(name="LEAVE_ID",insertable=false, updatable=false)
    private int leaveId;
    @Column(name="NUMBER_OF_DAYS")
    private int noOfDays;
    @Column(name="START_DATE")
    private Date startDate;
    @Column(name="END_DATE")
    private Date endDate;
    @Column(name="LEAVE_STATUS")
    private  String leaveStatus;
    @Column(name="APPLIED_ON")
    private Date appliedOn;
    @Column(name="MANAGER_COMMENTS")
    private String ManagerComments;
    @Column(name="REASONS")
    private String reason;
    @Column(name="LEAVE_TYPE")
    private String leaveType;
    @Column(name="EMP_ID")
    private BigInteger empId;
   transient private String name;
    transient private BigInteger balanceLeave;
    //@ManyToOne(fetch = FetchType.LAZY)
   // @JoinColumn(name="EMP_ID")
  //  @JsonIgnoreProperties
  //  private UserDetails userDetails;
    public int getLeaveId() {
        return leaveId;
    }
    public int getNoOfDays() { return noOfDays; }
   // public UserDetails getUserDetails() {return userDetails;}
   // public void setUserDetails(UserDetails userDetails) { this.userDetails = userDetails; }
    public void setLeaveId(int leaveId) {this.leaveId = leaveId;}
    public int getNoOfDaysOfDays() {
        return noOfDays;
    }
    public void setNoOfDays(int noOfDays) {
        this.noOfDays = noOfDays;
    }
    public Date getStartDate() {
        return startDate;
    }
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }
    public Date getEndDate() {
        return endDate;
    }
    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
    public String getLeaveStatus() {
        return leaveStatus;
    }
    public void setLeaveStatus(String leaveStatus) { this.leaveStatus = leaveStatus; }
    public Date getAppliedOn() {
        return appliedOn;
    }
    public void setAppliedOn(Date appliedOn) {
        this.appliedOn = appliedOn;
    }
    public String getManagerComments() {
        return ManagerComments;
    }
    public void setManagerComments(String managerComments) {
        ManagerComments = managerComments;
    }

    public String getReason() {
        return reason;
    }
    public void setReason(String reason) {
        this.reason = reason;
    }
    public String getLeaveType() {
        return leaveType;
    }
    public void setLeaveType(String leaveType) {
        this.leaveType = leaveType;
    }
    public BigInteger getEmpId() {return empId;}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigInteger getBalanceLeave() {
        return balanceLeave;
    }

    public void setBalanceLeave(BigInteger balanceLeave) {
        this.balanceLeave = balanceLeave;
    }

    public void setEmpId(BigInteger empId) { this.empId = empId; }
    public LeaveHistory(){}

}
