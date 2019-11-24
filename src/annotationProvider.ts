import { DecorationInstanceRenderOptions, DecorationOptions, Range, workspace } from "vscode";

export class Annotations {
	public static paramAnnotation(message: string, range: Range): DecorationOptions {
		return {
			range,
			renderOptions: {
				before: {
					color: workspace.getConfiguration("jsannotations").get("annotationForeground") || "#adbec5",
					backgroundColor: workspace.getConfiguration("jsannotations").get("annotationBackground") || '#1e2c31',
					contentText: message,
					margin: "0px 5px",
					height: '-10px',
					fontStyle: workspace.getConfiguration("jsannotations").get("fontStyle"),
					fontWeight: workspace.getConfiguration("jsannotations").get("fontWeight"),
				}
			} as DecorationInstanceRenderOptions
		} as DecorationOptions;
	}
}
