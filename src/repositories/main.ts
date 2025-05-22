import { httpClient } from "@/shared/api/http-client";

export const MainRepository = {
	getAll: async () => {
		const { data } = await httpClient.get("/");
		return data;
	},

	create: async () => {
		const { data } = await httpClient.post("/");
		return data;
	},
};
