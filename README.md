# ASP.NET CORE DataGrid - Update Datasource and Columns from AJAX Request

## Repository Description

This repository contains an ASP.NET Core MVC sample that demonstrates updating a Syncfusion EJ2 ASP.NET Core DataGrid data source and its column definitions dynamically using an AJAX POST request triggered by grid row selection.

## Project Overview

This application illustrates how two Syncfusion EJ2 DataGrid components interact in an ASP.NET Core MVC project. Selecting a row in the primary grid sends the selected CustomerID to the server through an AJAX request. The server returns filtered order data, and the secondary grid updates both its data source and columns at runtime without reloading the page.

The sample focuses on dynamic grid reconfiguration, client–server communication, and runtime column refresh using Syncfusion EJ2 APIs.

## Key Features

- Syncfusion EJ2 ASP.NET Core DataGrid integration
- AJAX-based server communication
- Dynamic update of grid data source
- Runtime column removal and addition
- In-memory sample data for demonstration

## Prerequisites

- Visual Studio 2022
- .NET 6.0 or later

## Running the Application

Follow the steps below to clone the repository, restore dependencies, and run the application.

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone https://github.com/SyncfusionExamples/EJ2-DataGrid-Core-update-datasource-and-columns-from-ajax-request.git
   cd EJ2-DataGrid-Core-update-datasource-and-columns-from-ajax-request
   ```

2. Restore the required NuGet packages:

   ```bash
   dotnet restore
   ```

3. Run the application using the .NET CLI or Visual Studio:

   ```bash
   dotnet run
   ```

Launch the displayed application URL in a browser, select a row in the main grid, and observe the secondary grid update its columns and data dynamically.

## Additional Resources

- [Syncfusion ASP.NET Core Grid Template Editing](https://ej2.syncfusion.com/aspnetcore/documentation/grid/editing/template-editing)
- [Syncfusion ASP.NET Core Grid Documentation](https://ej2.syncfusion.com/aspnetcore/documentation/grid)
- [Syncfusion ASP.NET Core Demos](https://ej2.syncfusion.com/aspnetcore)
