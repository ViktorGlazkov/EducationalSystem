package config;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class CORSFilter implements Filter {

    private final List<String> allowedOrigins = Arrays.asList(
            "http://localhost:3000",
            "http://localhost:8181",
            "http://127.0.0.1:8181",
            "https://accounts.google.com");

    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;

        String origin = request.getHeader("Origin");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Expose-Headers", "X-Requested-With, Content-Type, Accept, Origin" +
                "x-requested-with, origin, authorization, Location,  client-security-token");
        response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, Origin" +
                "x-requested-with, origin, authorization, Location,  client-security-token");

        chain.doFilter(req, res);
    }

    public void init(FilterConfig filterConfig) {
    }
}


