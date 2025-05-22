import { useMutation, useQuery } from "@tanstack/vue-query";
import { getQueryClient } from "@/shared/api/queryClientStore";
import { MainRepository } from "@/repositories/main";

export function useGetAll() {
	return useQuery({
		queryKey: ["get-all"],
		queryFn: () => MainRepository.getAll(),
	});
}

export function useCreateMutation() {
	const queryClient = getQueryClient();

	return useMutation({
		mutationKey: ["create-all"],
		mutationFn: () => MainRepository.create(),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["get-all"] });
		},
	});
}
