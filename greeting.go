package mcpgogo

import "fmt"

// Hello returns a greeting for name.
func Hello(name string) string {
	if name == "" {
		name = "world"
	}
	return fmt.Sprintf("hello, %s", name)
}
