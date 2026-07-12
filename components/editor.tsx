"use client";
import { useState } from "react";
import { Config, Data, Puck, Render } from "@puckeditor/core";

//Define components and field types for typescript
type Components = {
	HeadingBlock: {
		title: string;
	};
};

const config: Config<Components> = {
	components: {
		HeadingBlock: {
			fields: {
				title: {
					//text field
					type: "text",
				},
			},
			//Default values for fields
			defaultProps: {
				title: "Hello World",
			},
			//Every component definition must provide a render function
			render: ({ title }) => {
				return <h1>{title}</h1>;
			},
		},
	},
};

//Describe the initial data
const initialData: Partial<Data> = {};

//Save the data to your database
const save = (data: Data) => {};

export default function Editor() {
	const [data, setData] = useState<Partial<Data>>(initialData);

	return (
		<Puck
			config={config}
			data={data}
			onChange={setData}
			onPublish={save}
		/>
	);
}

export function Page({data}: {data: Data}) {
	return <Render config={config} data={data} />;
}