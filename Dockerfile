#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base

WORKDIR /app
EXPOSE 80
#EXPOSE 9002


FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["vdk240/vdk240.csproj", "vdk240/"]
RUN dotnet restore "vdk240/vdk240.csproj"
COPY . .
WORKDIR "/src/vdk240"

RUN apt-get update && apt-get upgrade -y && apt-get install -y npm
RUN npm install

RUN dotnet build "vdk240.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "vdk240.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "vdk240.dll"]