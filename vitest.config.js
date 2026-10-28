import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "node",
		include: ["test/**/*.test.js"],
		exclude: ["test/fixtures/**", "node_modules/**"],
		testTimeout: 50_000,
		hookTimeout: 50_000,
		coverage: {
			provider: "v8",
			include: ["lib/**/*.js"],
			reporter: ["text", "lcov"],
		},
	},
});
