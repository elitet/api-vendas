import handlebras from 'handlebars';

interface ITemplateVariable {
  [key: string]: string | number;
}

interface IParseMailTemplate {
  template: string;
  variables: ITemplateVariable;
}

export default class HandblesMailTemplate {
  public async parse({
    template,
    variables,
  }: IParseMailTemplate): Promise<string> {
    const parseTemplate = handlebras.compile(template);

    return parseTemplate(variables);
  }
}
