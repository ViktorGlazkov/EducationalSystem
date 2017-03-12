package core.user;

import org.springframework.security.oauth2.provider.OAuth2Authentication;

import java.security.Principal;
import java.util.Map;

public class UserFactory {

    public static User extractUserFromPrincipal(Principal principal) {
        User user = new User();
        Map<String, String> details =
                (Map<String, String>) ((OAuth2Authentication) principal).getUserAuthentication().getDetails();
        user.setName(details.get("name"));
        user.setEmail(details.get("email"));
        user.setProfile(details.get("profile"));
        user.setPicture(details.get("picture"));

        return user;
    }
}
