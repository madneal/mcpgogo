FROM golang:1.25-bookworm AS build

WORKDIR /src
COPY go.mod greeting.go greeting_test.go ./
COPY cmd ./cmd
RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags='-s -w' -o /out/mcpgogo ./cmd/mcpgogo

FROM gcr.io/distroless/static-debian12:nonroot
COPY --from=build /out/mcpgogo /mcpgogo
USER nonroot:nonroot
EXPOSE 8080
ENTRYPOINT ["/mcpgogo"]
