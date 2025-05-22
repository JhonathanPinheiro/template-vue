import type { QueryClient } from "@tanstack/vue-query";

let client: QueryClient;

export function setQueryClient(qc: QueryClient) {
	client = qc;
}

export function getQueryClient(): QueryClient {
	return client;
}
