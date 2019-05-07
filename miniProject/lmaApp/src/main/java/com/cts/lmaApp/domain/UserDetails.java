package com.cts.lmaApp.domain;



import javax.persistence.*;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Entity
@Table(name="Employee")
public class UserDetails {

    @Id
    @GeneratedValue
    @Column(name = "EMP_ID",insertable=false, updatable=false)
    private BigInteger empId;
    @Column(name = "EMP_MNG_ID")
    private BigInteger empMgrId;
    @Column(name = "EMP_NAME")
    private String name;
    @Column(name = "EMP_DEPT")
    private String depName;
    @Column(name = "EMP_DOJ")
    private Date joinDate;
    @Column(name = "EMP_MAIL")
    private String email;
    @Column(name = "EMP_PHONE")
    private  String phone;
    @Column(name = "LEAVE_BALANCE")
    private BigInteger balanceLeave;
    //@OneToMany(fetch = FetchType.LAZY, mappedBy = "userDetails")
   // @JsonIgnoreProperties
    @OneToMany(cascade =CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "EMP_ID")
    private List<LeaveHistory> leaveHistory=new ArrayList<>();

    public List<LeaveHistory> getLeaveHistory() {return leaveHistory;}

    public void setLeaveHistory(List<LeaveHistory> leaveHistory) {this.leaveHistory = leaveHistory;}
    public BigInteger getEmpId() {
        return empId;
    }

    public void setEmpId(BigInteger empId) {
        this.empId = empId;
    }

    public BigInteger getEmpMgrId() {
        return empMgrId;
    }

    public void setEmpMgrId(BigInteger empMgrId) {
        this.empMgrId = empMgrId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepName() {
        return depName;
    }

    public void setDepName(String depName) {
        this.depName = depName;
    }

    public Date getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(Date joinDate) {
        this.joinDate = joinDate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public BigInteger getBalanceLeave() {
        return balanceLeave;
    }

    public void setBalanceLeave(BigInteger balanceLeave) {
        this.balanceLeave = balanceLeave;
    }




}
