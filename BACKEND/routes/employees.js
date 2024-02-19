const router = require("express").Router();
let Employee = require("../models/employee.js");
let Salary = require("../models/salary.js");
let Attendance= require("../models/attendance.js");


router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const lname = req.body.lname;
    const age = Number(req.body.age); 
    const gender = req.body.gender;
    const contact = Number(req.body.contact);
    const job = req.body.job;

    const newEmployee = new Employee({
        name,
        lname,
        age,
        gender,
        contact,
        job
    })

    newEmployee.save().then(()=>{
        res.json("Employee Added")
    }).catch((err)=>{
        console.log(err);
    })  
})

router.route("/").get((req,res)=>{

    Employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route("/update/:id").put(async(req,res)=>{  
    let userId = req.params.id;
    const {name,lname,age,gender,contact,job} = req.body;

    const updateStudent = {
        name,
        lname,
        age,
        gender,
        contact,
        job
    }

    const update = await Employee.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send({status:"User updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;

    await Employee.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    const user = await Employee.findById(userId)
    .then((employee)=>{
        res.status(200).send({status:"User fetched",employee})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({ststus:"Error with get user",error:err.message});
    })
})

router.route("/addsalary").post((req,res)=>{

    const ename = req.body.ename;
    const elname = req.body.elname;
    const basic = Number(req.body.basic); 
    const bonus = Number(req.body.bonus);
    const ded = Number(req.body.ded);
    const net = Number(req.body.net);

    const newSalary = new Salary({
        ename,
        elname,
        basic,
        bonus,
        ded,
        net
    })

    newSalary.save().then(()=>{
        res.json("Salary Added")
    }).catch((err)=>{
        console.log(err);
    })  
})
router.route("/gets").get((req,res)=>{

    Salary.find().then((salary)=>{
        res.json(salary)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/updates/:id").put(async(req,res)=>{  
    let userId = req.params.id;
    const {ename,elname,basic,bonus,ded,net} = req.body;

    const updateStudent = {
        ename,
        elname,
        basic,
        bonus,
        ded,
        net
    }

    const update = await Salary.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send({status:"User updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

router.delete("/deletes/:id", async (req, res) => {
    try {
      const documentId = req.params.id;
      const deletedDocument = await Salary.findByIdAndDelete(documentId);
      if (!deletedDocument) {
        return res.status(404).send({ error: "Document not found" });
      }
      res.status(200).send({ status: "Document deleted" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "Error with deleting document", message: error.message });
    }
  })
  
  router.route("/gett/:id").get(async(req,res)=>{
    let userId=req.params.id;
    const user = await Salary.findById(userId)
    .then((employee)=>{
        res.status(200).send({status:"User fetched",employee})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({ststus:"Error with get user",error:err.message});
    })
  
})

router.route("/adds").post((req,res)=>{

    const name = req.body.name;
    const lname = req.body.lname;
    const age = Number(req.body.age); 
    const gender = req.body.gender;
    const contact = Number(req.body.contact);
    const job = req.body.job;
    const date = req.body.date;
    const time = req.body.time;
    

    const newAttendance = new Attendance({
        name,
        lname,
        age,
        gender,
        contact,
        job,
        date,
        time
    })

    newAttendance.save().then(()=>{
        res.json("Attendance Marked")
    }).catch((err)=>{
        console.log(err);
    })  
})
router.route("/getss").get((req,res)=>{

    Attendance.find().then((attendance)=>{
        res.json(attendance)
    }).catch((err)=>{
        console.log(err)
    })
})
;

module.exports = router;
