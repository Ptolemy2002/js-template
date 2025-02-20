import swaggerAutogen from "swagger-autogen";
import getEnv from "../env";
const env = getEnv();

const outputFile = './swagger_output.json';
const endpointFiles = ['src/routes/index.ts'];

const url = (
    (env.isProd && env.prodApiUrl) || env.devApiUrl
).split('://').slice(1).join('://');
const baseUrl = url.endsWith('/api/v1') ? url.slice(0, -7) : url;

const doc = {
	info: {
		version: "1.0.0",
		title: "{{ tmplr.project_name }}",
		description: "Documentation of the {{ tmplr.project_name }}",
	},
    host: baseUrl,
	schemes: [env.isProd ? "https" : "http"],
	consumes: ["application/json"],
	produces: ["application/json"],

	definitions: {
		User: {
			id: 1,
		},
	},

	"@definitions": {
		ErrorCode: {
			type: "string",
			enum: [
				"UNKNOWN",
				"BAD_INPUT",
				"INTERNAL",
				"NOT_FOUND",
				"NOT_IMPLEMENTED"
			]
		},

		ErrorResponse: {
			type: "object",
			properties: {
				ok: {
					type: "boolean",
					enum: [false]
				},
				// Code is either an error code or null
				code: {
					$ref: "#/definitions/ErrorCode"
				},
				message: {
					type: "string"
				},
				help: {
					type: "string",
					required: false,
					description: "URL to the documentation"
				}
			}
		},
	}
};

export default swaggerAutogen()(outputFile, endpointFiles, doc);