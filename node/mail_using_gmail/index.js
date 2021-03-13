var nodeMailer = require("nodemailer");
var transport = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'ay26528974@gmail.com',
        pass:'Ay26528974ajeet@'
    }
});
var mailOptions = {
    from: 'ay26528974@gmail.com',
    to:'ajeet.hubrootsolutions@gmail.com',
    subject:'Test Node Mailer',
    text:'Hello Please Subscribe CodeIFI'
}
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.error(error);
    }else{
        console.warn("email has been sent");
    }
})