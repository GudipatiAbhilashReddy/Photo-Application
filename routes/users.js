var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var EmailTemplate = require('email-templates').EmailTemplate;

/* GET users listing. */
router.get('/ContactForm',(req,res)=>{
  console.log("hi gudipaty");
  //userName='+contactForm.userName+'&userEmail='+contactForm.userEmail+'&mailSubject='+contactForm.mailSubject+'&mailContent='+contactForm.mailContent
  console.log(req.query.cont);
   let userName =req.query.userName;
  let userEmail = req.query.userEmail;
  let mailSubject = req.query.mailSubject;
  let mailContent = req.query.mailContent;
  let mailcompany = req.query.mailcompany; 
  let designation = req.query.designation; 
  let experience = req.query.experience; 
  let skills = req.query.skills; 
  
  console.log(userName);
  console.log(mailSubject);
  console.log(userEmail);
  console.log(mailContent);
  console.log(mailcompany);  
  console.log(designation); 
  console.log(experience);
  console.log(skills);


  

  let transporter=nodemailer.createTransport({
    host:'smtp.turretlabs.com',
    port:'587',
    secure:false,
    auth : {
      user: 'helpdesk@turretlabs.com',
      pass : 'TlHd783@102018'
    },tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
  }
  });

  let mailOptions={
    from : userEmail,
    to : 'helpdesk@turretlabs.com',
    subject : mailSubject,
    html : `<p>Hi EquiNordic Systems This is <span><b>${userName}</b></span></p><br>
    
      


  <p> Message : ${mailContent}</p><br>
  <p><b>Best Regrads</b></p>
  <p>${userName}</p>
















    `  
  }

  transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
      console.log(err);
      res.sendStatus(403);
      res.send({
        status:'sucess'
      })
    }
    console.log('Message sent: %s', info.messageId);

        // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    res.send({
      status:info.messageId
    });
  })
})

module.exports = router;
