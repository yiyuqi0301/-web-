package kj.servlet;

import com.sun.mail.util.MailSSLSocketFactory;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;
/**
 * 邮件发送
 *         QQ邮箱--->别的邮箱
 * @author shiyunpeng
 */
public class SendEmailManger extends Thread {
    private String mailAdr;//邮箱
    private String content;//邮件的内容
    private String subject;//邮件的题目
    public SendEmailManger(String mailAdr, String subject, String content) {
        super();
        this.mailAdr = mailAdr;
        this.subject = subject;
        this.content = content;
    }
    @Override
    public void run() {
        super.run();
        try {
            sendMail(mailAdr, subject, content);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    private void sendMail(String mailAdr, String subject, String content) throws Exception {
        //加密的邮件套接字协议工厂
        MailSSLSocketFactory sf = new MailSSLSocketFactory();
        sf.setTrustAllHosts(true);
        final Properties props = new Properties();
        // 表示SMTP发送邮件，需要进行身份验证
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.host", "smtp.qq.com");
        // smtp登陆的账号、密码 ；需开启smtp登陆
        props.setProperty("mail.debug", "true");
        props.put("mail.user", "填写您的qq邮箱");
        props.put("mail.password", "填写您的qq邮箱授权码");
        // 特别需要注意，要将ssl协议设置为true,否则会报530错误
        props.put("mail.smtp.ssl.enable", "true");
        props.put("mail.smtp.ssl.socketFactory", sf);
        Authenticator authenticator = new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                // 用户名、密码
                String userName = props.getProperty("mail.user");
                String password = props.getProperty("mail.password");
                return new PasswordAuthentication(userName, password);
            }
        };
        // 使用环境属性和授权信息，创建邮件会话
        Session mailSession = Session.getInstance(props, authenticator);
        // 创建邮件消息
        MimeMessage message = new MimeMessage(mailSession);
        // 设置发件人
        try {
            InternetAddress form = new InternetAddress(props.getProperty("mail.user"));
            message.setFrom(form);
            // 设置收件人
            InternetAddress to = new InternetAddress(mailAdr);
            message.setRecipient(Message.RecipientType.TO, to);
            // 设置抄送
            // InternetAddress cc = new InternetAddress("591566764@qq.com");
            // message.setRecipient(RecipientType.CC, cc);
            // 设置密送，其他的收件人不能看到密送的邮件地址
            // InternetAddress bcc = new InternetAddress("mashen@163.com");
            // message.setRecipient(RecipientType.CC, bcc);
            // 设置邮件标题
            message.setSubject(subject);
            // 设置邮件的内容体
            message.setContent(content, "text/html;charset=UTF-8");
            // 发送邮件
            Transport.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
//     public static void main(String[] args) throws InterruptedException {
//        // int i = 10;
//         SendEmailManger d = new SendEmailManger("接受邮箱", "标题", "正\n文111<br>22\r2dsafds/nafd/rsa");

// //        while(i>0){
// //            d.start();
// //            i--;
// //            System.out.println("第"+i+"条邮件发送成功");
// //            sleep(360000);
// //        }
//         d.start();
//         System.out.println("执行成功");
//     }
}

