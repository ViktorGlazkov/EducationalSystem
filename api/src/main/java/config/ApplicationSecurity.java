package config;

import config.cors.CORSFilter;
import config.csrf.CsrfTokenResponseCookieBindingFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.util.matcher.AndRequestMatcher;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.NegatedRequestMatcher;


@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class ApplicationSecurity extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthenticationEntryPoint authenticationEntryPoint;
    @Autowired
    private AuthenticationFailureHandler authenticationFailureHandler;
    @Autowired
    private AuthenticationSuccessHandler authenticationSuccessHandler;
//    @Autowired
//    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private CORSFilter corsFilter;
    @Autowired
    private LogoutSuccessHandler logoutSuccessHandler;

    @Override
    protected void configure(AuthenticationManagerBuilder builder) throws Exception {
       // builder.userDetailsService(userDetailsService);
    //    builder.authenticationProvider(authProvider);
        builder.inMemoryAuthentication().withUser("user").password("user").roles("USER").and().withUser("admin")
                .password("admin").roles("ADMIN");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic().and().authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS, "/api/**").permitAll()
                .antMatchers(HttpMethod.GET, "/api/**").permitAll()

                .antMatchers(HttpMethod.POST, "/api/user/**").hasRole("USER")
                .antMatchers(HttpMethod.POST, "/api/login").permitAll()
                .antMatchers(HttpMethod.POST, "/api/*/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/api/*/**").hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/api/*/**").hasRole("ADMIN")

                .antMatchers("/api/login", "/api/open/**").permitAll()
                .antMatchers("/logout", "/api/**").hasRole("USER");

        http.exceptionHandling().authenticationEntryPoint(authenticationEntryPoint);
        http.formLogin().successHandler(authenticationSuccessHandler);
        http.formLogin().failureHandler(authenticationFailureHandler);

        http.logout().logoutUrl("/logout").logoutSuccessHandler(logoutSuccessHandler);

        http.csrf().requireCsrfProtectionMatcher(
                new AndRequestMatcher(
                        new NegatedRequestMatcher(new AntPathRequestMatcher("/api/login*/**", HttpMethod.OPTIONS.toString())),
                        new NegatedRequestMatcher(new AntPathRequestMatcher("/logout*/**", HttpMethod.OPTIONS.toString())),

                        new NegatedRequestMatcher(new AntPathRequestMatcher("/api*/**", HttpMethod.GET.toString())),
                        new NegatedRequestMatcher(new AntPathRequestMatcher("/api*/**", HttpMethod.HEAD.toString())),
                        new NegatedRequestMatcher(new AntPathRequestMatcher("/api*/**", HttpMethod.OPTIONS.toString())),
                        new NegatedRequestMatcher(new AntPathRequestMatcher("/api*/**", HttpMethod.TRACE.toString())),
                        new NegatedRequestMatcher(new AntPathRequestMatcher("/api/open*/**"))
                )
        );
        http.addFilterAfter(new CsrfTokenResponseCookieBindingFilter(), CsrfFilter.class);
    }
}
