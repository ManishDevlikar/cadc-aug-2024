#include<stdio.h>
struct emp{
int id;
char ename[20];
double sal;
double comm;
int age;
int deptno;
};
// ------------------------- print emp by id ---------------------------------------------------------------
void printEmployeeById(struct emp e[],int size,int empId){
    for(int i=0;i<size;i++){
        if(e[i].id==empId){
            printf("Employee ID: %d\n",e[i].id);
            printf("Employee Name: %s\n",e[i].ename);
            printf("Employee Salary: %.2f\n",e[i].sal);
            printf("Employee Commission: %.2f\n",e[i].comm);
            break;
        }
    }
    printf("Invalid User Id");
}

// ------------------------- print all emp ---------------------------------------------------------------
void printAllEmployees(struct emp e[],int size){
    for(int i=0;i<size;i++){
            printf("Employee ID: %d\n",e[i].id);
            printf("Employee Name: %s\n",e[i].ename);
            printf("Employee Salary: %.2f\n",e[i].sal);
            printf("Employee Commission: %.2f\n",e[i].comm);
            printf("Employee age: %d\n",e[i].age);
            printf("Employee deptno: %d\n",e[i].deptno);
    }
}

// ------------------------- get annual sal ---------------------------------------------------------------
double getAnnualSal(struct emp e[],int empid,int size){
    for(int i=0;i<size;i++){
        if(e[i].id==empid){
            return e[i].sal*12;
        }
    }
    return 0;     
}

// ------------------------- get Total annual sal ---------------------------------------------------------------
double getTotalAnnualSal(struct emp e[],int size){
    double sum=0;
    for(int i=0;i<size;i++){
        sum=sum+e[i].sal*12;
    }
    return sum;
}

// ------------------------- add new Employee ---------------------------------------------------------------
void addEmployee(struct emp old[],int size,struct emp nemp,struct emp newEmp[]){
    for(int i=0;i<size;i++){
        newEmp[i]=old[i];
    }
    newEmp[size]=nemp;
}

// ------------------------- Create new Employee ---------------------------------------------------------------
struct emp createEmployee(){
    struct emp e;
    printf("Enter Employee ID: ");
    scanf("%d",&e.id);
    printf("Enter Employee Name: ");
    scanf("%49s",&e.ename);
    printf("Enter Employee Salary: ");
    scanf("%lf",&e.sal);
    printf("Enter Employee Commission: ");
    scanf("%lf",&e.comm);
    printf("Enter Employee Age: ");
    scanf("%d",&e.age);
     while (1) {
        printf("Enter Employee Department Number (10/20/30/40): ");
        scanf("%d", &e.deptno);
        if (e.deptno == 10 || e.deptno == 20 || e.deptno == 30 || e.deptno == 40) {
            break;
        } else {
            printf("Invalid department number! Please enter 10, 20, 30, or 40.\n");
        }
    }

    return e;
}

int main(){

int n;
printf("Enter How Many Numbers Of Employee you want to insert");
scanf("%d",&n);
struct emp em[n];
for (size_t i = 0; i < n; i++){
    printf("Enter Employee Details of %d\n: ",i+1);
    struct emp e=createEmployee();
    em[i]=e;
}

printf("Enter EmpId to get Result");
int empid;
scanf("%d",&empid);
printEmployeeById(em,n,empid);

printf("All Employee details Are");
printAllEmployee(em,n);

struct emp newEmp[n+1];
struct emp nEmp=createEmployee();
addEmployee(em,n,nEmp,newEmp);

}