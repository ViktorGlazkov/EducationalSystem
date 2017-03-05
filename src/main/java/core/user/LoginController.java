package core.user;

import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.Collections;
import java.util.Map;

@RestController
public class LoginController {

    @RequestMapping("token")
    @CrossOrigin
    Map<String, String> token(HttpSession session) {
        return Collections.singletonMap("token", session.getId());
    }

    @RequestMapping("/public/{id}")
    public String getPublic(@PathVariable int id) {
        return "Public " + id;
    }

    @RequestMapping("/private/{id}")
    public String getPrivate(@PathVariable int id) {
        return "Private " + id;
    }

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }
}