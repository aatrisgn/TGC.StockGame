using Microsoft.OpenApi;
using TGC.Communication;
using TGC.RegardedStonks.Application;
using TGC.RegardedStonks.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

//Business logic
builder.Services.RegisterApplication();

//Infrastructure

builder.Services.AddOpenApi(options =>
{
	options.AddDocumentTransformer((document, context, cancellationToken) =>
	{
		document.Info = new OpenApiInfo
		{
			Title = "ASP.NET Core Web API",
			Version = "v1",
			Description = "ASP.NET Core Web API with JWT authentication. " +
			              "Target Framework is .NET 10. " +
			              "Built‑in OpenAPI + SwaggerUI are used."
		};
 
		// Add Security Scheme (JWT Bearer）
		document.Components ??= new OpenApiComponents();
		document.Components.SecuritySchemes ??=
			new Dictionary<string, IOpenApiSecurityScheme>();
		document.Components.SecuritySchemes.Add("Bearer",
			new OpenApiSecurityScheme
			{
				Type = SecuritySchemeType.Http,
				Scheme = "bearer",
				BearerFormat = "JWT",
				Description = "Please enter token"
			});
 
		// Add Security Requirement
		document.Security ??= new List<OpenApiSecurityRequirement>();
		document.Security.Add(
			new OpenApiSecurityRequirement
			{
				[new OpenApiSecuritySchemeReference("Bearer", document)] = []
			}
		);
 
		return Task.CompletedTask;
	});
});

builder.Services.RegisterMediator();
builder.Services.AddInfrastructure(builder.Configuration);

builder.Services.AddHttpContextAccessor();

builder.Services.AddApiVersioning();
builder.Services.AddProblemDetails();
builder.Services.AddControllers();

const string CorsPolicyName = "RegardedStonksCorsPolicy";
var allowedOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? [];
builder.Services.AddCors(options =>
{
	options.AddPolicy(CorsPolicyName, policy =>
	policy.WithOrigins(allowedOrigins).AllowAnyMethod().AllowAnyHeader());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwaggerUI(options =>
	{
		options.SwaggerEndpoint("/openapi/v1.json", "v1");
	});
}

app.MapOpenApi().AllowAnonymous();

app.UseCors(CorsPolicyName);

app.MapControllers();

app.UseAuthentication();
app.UseAuthorization();

app.Run();