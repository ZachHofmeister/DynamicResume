"use client";
import { useState } from "react";
import { Config, Data, Puck, Render, Slot } from "@puckeditor/core";

//Define components and field types for typescript
type Components = {
	Title: {
		title: string;
	};
	Paragraph: {
		body: string;
	};
	Section: {
		title: string;
		content: Slot;
	};
};

type RootProps = {

};

const config: Config<Components, RootProps> = {
	components: {
		Title: {
			fields: {
				title: {
					type: "text",
					contentEditable: true,
				},
			},
			render: ({ title }) => {
				return (
					<h1 className="text-center font-serif font-bold text-3xl tracking-tight text-green-700">{title}</h1>
				);
			},
		},
		Paragraph: {
			fields: {
				body: {
					type: "richtext",
					contentEditable: true,
				},
			},
			render: ({ body }) => {
				return (
					<p className="text-center font-serif text-sm text-foreground-500 text-gray-800 dark:text-gray-200">
						{body}
					</p>
				);
			},
		},
		Section: {
			fields: {
				title: {
					type: "text",
					contentEditable: true,
				},
				content: {type: "slot"},
			},
			defaultProps: {
				title: "Section Title",
				content: [],
			},
			render: ({ title, content: Content }) => {
				return (
					<section className="mt-5 mb-8">
						<h2 className="font-serif font-bold text-xl text-green-700">{title}</h2>
						<hr className="border-t-2 mb-1.5" />
						<Content />
					</section>
				);
			}
		},
	},
	//Categorize components in sidebar
	categories: {
		typography: {
			components: ["Title", "Paragraph"],
			title: "Text",
			defaultExpanded: true,
			visible: true,
		},
		organization: {
			components: ["Section"]
		},
		//Default category, all other comps end up here
		other: {
			title: "Other"
		},
	},
	// Root is the top-level component in Puck, a wrapper around other components
	root: {
		fields: {
		},
		defaultProps: {
		},
		render: ({ children }) => {
			return (
				<div className="p-10 aspect-8.5/11 inset-ring inset-ring-blue-500">
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