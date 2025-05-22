// src/lib/queryClient.ts
import { QueryClient } from "@tanstack/vue-query";
import { appToast } from "@/shared/ui/toast";

export function createQueryClient() {
	return new QueryClient({
		defaultOptions: {
			mutations: {
				onError(error: unknown) {
					appToast.error({
						title: "Oops",
						description:
							(error as { response?: { data?: { msg?: string } } }).response
								?.data?.msg || "Erro desconhecido",
					});
				},
			},
		},
	});
}
