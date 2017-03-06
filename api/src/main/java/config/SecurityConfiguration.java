package config;

import config.cors.CORSFilter;
import config.rest.RESTAuthenticationEntryPoint;
import config.rest.RESTAuthenticationSuccessHandler;
import config.rest.RESTLogoutSuccessHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

@Configuration
public class SecurityConfiguration {

    @Bean
    public RESTAuthenticationEntryPoint authenticationEntryPoint() {
        return new RESTAuthenticationEntryPoint();
    }

    @Bean
    public SimpleUrlAuthenticationFailureHandler authenticationFailureHandler() {
        return new SimpleUrlAuthenticationFailureHandler();
    }

    @Bean
    public RESTAuthenticationSuccessHandler authenticationSuccessHandler() {
        return new RESTAuthenticationSuccessHandler();
    }

    @Bean
    public CORSFilter corsFilter() {
        return new CORSFilter();
    }

    @Bean
    public LogoutSuccessHandler logoutSuccessHandler() {
        return new RESTLogoutSuccessHandler();
    }
}
