"use client";
import { useState } from "react";
import { Config, Data, Puck, Render, Slot } from "@puckeditor/core";

//Define components and field types for typescript
type Components = {
	HeadingBlock: {
		title: string;
	};
	Slot: {
		content: Slot;
	};
};

type RootProps = {
	title: string;
	description: string;
};

const config: Config<Components, RootProps> = {
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
			render: ({ title}) => {
				return (
					<h1>{title}</h1>
				);
			},
		},
		Slot: {
			fields: {
				content: {type: "slot"},
			},
			render: ({ content: Content }) => {
				return (
					<div className="p-5 inset-ring-1 inset-ring-orange-400">
						<Content />
					</div>
				);
			},
		},
	},
	//Root is the top-level component in Puck, a wrapper around other components
	root: {
		fields: {
			title: {type: "text"},
			description: {type: "textarea"},
		},
		defaultProps: {
			title: "title",
			description: "desc",
		},
		render: ({ children, title, description }) => {
			return (
				<div>
					<h1>{title}</h1>
					<p>{description}</p>
					{children}
				</div>
			);
		},
	}
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