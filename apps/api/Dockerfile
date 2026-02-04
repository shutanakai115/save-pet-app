# Build stage
FROM golang:1.23-alpine AS builder

WORKDIR /app

# Install dependencies first (for better caching)
COPY go.mod go.sum* ./
RUN go mod download

# Copy source code and build
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o /api

# Production stage
FROM alpine:3.21

RUN apk --no-cache add ca-certificates tzdata

# Create non-root user for security
RUN adduser -D -g '' appuser
USER appuser

COPY --from=builder /api /api

EXPOSE 8080

CMD ["/api"]
