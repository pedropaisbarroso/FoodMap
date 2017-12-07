using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FoodMap.Server
{
  public static class WebApiConfig
  {
    public static void Register(HttpConfiguration config)
    {
      // Web API configuration and services

      // Web API routes
      config.MapHttpAttributeRoutes();

      var cors = new EnableCorsAttribute("*", "*", "*");
      config.EnableCors(cors);

      config.Routes.MapHttpRoute(
          name: "DefaultApi",
          routeTemplate: "api/{controller}/{id}",
          defaults: new { id = RouteParameter.Optional }
      );

      config.IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.Always;

      ConfigureJsonFormatter(config);

    }

    private static void ConfigureJsonFormatter(HttpConfiguration config)
    {
      var jsonFormatter = config.Formatters.JsonFormatter;
      jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
      jsonFormatter.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Local;
      config.Formatters.Remove(config.Formatters.XmlFormatter);
    }

  }
}
