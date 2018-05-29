﻿// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Api
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvcCore()
                .AddAuthorization()
                .AddJsonFormatters();

            services.AddAuthentication("Bearer")
                .AddIdentityServerAuthentication(options =>
                {
                    options.Authority = "http://localhost:5000";
                    options.RequireHttpsMetadata = false;
                    options.ApiName = "api";
                });

            services.AddCors(options =>
            {
                // this defines a CORS policy for Aurelia SPA
                options.AddPolicy("aurelia", policy =>
                {
                    policy.WithOrigins("http://localhost:8080")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            services.AddAuthorization(options => {
                options.AddPolicy("HasWebsite", policy => policy.RequireClaim("website"));
            });
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseCors("aurelia");

            app.UseAuthentication();
            
            app.UseMvc();
        }
    }
}