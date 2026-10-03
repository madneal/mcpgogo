package mcpgogo

import "testing"

func TestHello(t *testing.T) {
	tests := []struct {
		name string
		want string
	}{
		{name: "Codex", want: "hello, Codex"},
		{name: "", want: "hello, world"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := Hello(tt.name); got != tt.want {
				t.Fatalf("Hello(%q) = %q, want %q", tt.name, got, tt.want)
			}
		})
	}
}
